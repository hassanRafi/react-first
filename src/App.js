import React, { Component } from 'react';
import List from './components/List';
import FormAdd from './components/FormAdd';
import FormEdit from './components/FormEdit';

const data = require('./contacts.json');

class App extends Component {
  state = {
    contacts: data,
    searchWord: '',
    formParams: '',
    showEdit: false,
  };

  handleChange = (event) => {
    this.setState({searchWord: event.target.value });
  }

  handleDelete = (obj) => {
    if (this.state.showEdit === true) { // If someone delete's an item while editing
      this.setState({ showEdit: false });
    }
    const contacts = this.state.contacts.filter((contact) => contact.id !== obj.id);
    this.setState({ contacts });
  }

  handleAdd = (obj) => {
    const newContact = {};
    newContact.id = this.state.contacts[this.state.contacts.length - 1].id + 1;
    newContact.first_name = obj.first_name;
    newContact.last_name = obj.last_name;
    newContact.email = obj.email;
    newContact.phone = obj.phone;
    newContact.avatar_url = obj.avatar_url;
    let contacts = this.state.contacts.slice();
    contacts.push(newContact);
    this.setState({ contacts });  
  }

  handleEdit = (info) => {
    console.log(info);
    this.setState({ showEdit: true, formParams: info });
  }

  handleSaveEdit = (editedInfo) => {
    console.log(editedInfo);
    
    let index;
    this.state.contacts.forEach((contact, i) => {
      if (contact.id === editedInfo.id) {
        index = i;
      }
    });
    const contacts = this.state.contacts.slice();
    contacts[index] = editedInfo;
    this.setState({ contacts, showEdit: false });
  }

  render() {
    console.log("render executing");
    const contacts = this.state.contacts.filter((contact) => {
      return contact.first_name.toLowerCase().includes(this.state.searchWord.toLowerCase()) || contact.last_name.toLowerCase().includes(this.state.searchWord.toLowerCase());
    });

    return (
      <>
        {this.state.showEdit && <FormEdit formParams={this.state.formParams} saveEdit={this.handleSaveEdit}/>}
        <label>
          Search
          <input type="text" value={this.state.searchWord} name="searchWord" onChange={this.handleChange}/>
        </label>
        <ul className="container">
          {contacts.map((contact) => <List key={contact.id} contact={contact} onDelete={this.handleDelete} onEdit={this.handleEdit}/>)}
        </ul>
        <FormAdd onAdd={this.handleAdd} key={this.state.contacts[this.state.contacts.length - 1].id + 1} />
      </>
    );
  }
}

export default App;
