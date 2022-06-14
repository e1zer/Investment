import React from 'react';
import type { NextPage } from 'next'
import Main from '@components/screens/Main/Main';
import MainLayout from '@components/layout/MainLayout';


const Home: NextPage = () => {
  
  return (
    <MainLayout title='Список акций - симулятор инвестирования'>
      <Main />
    </MainLayout>
  )
}
 
export default Home;
