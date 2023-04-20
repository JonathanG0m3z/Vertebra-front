import React from 'react';
import data from '../db/Groups.json';
import EcoCardGroup from './EcoCardGroup';
import NotFound from './NotFound';

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
interface Props {
  idCompany: number | undefined;
}

const EcoTabGroup: React.FC = ({idCompany}: Props) => {
  const groupData: Group[]  = data.data.filter((group)=>group.idCompany===idCompany);
  return (
    <>
    {!groupData.length?<NotFound mensaje={`No hay grupos en esta compañía`} />:null}
      <div style={{overflowY: 'scroll', width: '270px', height: '90vh'}}>
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
