import React from 'react';
import Navbar from '../navbar/Navbar';
import Jumbotron from '../jumbotron/Jumbotron';
import Lists from '../lists/Lists';
import './Layout.css';

class Layout extends React.Component {

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <Navbar app={this.props.app} />

                <Jumbotron />

                <main role="main" className="container">
                    <Lists app={this.props.app} />
                </main>
            </div>
        );
    }
}

export default Layout;
