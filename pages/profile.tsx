import React from 'react';
import type { NextPage } from 'next'
import MainLayout from '@components/layout/MainLayout';
import Profile from '@components/screens/Profile/Profile';


const ProfilePage: NextPage = () => {
  
  return (
    <MainLayout title='Профиль, купленные акции'>
      <Profile />
    </MainLayout>
  )
}

export default ProfilePage;