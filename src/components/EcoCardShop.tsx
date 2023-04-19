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
const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

interface ecoCard {
  record: {
    id: String;
    name: String;
    idCompany: number;
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

const EcoCardShop = ({ record }: ecoCard) => {
  return (
    <>
    <Card style={{ width: 250 }}>
    <Row>
      <Dropdown menu={{ items }} trigger={['click']}>
          <Col span={24} style={{ marginBottom: "9px" }}>
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
      <Tooltip title="accounts" color="#009432">
        <Col
            span="24"
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
export default EcoCardShop;
