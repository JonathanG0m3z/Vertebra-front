import React from 'react';
import data from '../db/Shops.json';
import EcoCardShop from './EcoCardShop';

interface Base {
  name: string;
  percent: number;
  color: string;
}

interface Shop {
  idGroup: String;
  idCompany: number;
  id: String;
  name: String;
  accounts: number;
  base: Base[];
}

const idCompany: number = 1;

const shopData: Shop[]  = data.data.filter((shop)=>shop.idCompany===idCompany);

const EcoTabShop: React.FC = () => {
  return (
    <>
      <div>
        {shopData.map((shop, index) => {
          return (
            <div key={index} style={{ maxWidth: "250px" }}>
              <EcoCardShop record={{...shop}} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EcoTabShop;
