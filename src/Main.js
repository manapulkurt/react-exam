import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './index.css'
import ListFilter from './img/List-Filter.png'
import ListPagination from './img/List-Pagination.png'

import { Carousel } from 'antd'
import { Card, Col, Row, Button } from 'antd'

class Main extends Component {
	render() {
		return(
			<React.Fragment>
			  <div style={{ background: '#ECECEC', padding: '30px' }}>
			    <Row gutter={16}>
			      <Col span={12}>
			        <Card 
			        title="List with Filter" 
			        bordered={false} 
			        cover={
				      <img
				        alt="example"
				        src={ ListFilter }
				      />
				    }
			        >
			          <hr/>
			          <Button type="primary" block style={{ marginTop: '10px' }}>
			          <a href="/List-Filter"> Link to List-Filter </a>
			          </Button>
			        </Card>
			      </Col>
			      <Col span={12}>
			        <Card 
			        title="List with Filter" 
			        bordered={false} 
			        cover={
				      <img
				        alt="example"
				        src={ ListPagination }
				      />
				    }
			        >
			          <hr/>
			          <Button type="primary" block style={{ marginTop: '10px' }}>
			          <a href="/List-Pagination"> Link to List-Pagination </a>
			          </Button>
			        </Card>
			      </Col>
			    </Row>
			  </div>
			</React.Fragment>
		)
	}
}

export default Main	