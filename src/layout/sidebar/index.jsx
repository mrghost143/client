import React from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const navigate=useNavigate()

    const items = [
        {
            key: 'sub1',
            label: 'Entity',
            icon: <MailOutlined />,
            children: [
                {
                    key: 'g1',
                    label: 'Tenant',
                    type: 'group',
                    children: [
                        {
                            key: '1',
                            label: 'Report',
                            onClick: () => navigate('/tenant-report'), // Navigate on click
                        },
                        {
                            key: '2',
                            label: 'Option 2',
                        },
                    ],
                },
                {
                    key: 'g2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        {
                            key: '3',
                            label: 'Option 3',
                        },
                        {
                            key: '4',
                            label: 'Option 4',
                        },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        {
                            key: '7',
                            label: 'Option 7',
                        },
                        {
                            key: '8',
                            label: 'Option 8',
                        },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'sub4',
            label: 'Navigation Three',
            icon: <SettingOutlined />,
            children: [
                {
                    key: '9',
                    label: 'Option 9',
                },
                {
                    key: '10',
                    label: 'Option 10',
                },
                {
                    key: '11',
                    label: 'Option 11',
                },
                {
                    key: '12',
                    label: 'Option 12',
                },
            ],
        },
        {
            key: 'grp',
            label: 'Group',
            type: 'group',
            children: [
                {
                    key: '13',
                    label: 'Option 13',
                },
                {
                    key: '14',
                    label: 'Option 14',
                },
            ],
        },
    ];
    return (
        <Sider
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }} >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            Sider
        </Sider>
    )
}

