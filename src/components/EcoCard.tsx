import { Row, Col, Typography, Progress, Divider, Tooltip } from "antd";
import {
  BarChartOutlined,
  BulbOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

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

      <Col span={24} style={{ marginBottom: "9px" }}>
        <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
          {record.name.toUpperCase()}
        </Typography.Text>
      </Col>

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
  );
};
export default EcoCard;
