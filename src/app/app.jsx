


import Routing from "./route"

import React from "react";
import { Flex, Layout } from 'antd';
import { Sidebar, Header, Footer } from "@layout";
const { Content } = Layout;
import { BrowserRouter as Router } from "react-router-dom";
export const App = () => {
  return (
    <Router>
    <Flex gap="middle" wrap className="min-h-screen">
      <Layout style={{ gap: "10px" }} >
        <Header />

        <Layout style={{ gap: "10px" }}>
          <Sidebar />
          <Content >
            <Routing />
          </Content>
        </Layout>
        <Footer />
      </Layout>

    </Flex>
    </Router>
  )
}