import React, { useState } from 'react';
import { NextPage } from "next";

import { IStock } from "app/types";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';

import SellModal from '@UI/modal/SellModal'; 

import styles from './Profile.module.scss';

interface IMyStock {
  stock: IStock,
  profitInPercent: number
}

const MyStock: NextPage<IMyStock> = ({stock, profitInPercent}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          width: '100%',
          flexGrow: 1,
          marginBottom: '2rem'
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Image alt="Company logotype" src={stock.img}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">{stock.company}</Typography>
                <Typography variant="body2" color="text.secondary">Bought for: {stock.boughtPrice}$</Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"                     
                  className={
                    stock.sellPrice >= stock.boughtPrice
                      ? styles.promotion
                      : styles.fall
                    }
                  >
                  Profit on sale: {`${profitInPercent > 0 ? "+" : ""}${profitInPercent}%`}
                </Typography>
              </Grid>
              <Grid item><Button variant="outlined" onClick={() => setIsOpenModal(true)}>Sell</Button></Grid>
            </Grid>
            <Grid item><Typography variant="subtitle1" component="div">${stock.sellPrice}</Typography></Grid>
          </Grid>
        </Grid>
        <SellModal 
          isOpenModal={isOpenModal} 
          setIsOpenModal={setIsOpenModal} 
          company={stock.company} 
          sellPrice={stock.sellPrice} 
          boughtPrice={stock.boughtPrice}
        />
      </Paper>
  );
}

export default MyStock;