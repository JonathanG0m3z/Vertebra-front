import React from 'react';
import data from '../db/Shops.json';
import EcoCardShop from './EcoCardShop';
import NotFound from './NotFound';

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

const EcoTabShop: React.FC = ({idCompany, idGroup}) => {
  let shopData: Shop[] =[];
  if(idCompany!==undefined) shopData= data.data.filter((shop)=>shop.idCompany===idCompany);
  else if(idGroup!==undefined) shopData= data.data.filter((shop)=>shop.idGroup===idGroup);
    
  return (
    <>
    {!shopData.length?<NotFound mensaje={`No hay tiendas en ${idCompany!==undefined?'esta compañía':'este grupo'}`} />:null}
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
