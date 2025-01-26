import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // استخدم التخزين المحلي للمتصفح

// إعداد البيرسيست للتخزين
const persistConfig = {
  key: 'root', // مفتاح التخزين
  storage, // التخزين المحلي
};

// تغليف cartReducer بـ persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// إعداد المتجر
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // استخدم الـ reducer المغلّف
  },
});

// إعداد persistor
export const persistor = persistStore(store);
