import React, { Component } from 'react';
import { Fragment } from 'react';

class UserInformation extends Component {
    //User Data Object Reference (Only showing output required from 2019-04-03_cw.png)
    // {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //             "lat": "-37.3159",
    //             "lng": "81.1496"
    //         }
    //     },
    // },

    render() {
        return (
            <Fragment>
                {/* "Hey Jeff, this part works!" */}
                <p>id: {this.props.userEntry.id}</p>
                <p>name: {this.props.userEntry.name}</p>
                <p>username: {this.props.userEntry.username}</p>
                <p>email: {this.props.userEntry.email}</p>
                <p>street: {this.props.userEntry.address.street}</p>
                <p>suite: {this.props.userEntry.address.suite}</p>
                <p>city: {this.props.userEntry.address.city}</p>
                <p>zip: {this.props.userEntry.address.zipcode}</p>
                <p> geo lat: {this.props.userEntry.address.geo.lat} long: {this.props.userEntry.address.geo.lng}</p>
                <hr/>
            </Fragment>
        )
    };
};

export default UserInformation;