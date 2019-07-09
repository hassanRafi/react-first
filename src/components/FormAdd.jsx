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
        const newContact = { ...this.state };
        newContact.avatar_url = `https://robohash.org/${this.state.first_name}?size=100x100&set=set1`;
        this.props.onAdd(newContact);
        this.setState({first_name: "", last_name: "", phone: "", email: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <p>FirstName
                <input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name} required/>
            </p>
            <p>LastName        
                <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} required/>
            </p>
            <p>Email
                <input type="text" name="email" onChange={this.handleChange} value={this.state.email} required/>
            </p>
            <p>Phone
                <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} required/>
            </p>
            <button>Save</button>
            </form>
        );
    }
}

export default FormAdd;