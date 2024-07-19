import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Mahsulot interfeysi (o‘zgartirilgan malumotlar asosida)
interface Product {
  _id: string;
  name: string;
  image: string;
  // Boshqa kerakli maydonlarni qo‘shing
}

interface ProductState {
  value: Product[];
}

const initialState: ProductState = {
  value: []
};

// Mahsulotlarni olish uchun asinxron funksiya
export const fetchProducts = createAsyncThunk<Product[]>(
  'product/fetch',
  async () => {
    const response = await fetch(
      "https://ecommerce-backend-fawn-eight.vercel.app/api/products"
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Product[] = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    });
  },
});

export default productSlice.reducer;
