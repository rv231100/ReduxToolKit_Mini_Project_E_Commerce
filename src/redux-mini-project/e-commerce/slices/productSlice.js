import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const fetchData = async () => {
//     const response = await fetch("https://dummyjson.com/products");
//     const jsonData = await response.json();
//     // console.log(jsonData.products);
//     const data = jsonData.products;
//     dispatch(loadProducts(data));
//   };

export const fetchData = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://dummyjson.com/products");
  return await response.json();
  //   const data = jsonData.products;
  //   return data;
  // console.log(jsonData.products);
  //   dispatch(loadProducts(data));
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    status: "ideal", //ideal,pending,success,failed
    error: null,
    category: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.category = action.payload.products.category;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
