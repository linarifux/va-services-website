import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Fetch all published blogs (Public)
export const fetchBlogs = createAsyncThunk(
  'blog/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/blogs');
      return response.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to fetch blogs';
      return rejectWithValue(message);
    }
  }
);

// Fetch all blogs including drafts (Admin)
export const fetchAdminBlogs = createAsyncThunk(
  'blog/fetchAdminAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/blogs/admin');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Create a new blog post
export const createBlog = createAsyncThunk(
  'blog/create',
  async (blogData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/blogs', blogData);
      return response.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to create blog post';
      return rejectWithValue(message);
    }
  }
);

// Update an existing blog post
export const updateBlog = createAsyncThunk(
  'blog/update',
  async ({ id, blogData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/blogs/${id}`, blogData);
      return response.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to update blog post';
      return rejectWithValue(message);
    }
  }
);

// Delete Blog
export const deleteBlog = createAsyncThunk(
  'blog/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/blogs/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  blogs: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearBlogState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Public Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Fetch Admin Blogs
      .addCase(fetchAdminBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdminBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchAdminBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Create Blog
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Blog post created successfully!';
        state.blogs.unshift(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update Blog
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Blog post updated successfully!';
        // Update the specific blog in the array
        const index = state.blogs.findIndex((blog) => blog._id === action.payload._id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Delete Blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
      });
  },
});

export const { clearBlogState } = blogSlice.actions;
export default blogSlice.reducer;