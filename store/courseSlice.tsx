import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// POST Course
export const postCourseData = createAsyncThunk<any, any, { rejectValue: string }>(
  'postCourseData',
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData), // Include courseID in courseData
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return [data.data];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// GET Courses with Pagination and Search
export const getCoursesData = createAsyncThunk<any, any, { rejectValue: string }>(
  'getCoursesData',
  async (searchData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/courses?page=${searchData.page}&limit=${searchData.pageSize}&search=${searchData.search}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Edit Course
export const editCourseData = createAsyncThunk<any, any, { rejectValue: string }>(
  'editCourseData',
  async (courseData, { rejectWithValue }) => {
    try {
      const id = courseData._id;
      const response = await fetch(`/api/courses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData), // Include courseID in courseData
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete Course
export const deleteCourseData = createAsyncThunk<any, any, { rejectValue: string }>(
  'deleteCourseData',
  async (courseData, { rejectWithValue }) => {
    try {
      const id = courseData._id;
      const response = await fetch(`/api/courses/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course. Please try again.');
      }

      return { _id: id };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalItems: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle GET Courses
      .addCase(getCoursesData.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(getCoursesData.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
        state.page = action.payload.currentPage;
        state.limit = action.payload.limit;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(getCoursesData.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Handle POST Course
      .addCase(postCourseData.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(postCourseData.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        state.data = [...state.data, ...action.payload];
      })
      .addCase(postCourseData.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Handle Edit Course
      .addCase(editCourseData.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(editCourseData.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        const index = state.data.findIndex((item: any) => item._id === action.payload._id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(editCourseData.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Handle Delete Course
      .addCase(deleteCourseData.pending, (state: any) => {
        state.status = 'loading';
      })
      .addCase(deleteCourseData.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        state.data = state.data.filter((item: any) => item._id !== action.payload._id);
      })
      .addCase(deleteCourseData.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
