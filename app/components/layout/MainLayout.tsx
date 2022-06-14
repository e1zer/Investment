import Head from "next/head";
import React, { ReactNode, FC } from "react";
import NavBar from "./NavBar";

interface ILayout {
  children: ReactNode,
  title?: string,
  description?: string,
  keywords?: string
}

const MainLayout: FC<ILayout> = ({children, title, description, keywords}) => {
  return (
    <>
      <Head>
        <title>{title || 'Симулятор инвестирования'}</title>
        <meta name='description' content={`Симулятор инвестирования. Каждый может попробовать себя в инвестировании.` + description}/>
        <meta name='robots' content='index follow'/>
        <meta name='keywords' content={keywords || 'Деньги, инвестирование, акции, заработок, симулятор инвестирования, бизнес'}/>
        <meta name='viewport' content="width=device-width, initial-scale=1"/>
      </Head>
      <NavBar />
      {children}
    </>
  )
}

export default MainLayout;