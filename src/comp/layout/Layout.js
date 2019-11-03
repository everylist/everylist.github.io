import React from 'react';
import Navbar from '../navbar/Navbar';
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

                <main role="main" className="container">
                    <Lists app={this.props.app} />
                </main>
            </div>
        );
    }
}

export default Layout;
