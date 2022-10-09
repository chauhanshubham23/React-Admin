import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Layout, Menu } from "antd";
import React from "react";
import Title from "antd/lib/typography/Title";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Product from "./Components/Product";
import Home from "./Components/Home";
import ProductForm from "./Components/ProductForm";


const { Header, Sider, Content } = Layout;

function App() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Layout>
        <Header style={{background:'blue'}}>
          <Title
            style={{ color: "white", float: "right", padding: 10 }}
            level={4}
          >
            Admin
          </Title>
          <Avatar
            icon={<UserOutlined />}
            style={{ float: "right", margin: 10 }}
          />

          <Title style={{ color: "white", padding: 10 }} level={3}>
            Rubick.ai
          </Title>
        </Header>
        <Layout>
          <Sider className="sidemenu">
            <Menu onClick={({key})=>{
      if(key === 'signout'){

      }else{
        navigate(key);
      }
     }}>
            
              <Menu.Item key="/" className="menu">Home</Menu.Item>
              <Menu.Item key="/product" className="menu">Product</Menu.Item>
              <Menu.Item key="/team" className="menu">Team</Menu.Item>
              <Menu.Item key="/support" className="menu">Support</Menu.Item>
              <Menu.Item key="/contact" className="menu">Contact Us</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content className="contentbody">

              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/product"
                  element={<Product />}
                ></Route>
                <Route exact path="/team" element={<div>Team</div>}></Route>
                <Route
                  exact
                  path="/support"
                  element={<div>Support</div>}
                ></Route>
                <Route
                  exact
                  path="/contact"
                  element={<div>Contact Us</div>}
                ></Route>
                <Route
                  exact
                  path="/productform"
                  element={<ProductForm />}
                ></Route>
               
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
