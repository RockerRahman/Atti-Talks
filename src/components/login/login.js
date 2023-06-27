import React from "react";
import { Button, Card, Input, Layout, Row, Typography } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function Login() {
  const getGradientStyle = () => {
    const gradientColorStart = "#00C9FF";
    const gradientColorEnd = "#92FE9D";
    return {
      background: `linear-gradient(to bottom, ${gradientColorStart}, ${gradientColorEnd})`,
    };
  };
  return (
    <Layout style={getGradientStyle()}>
      <Content>
        <Row
          justify="center"
          style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <div className="centered-card">
            <Card
              style={{
                textAlign: "center",
                borderRadius: "25px",
                lineHeight: "3.5rem",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  fontFamily: "Moirai One",
                }}
              >
                ATTI-TALKS
              </Typography>
              <Input placeholder="Phonenumber, username, or email" />
              <Input placeholder="Password" />
          <button  style={{
                  fontWeight: "bold",
                  fontFamily: "Moirai One",
                }}className="bg-black w-20 p-1 rounded-lg text-white text-xl ">Log In</button>
            </Card>
          </div>
        </Row>
      </Content>
    </Layout>
  );
}

export default Login;
