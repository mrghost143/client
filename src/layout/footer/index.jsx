// src/Footer.jsx
import "./footer.scss"
import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter >Companyb name ©{new Date().getFullYear()} Created by </AntFooter>
  );
};
