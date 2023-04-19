import React from 'react';
import data from '../db/Company.json';
import EcoCard from './EcoCard';

interface Base {
  name: string;
  percent: number;
  color: string;
}

interface Company {
  id: number;
  groups: number;
  shops: number;
  accounts: number;
  name: string;
  base: Base[];
}

const companyData: { data: Company[] } = data;

const EcoTabCompany: React.FC = () => {
  return (
    <>
      <div>
        {companyData.data.map((company, index) => {
          return (
            <div key={index}>
              <EcoCard record={{...company, account: undefined}} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EcoTabCompany;
