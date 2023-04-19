import { Row, Col, Typography, Progress, Divider, Tooltip, Card, Dropdown } from "antd";
import {
  BarChartOutlined,
  BulbOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
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
    id: Number;
    name: String;
    groups: number;
    shops: number;
    accounts: number;
    base: any;
    account: any;
  };
}

const EcoCard = ({ record }: ecoCard) => {
  return (
    <>
    <Card style={{ width: 250 }}>
      <Row>
      {record?.account !== undefined ? (
        <Col span={24} style={{ marginBottom: "3px" }}>
          <Typography.Text
            style={{ color: "#5C5C61", fontWeight: "bold", fontSize: "14px" }}
          >
            Cuenta: {record.account}
          </Typography.Text>
        </Col>
      ) : null}
      <Dropdown menu={{ items }} trigger={['click']}>
          <Col span={24} style={{ marginBottom: "9px" }}>
          <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
            {record.name.toUpperCase()}
          </Typography.Text>
        </Col>
      </Dropdown>
      

      {record?.base.map((m: any) => (
        <>
          {record?.groups !== undefined ? (
            <>
              <Typography.Text
                style={{ fontSize: "0.7rem", textAlign: "center" }}
              >
                {m.name}
              </Typography.Text>
              <Progress
                percent={m?.percent}
                status="active"
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068",
                }}
                style={{ marginBottom: "9px" }}
              />
            </>
          ) : (
            <Tooltip title={m.name} color="#D088B9">
              <Col
                span={6}
                style={{
                  display: "grid",
                  justifyContent: "center",
                  marginBottom: "9px",
                }}
              >
                {m?.name === "Current Conmsuption" ? (
                  <BulbOutlined
                    style={{
                      color: "#009432  ",
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  />
                ) : m?.name === "Potential" ? (
                  <span
                    className="material-icons"
                    style={{
                      color: "#009432  ",
                      fontSize: "22px",
                      fontWeight: "500",
                    }}
                  >
                    battery_charging_full
                  </span>
                ) : m?.name === "Base Conmsuption" ? (
                  <SlidersOutlined
                    style={{
                      color: "#009432  ",
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  />
                ) : (
                  <BarChartOutlined
                    style={{
                      color: "#009432",
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  />
                )}

                <Typography.Text
                  style={{ fontSize: "0.7rem", textAlign: "center" }}
                >
                  {m?.percent}
                </Typography.Text>
              </Col>
            </Tooltip>
          )}
        </>
      ))}

      {record?.groups !== undefined ? (
        <Tooltip title="groups" color="#009432">
          <Col
            span={record?.groups !== undefined ? 8 : 12}
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
                groups
              </span>
            </Typography.Text>

            <Typography.Text
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
              }}
            >
              {record?.groups}
            </Typography.Text>
          </Col>
        </Tooltip>
      ) : null}

      {record?.shops !== undefined ? (
        <Tooltip title="shops" color="#009432">
          <Col
            span={record?.groups !== undefined ? 8 : 12}
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
                storefront
              </span>
            </Typography.Text>

            <Typography.Text
              style={{ fontSize: "0.7rem", textAlign: "center" }}
            >
              {record?.shops}
            </Typography.Text>
          </Col>
        </Tooltip>
      ) : null}

      {record?.accounts !== undefined ? (
        <Tooltip title="accounts" color="#009432">
          <Col
            span={
              record?.groups !== undefined
                ? 8
                : record?.shops === undefined
                ? 24
                : 12
            }
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Typography.Text>
              <span className="material-icons" style={{ color: "#009432" }}>
                receipt_long
              </span>
            </Typography.Text>

            <Typography.Text
              style={{ fontSize: "0.7rem", textAlign: "center" }}
            >
              {record?.accounts}
            </Typography.Text>
          </Col>
        </Tooltip>
      ) : null}
    </Row>
    </Card>
    <Divider type="vertical" />
    </>
  );
};
export default EcoCard;
