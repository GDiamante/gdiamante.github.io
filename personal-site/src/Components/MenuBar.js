import React from 'react'
import { Menu, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const { Title } = Typography;

const HOME_ROUTE = '/'

export default function MenuAppBar(props) {
      return (
            <Menu
                mode="horizontal"
                theme="dark"    
                activeKey={[]}
                selectable={false}
            >
                <Menu.Item
                    style={{ marginLeft: "1.25rem" }}
                    onClick={() => {
                        props.history.push("/");
                    }}
                    key="app-title"
                >
                    <Title level={4} style={{color: 'white', fontSize: "26px", marginBottom: "0.35rem"}}>
                        Giovanni Diamante
                    </Title>
                </Menu.Item>
                <Menu.Item
                    style={{ float: "right", marginRight: "5rem" }}
                    key="methods"
                >
                    <Link to='/about'>About</Link>
                </Menu.Item>
            </Menu>
        );
}
