import React, { Component } from 'react';
import { Fragment } from 'react';
import UserInformation from './UserInformation';

class AppContainer extends Component {

    render() {
        const dataFile = require(`../rawData`);
        console.log(dataFile[0].name);//Check Variable Reference For Data
        return (
            <Fragment>
                {/* Component Reference Test Message */}
                {/* "The AppContainer is here and working!" */}
                {
                    dataFile.map((obj, idx) =>
                        <UserInformation userEntry={obj}/>)
                }
            </Fragment>
        )
    };
};

export default AppContainer;