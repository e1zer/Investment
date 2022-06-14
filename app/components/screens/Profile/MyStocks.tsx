import React from 'react';
import { useRouter } from "next/router";
import { useTypedSelector } from "@hooks/useTypedSelector";

import MyStock from './MyStock';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import styles from './Profile.module.scss';

const MyStocks = () => {
  const stockData = useTypedSelector(state => state.stockReducer);
  const boughtStock = stockData.filter(elem => elem.isBought);
  const router = useRouter();
  
  return (
    <>
      <hr/>
      {
        boughtStock.length 
        ?    
          <div className={styles.wrapper}>
            {boughtStock.map(elem => {
              const profitInPercent:number = Number(((elem.sellPrice-elem.boughtPrice) / elem.boughtPrice * 100).toFixed(1));
              return(
                <MyStock key={elem.company} stock={elem} profitInPercent={profitInPercent}/>
              )
            })}
          </div> 
        :
        <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', padding: '1rem 2rem', margin: '3rem auto 0'}}>
          <Typography variant="h5" gutterBottom component="div" sx={{textAlign: 'center'}}>You currently have no purchased shares</Typography>
          <Button variant="contained" onClick={() => router.push('/')}>Buy shares</Button>
        </Card>
      }
    </>
  );
}

export default MyStocks;