import React from 'react';
import data from '../db/Groups.json';
import EcoCardGroup from './EcoCardGroup';

interface Base {
  name: string;
  percent: number;
  color: string;
}

interface Group {
  id: String;
    name: String;
    idCompany: number;
    shops: number;
    accounts: number;
    base: Base[];
}

const idCompany: number = 1;

const groupData: Group[]  = data.data.filter((group)=>group.idCompany===idCompany);

const EcoTabGroup: React.FC = () => {
  return (
    <>
      <div>
        {groupData.map((group, index) => {
          return (
            <div key={index} style={{ maxWidth: "250px" }}>
              <EcoCardGroup record={{...group}} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EcoTabGroup;
