import React, { FC } from 'react';
import { MainContent } from './components/MainContent/MainContent';
import { Header } from './components/Header/Header';

export const App: FC = function App() {
  return (
    <>
      <Header title="Products" />
      <MainContent />
    </>
  );
};
