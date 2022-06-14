import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { useTypedSelector } from "@hooks/useTypedSelector";

import CardStock from "./CardStock";
import styles from "./Main.module.scss";

const Main = () => { 
  const stockData = useTypedSelector(state => state.stockReducer);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 8, mb: 10}}>
        <div className={styles.container}>
          {stockData.map((elem) => {
            const percentDifference: number = Number(((elem.currentPrice-elem.prevPrice) / elem.prevPrice * 100).toFixed(2)); 
            return (
              <CardStock key={elem.company} stock={elem} percentDifference={percentDifference}/>    
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Main;
