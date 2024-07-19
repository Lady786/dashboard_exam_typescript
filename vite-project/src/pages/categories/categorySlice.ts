import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Category interfeysi (sizning actual ma'lumotlaringizga mos ravishda)
interface Category {
  id: string;
  name: string;
  // boshqa maydonlar
}

// initialState uchun type aniqlash
interface CategoryState {
  value: Category[];
}

const initialState: CategoryState = {
  value: [],
};

// fetchCategories uchun type aniqlash
export const fetchCategories = createAsyncThunk<Category[]>(
  'category/fetchCategories',
  async () => {
    const response = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.value = action.payload;
    });
  },
});

export default categorySlice.reducer;
