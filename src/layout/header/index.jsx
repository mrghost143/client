// import React, { useState } from 'react';
import "./header.scss";
import { Avatar, Flex, Layout } from 'antd';
const { Header: AntHeader } = Layout;
import { UserOutlined } from '@ant-design/icons';
export const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    // const links = [
    //     { name: 'Home', href: '#' },
    //     { name: 'About', href: '#' },
    //     { name: 'Services', href: '#' },
    //     { name: 'Contact', href: '#' },
    // ];

    return (
        <AntHeader >
            <Flex justify='space-between'><div>Logo</div><div>    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </div></Flex>
        </AntHeader>
    );
};

