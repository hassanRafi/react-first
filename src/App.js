import React, { Component } from 'react';
import List from './components/List';

const data = require('./contacts.json');
console.log(data);

class App extends Component {
  state = {
    contacts: data,
    searchWord: '',
  };

  handleChange = (event) => {
    this.setState({searchWord: event.target.value });
  }

  handleDelete = (obj) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== obj.id);
    this.setState({ contacts });
  }

  render() {
    console.log("render executing");
    const contacts = this.state.contacts.filter((contact) => {
      return contact.first_name.toLowerCase().includes(this.state.searchWord.toLowerCase()) || contact.last_name.toLowerCase().includes(this.state.searchWord.toLowerCase());
    });

    return (
      <>
        <input type="text" value={this.state.searchWord} name="searchWord" onChange={this.handleChange}/>
        <ul className="container">
          {contactsCpy.map((contact) => <List key={contact.id} contact={contact} onDelete={this.handleDelete} />)}
        </ul>
      </>
    );
  }
}

export default App;
