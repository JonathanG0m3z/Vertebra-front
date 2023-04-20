import React from 'react';
import data from '../db/Account.json';
import EcoCardAccount from './EcoCardAccount';
import NotFound from './NotFound';

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

const EcoTabAccount: React.FC = ({idCompany, idGroup, idShop}) => {
  let accountData: Account[] = [];
  let message = "";
  if(idCompany!==undefined) {accountData= data.data.filter((account)=>account.idCompany===idCompany);
    message= "esta compañía";
  }
  else if(idGroup!==undefined) {accountData= data.data.filter((account)=>account.idGroup===idGroup);
    message= "este grupo";
  }
  else if(idShop!==undefined) {accountData= data.data.filter((account)=>account.idShop===idShop);
    message= "esta tienda";
  }
  return (
    <>
    {!accountData.length?<NotFound mensaje={`No hay cuentas en ${message}`} />:null}
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
