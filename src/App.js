import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'

import Main from './Main'
import TableList from './TableList'
import TableList2 from './TableList2'
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span> <a href="/" style={{ color: "white" }}> Icefox Tech </a> </span>
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
              <Menu.Item key="3"> <a href="/List-Filter"> List with Filter </a> </Menu.Item>
              <Menu.Item key="4"> <a href="/List-Pagination"> List with Pagination </a> </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', height: '150px' }}> <img className="banner" src="https://assets.bossjob.com/companies/16877/cover-pictures/4dsox7erF5C10XqlDuknqi0Atxg9VPYab0a8zTpA.png"/> </Header>
            <BrowserRouter>
               <Switch>    
                 <Route exact path='/' component={ Main }/>
                 <Route exact path='/List-Pagination' component={ TableList }/>
                 <Route exact path='/List-Filter' component={ TableList2 }/>
               </Switch>
            </BrowserRouter>
          <Footer style={{ textAlign: 'center' }}>Icefox Tech Copyright 2019, Made by: Kurt Manapul</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
