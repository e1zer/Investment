import React, {FC, useEffect} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from 'app/store';
import { useAction } from '@hooks/useAction';

import 'normalize.css/normalize.css';
import '../styles/globals.scss';

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  const {updateStock} = useAction();

  useEffect(() => {
    const interval = setInterval(() => {
      updateStock();
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <Component {...pageProps} />
  )
};

export default wrapper.withRedux(WrappedApp);