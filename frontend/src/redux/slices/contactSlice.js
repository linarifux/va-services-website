import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Async thunk for submitting a new contact form (Public)
export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/contacts', formData);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Something went wrong';
      return rejectWithValue(message);
    }
  }
);

// Async thunk to fetch all messages (Admin Only)
export const fetchMessages = createAsyncThunk(
  'contact/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/contacts');
      return response.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to fetch messages';
      return rejectWithValue(message);
    }
  }
);

// Async thunk to update message status (Admin Only)
export const updateMessageStatus = createAsyncThunk(
  'contact/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/contacts/${id}/status`, { status });
      return response.data.data; // Returns the updated message object
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to update status';
      return rejectWithValue(message);
    }
  }
);

// Async thunk to delete a message
export const deleteMessage = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/contacts/${id}`);
      return id; 
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Failed to delete';
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  messages: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit Form
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Thank you! Your inquiry has been successfully received.';
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Fetch Messages
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update Status
      .addCase(updateMessageStatus.fulfilled, (state, action) => {
        // Find the specific message and update it in the array so the UI reflects the change immediately
        const index = state.messages.findIndex((msg) => msg._id === action.payload._id);
        if (index !== -1) {
          state.messages[index] = action.payload;
        }
      })
      // Delete Message
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.messages = state.messages.filter((msg) => msg._id !== action.payload);
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;