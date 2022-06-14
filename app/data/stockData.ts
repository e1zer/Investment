import * as Logotypes from '@assets/images/Logotypes';
import { IStock } from 'app/types'; 

const stockData: IStock[] = [
  {
    company: 'Amazon',
    description: 'Amazon is an American company, the largest in the world in the markets of e-commerce platforms and public cloud computing by revenue and market capitalization. Theadquarters is in Seattle.',
    prevPrice: 426,
    currentPrice: 431,
    boughtPrice: 0,
    sellPrice: 0,
    isBought: false,
    img: Logotypes.amazon
  },
  {
    company: 'Facebook',
    description: 'Meta Platforms Inc. is an American multinational holding company that owns a technology conglomerate and is located in Menlo Park, California. Facebook, Instagram, WhatsApp and Oculus are of particular concern.',
    prevPrice: 280,
    currentPrice: 263,
    boughtPrice: 0,
    sellPrice: 0,
    isBought: false,
    img: Logotypes.facebook
  },
  {
    company: 'Apple',
    description: 'Apple is an American corporation that manufactures personal and tablet computers. One of the pioneers in the field of personal computers and modern multitasking operating systems with a graphical interface.',
    prevPrice: 680,
    currentPrice: 714,
    boughtPrice: 0,
    sellPrice: 0,
    isBought: false,
    img: Logotypes.apple
  },
  {
    company: 'Yahoo',
    description: 'Yahoo! is an American company that owns the second most popular search engine in the world and provides a number of services united by the Internet portal Yahoo! directory; the portal includes the popular Yahoo!',
    prevPrice: 330,
    currentPrice: 300,
    boughtPrice: 0,
    sellPrice: 0,
    isBought: false,
    img: Logotypes.yahoo
  },
]



export default stockData;