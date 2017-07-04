import React, { Component } from 'react';
import DataTable from './Components/DataTable';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={}
    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    console.log("FIRED ON ITEM CLICKED", item)
  }

  render() {
    const { onItemClicked } = this;

    const items = [
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      },
      {
        firstName: 'Travis',
        lastName: 'Salad',
        age: '28',
        gender: 'male'
      },
      {
        firstName: 'Andrea',
        lastName: 'Salad',
        age: '29',
        gender: 'female'
      },
      {
        firstName: 'Dori',
        lastName: 'Fairbairn',
        age: '54',
        gender: 'female'
      },
      {
        firstName: 'Ken',
        lastName: 'Salad',
        age: '56',
        gender: 'male'
      }
    ];

    const columns = [
      {
        title: 'First',
        property: 'firstName',
        onItemClicked: onItemClicked
      },
      {
        title: 'Last',
        property: 'lastName'
      },
      {
        title: 'Age',
        property: 'age'
      }
    ]
    return (
      <div className="App">
        <DataTable
          horizontalScroll
          data={items}
          columns={columns}
          alignItems='left'
        />
      </div>
    );
  }
}
