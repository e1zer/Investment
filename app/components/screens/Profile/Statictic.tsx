import React, { useState } from 'react';

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

import { useTypedSelector } from "@hooks/useTypedSelector"; 

import styles from './Profile.module.scss'
import IncreaseModal from '@UI/modal/IncreaseModal';

const Statictic = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const profileData = useTypedSelector(state => state.profileReducer);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 6, mb: 10}}>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h5" className={styles.card_title} component="div">Current balance:</Typography>
              <Typography variant="h5" component="div">{profileData.balance} $</Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" onClick={() => setIsOpenModal(true)} endIcon={<SendIcon />}>Top UP</Button>
            </CardActions>
          </Card>

          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h5" className={styles.card_title}  component="div">Purchased shares:</Typography>
              <Typography variant="h5" component="div">{profileData.purchasedShares}</Typography>
              <Typography variant="h5" className={styles.card_title} component="div">Amount of purchases:</Typography>
              <Typography variant="h5" component="div">{profileData.amountOfPurchases} $</Typography>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h5" className={styles.card_title} component="div">Contributed money:</Typography>
              <Typography variant="h5" component="div">{profileData.сontributedMoney} $</Typography>
              <Typography variant="h5" className={styles.card_title} component="div">Sales amount:</Typography>
              <Typography variant="h5" component="div">{profileData.salesIncome} $</Typography>
            </CardContent>
          </Card>
        </div>
      </Container>

      <IncreaseModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </>
  );
}

export default Statictic;