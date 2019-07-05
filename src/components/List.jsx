import React, { Component } from 'react';

class List extends Component {
    render() {
        const { first_name, last_name, email, avatar_url, phone } = this.props.contact;
        return (
            <li>
                <img src={avatar_url} alt="" />
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <button>Edit</button>
                <button onClick={() => this.props.onDelete(this.props.contact)}>X</button>
            </li>
        );
    }
}

export default List;
