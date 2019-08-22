import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Table, Card, Icon } from 'antd'
import reqwest from 'reqwest'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: 'Date of Visit',
    dataIndex: 'registered',
    render: registered => `${registered.date}`,
    filters: [
      { text: 'Today', value: 'today' }, 
      { text: 'Yesterday', value: 'yesterday' }, 
      { text: 'Last Week', value: 'last week' }, 
      { text: 'This month', value: 'this month' }
    ],
  },
]

class TableList extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  }

  componentDidMount() {
    this.fetch()
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 5,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      pagination.pageSize = 5;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  render() {
    return (
      <Card>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          bordered
          title={() => "List of Devices"}
        />
      </Card>
    )
  }
}

export default TableList
