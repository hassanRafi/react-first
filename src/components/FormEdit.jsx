import React, { Component } from 'react';

class FormEdit extends Component {
    state = {
        id: this.props.formParams.id,
        first_name: this.props.formParams.first_name, 
        last_name: this.props.formParams.last_name,
        phone: this.props.formParams.phone,
        email: this.props.formParams.email,
        avatar_url: this.props.formParams.avatar_url,
    };

    handleEdit = (event) => {
        event.preventDefault();
        this.props.saveEdit(this.state);
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleEdit}>
                <p>FirstName
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                </p>
                <p>LastName
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                </p>
                <p>Email
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </p>
                <p>Phone
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                </p>
                <button>save</button>
            </form>
        );
    }
}

export default FormEdit;
