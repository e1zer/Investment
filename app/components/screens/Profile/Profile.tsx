import React from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Statictic from './Statictic';
import MyStocks from './MyStocks';

const Profile = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 6, mb: 10}}>
        <Statictic />
        <MyStocks />
      </Container>
    </>
  );
}

export default Profile;