import { Row, Col, Typography, Divider, Tooltip, Card } from "antd";
import {
  BarChartOutlined,
  BulbOutlined,
  SlidersOutlined,
  ApiFilled,
} from "@ant-design/icons";

interface ecoCard {
  record: {
    id: String;
    name: String;
    idCompany: number;
    idShop: String;
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

const EcoCardAccount = ({ record }: ecoCard) => {
  return (
    <>
    <Card style={{ width: 250 }}>
    <Row>
        <Col span={24} style={{ marginBottom: "9px" }}>
        <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
          {record.name.toUpperCase()}
        </Typography.Text>
      </Col>
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
    </Row>
    </Card>
    <Divider type="vertical" />
    </>
  );
};
export default EcoCardAccount;
