import React from 'react';
import data from '../db/Account.json';
import EcoCardAccount from './EcoCardAccount';

interface Base {
  name: string;
  percent: number;
  color: string;
}

interface Account {
  idGroup: String;
  idCompany: number;
  id: String;
  name: String;
  idShop: String;
  base: Base[];
}

const EcoTabAccount: React.FC = ({idCompany, idGroup}) => {
  let accountData: Account[] = [];
  if(idCompany!==undefined) accountData= data.data.filter((account)=>account.idCompany===idCompany);
  else if(idGroup!==undefined) accountData= data.data.filter((account)=>account.idGroup===idGroup);
  return (
    <>
      <div>
        {accountData.map((account, index) => {
          return (
            <div key={index} style={{ maxWidth: "250px" }}>
              <EcoCardAccount record={{...account}} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EcoTabAccount;
