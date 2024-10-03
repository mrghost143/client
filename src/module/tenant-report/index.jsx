import { Button, Card, Table } from 'antd'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
  {
    key: '2',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
  {
    key: '3',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
  {
    key: '4',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
  {
    key: '5',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
  {
    key: '6',
    name: 'Mike',
    email: "xyz@gmail.com",
    role: 'Admin',
    status:"active",
    sso:"SSO",
    "email-verify":"13-May-2023",
    "user-activitation":"29-Feb-2021",
    "last-login":"21-Jan-2020",
    "total-time":"72 hour 32 minutes 24 second"
  },
];

const columns = [
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'EmailId',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'User Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'User Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Is SSO',
    dataIndex: 'sso',
    key: 'sso',
  },
  {
    title: 'Email Verified On',
    dataIndex: 'email-verify',
    key: 'email-verify',
  },
  {
    title: 'User Activitation',
    dataIndex: 'user-activitation',
    key: 'user-activitation',
  },
  {
    title: 'Last Login',
    dataIndex: 'last-login',
    key: 'last-login',
  },
  {
    title: 'Total Time Spent',
    dataIndex: 'total-time',
    key: 'total-time',
  },
];



export const TenantReport = () => {


  // const fetchSomeData = async () => {
  //   const response = await axios.get('https://api.example.com/data');
  //   return response.data; // Return the data directly
  // };
  
  
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['someData'], // Use queryKey instead of the array directly
  //   queryFn: fetchSomeData, // Use queryFn for the fetching function
  // });
  
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // Above commented code is for fetch network request with tanstackquery
  return (
    <Card bordered={false} title={"Tenant report"} extra={  <Button type='primary' color={"green"} icon={<DownloadOutlined />}>Export to Excel</Button>}>
      <Table dataSource={dataSource} columns={columns}          showSorterTooltip={false}
            pagination={false} />;

    </Card>
  )
}

