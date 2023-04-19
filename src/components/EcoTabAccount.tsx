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

const idCompany: number = 1;

const accountData: Account[]  = data.data.filter((account)=>account.idCompany===idCompany);

const EcoTabAccount: React.FC = () => {
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
