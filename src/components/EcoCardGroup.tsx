import { Row, Col, Typography, Divider, Tooltip, Card } from "antd";
import {
  BarChartOutlined,
  BulbOutlined,
  SlidersOutlined,
  ApiFilled,
  ShopOutlined,
} from "@ant-design/icons";

import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useContext, useState } from "react";
import EcoTabGroup from "./EcoTabGroup";
import EcoTabShop from "./EcoTabShop";
import EcoTabAccount from "./EcoTabAccount";
import { EcoTabContext } from "./context/EcoTabContext";
import { EcoTabReducerActionType } from "./context/EcoTabReducer";

interface ecoCard {
  record: {
    id: String;
    name: String;
    idCompany: number;
    shops: number;
    accounts: number;
    base: any;
  };
};

interface Base {
  name: string;
  percent: number;
  color: string;
}

const icons = {
  0: <BulbOutlined />,
  1: <SlidersOutlined />,
  2: <BarChartOutlined />,
  3: <ApiFilled />
};

const EcoCardGroup = ({ record }: ecoCard) => {
  const { dispatch } = useContext(EcoTabContext);
  const [group, setGroup] = useState(null);

  const tabSelector = {
    Tiendas: <EcoTabShop idGroup={group?.id} />,
    Cuentas: <EcoTabAccount idGroup={group?.id} />,
  };

  const handleClicOption = (event)=>{
    dispatch({ type: EcoTabReducerActionType.ADD_TAB, payload: {
      title: `${group.name} - ${event.target.id}`,
      content: tabSelector[event.target.id]
    }});
  };
  
  const items: MenuProps['items'] = [
    {
      label: <a onClick={handleClicOption} id='Tiendas'>Tiendas</a>,
      key: '1',
    },
    {
      label: <a onClick={handleClicOption} id='Cuentas'>Cuentas</a>,
      key: '2',
    },
  ];
  return (
    <>
    <Card style={{ width: 250 }}>
    <Row>
      <Dropdown menu={{ items }} trigger={['click']}>
          <Col span={24} style={{ marginBottom: "9px" }} onClick={()=>setGroup(record)}>
          <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
            {record.name.toUpperCase()}
          </Typography.Text>
        </Col>
      </Dropdown>
      {record?.base[0] !== undefined ? (
        record?.base?.map((b: Base, index: number)=><>
          <Tooltip title={b.name} color="#009432">
          <Col
            span={b !== undefined ? 6 : 12}
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
              {icons[index]}
              </span>
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
              }}
            >
              {b.percent}
            </Typography.Text>
          </Col>
        </Tooltip>
        </>)
      ) : null}
      <Tooltip title="shops" color="#009432">
        <Col
            span="12"
            style={{ display: "grid", justifyContent: "center" }}
          >
        <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
              <ShopOutlined />
              </span>
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
              }}
            >
              {record.shops}
            </Typography.Text>
      </Col>
      </Tooltip>
      <Tooltip title="accounts" color="#009432">
        <Col
            span="12"
            style={{ display: "grid", justifyContent: "center" }}
          >
        <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
              receipt_long
              </span>
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
              }}
            >
              {record.accounts}
            </Typography.Text>
      </Col>
      </Tooltip>
    </Row>
    </Card>
    <Divider type="vertical" />
    </>
  );
};
export default EcoCardGroup;
