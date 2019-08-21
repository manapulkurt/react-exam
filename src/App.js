import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './index.css'

import TableList from './TableList'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

class App extends React.Component {

  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo"> <h2 style={{ textAlign: "center", color: "white" }}>  IceFox </h2> </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span> <a href="/" style={{ color: "white" }}> Home </a> </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>List</span>
                </span>
              }
            >
              <Menu.Item key="3"> <a href="/List1"> List 1 </a> </Menu.Item>
              <Menu.Item key="4" href="/List2">List 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
            <BrowserRouter>
               <Switch>    
                 <Route exact path='/' component={ TableList }/>
                 <Route exact path='/List1' component={ TableList }/>
               </Switch>
            </BrowserRouter>
          <Footer style={{ textAlign: 'center' }}>Icefox Tech Copyright 2019, Made by: Kurt Manapul</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
