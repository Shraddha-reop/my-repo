import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list/card-list.component'
import { SearchBox } from './component/search-box/search-box.component'
import { Table } from './component/table/table.component'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     employeeData: [],
  //     searchField: ''
  //   }
  // }
  state = {
    employeeData: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5e74b82c3000005a00a5f60b')
      .then(response => response.json())
      .then(users => this.setState({ employeeData: users }))
  }
  render() {
    const { employeeData, searchField } = this.state;
    const filteredData = employeeData.filter(data =>
      data.name.toLowerCase().includes(searchField.toLowerCase())
    );



    return (
      <div className="App">
        <SearchBox
          placeholder="Search Employee"
          handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList employeeData={filteredData} />
        <Table/>
      </div>
    )
  }
}

export default App;
