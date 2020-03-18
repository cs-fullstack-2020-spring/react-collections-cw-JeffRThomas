import React, { Component } from 'react';
import { Fragment } from 'react';
import UserInformation from './UserInformation';

class AppContainer extends Component {

    render() {
        const dataFile = require(`../rawData`);//Store data file into variable as "Read Only" copy
        console.log(dataFile[0].name);//Check Variable Reference For Data
        return (
            <Fragment>
                <h1>User Collection App</h1>
                {/* Component Reference Test Message */}
                {/* "The AppContainer is here and working!" */}
                {
                    dataFile.map((obj, idx) =>
                    //Use May Higher Order Function with Component Reference To Display User Data
                        <UserInformation userEntry={obj} key={idx}/>)
                }
            </Fragment>
        )
    };
};

export default AppContainer;