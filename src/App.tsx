import React, { FC } from 'react';
import { ProductList } from './components/ProductList/ProductList';
import { Header } from './components/Header/Header';

export const App: FC = function App() {
  return (
    <>
      <Header title="Products" />
      <ProductList />
    </>
  );
};
