import React, { Component } from 'react';

class FormAdd extends Component {
    state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newContact = {};
        newContact.first_name = this.state.first_name;
        newContact.last_name = this.state.last_name;
        newContact.email = this.state.email;
        newContact.phone = this.state.phone;
        newContact.avatar_url = `https://robohash.org/${this.state.first_name}?size=100x100&set=set1`
        this.props.onAdd(newContact);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <p>FirstName
                <input type="text" name="first_name" onChange={this.handleChange}/>
            </p>
            <p>LastName        
                <input type="text" name="last_name" onChange={this.handleChange}/>
            </p>
            <p>Email
                <input type="text" name="email" onChange={this.handleChange}/>
            </p>
            <p>Phone
                <input type="text" name="phone" onChange={this.handleChange}/>
            </p>
            <button>Save</button>
            </form>
        );
    }
}

export default FormAdd;