import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import TableList from './TableList'

import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

class App extends React.Component {
  render() {
    return (
      <Layout>

        <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        >

        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span className="nav-text">nav 6</span>
            </Menu.Item>
           <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
           </Menu.Item>
           <Menu.Item key="8">
             <Icon type="shop" />
             <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>

        </Sider>

          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} />
              <BrowserRouter>
               <Switch>    
                 <Route exact path='/' component={ TableList }/>
               </Switch>
              </BrowserRouter>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          
      </Layout>
      )
  }
}

export default App
