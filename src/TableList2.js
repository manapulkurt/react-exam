
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Input, Button, Icon, Card } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    deviceName: 'Desktop',
    IP: '127.0.2.21',
    dateTime: '08-04-2019 8:30 GMT+8',
    lastVisit: 'This Month',
  },
  {
    key: '2',
    deviceName: 'Desktop',
    IP: '121.0.1.17',
    dateTime: '07-16-2019 14:24 GMT+3',
    lastVisit: 'Last Month',
  },
  {
    key: '3',
    deviceName: 'MacOS',
    IP: '127.0.2.21',
    dateTime: '08-15-2019 16:27 GMT+8',
    lastVisit: 'Last Week',
  },
  {
    key: '4',
    deviceName: 'Android Phone',
    IP: '124.0.5.12',
    dateTime: '08-23-2019 13:40 GMT+2',
    lastVisit: 'Today',
  },
  {
    key: '5',
    deviceName: 'iPhone',
    IP: '127.0.2.21',
    dateTime: '08-22-2019 4:30 GMT+8',
    lastVisit: 'Yesterday',
  },
];

class TableList2 extends React.Component {
  state = {
    searchText: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Device Name',
        dataIndex: 'deviceName',
        key: 'deviceName',
        width: '30%',
        ...this.getColumnSearchProps('deviceName'),
      },
      {
        title: 'IP',
        dataIndex: 'IP',
        key: 'IP',
        width: '20%',
        ...this.getColumnSearchProps('IP'),
      },
      {
        title: 'Date Time',
        dataIndex: 'dateTime',
        key: 'dateTime',
        ...this.getColumnSearchProps('dateTime'),
      },
      {
        title: 'Last Visited',
        dataIndex: 'lastVisit',
        key: 'lastVisit',
        ...this.getColumnSearchProps('lastVisit'),
      },
    ];
    return(
      <Card>
        <Table 
          columns={columns} 
          dataSource={data} 
          bordered
          title={() => "List of Devices"}
        />
      </Card>
    )
  }
}

export default TableList2