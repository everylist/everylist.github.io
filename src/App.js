import React from 'react';
import { Stitch, RemoteMongoClient, GoogleRedirectCredential } from 'mongodb-stitch-browser-sdk';
import Layout from './comp/layout/Layout';
import t from './t';
import './App.css';

class App extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props)
        this.state = { auth: false, db: false, t }
    }

    /**
     *
     * @returns {Promise.<void>}
     */
    async componentDidMount() {
        await this.setupStitch();
    }

    /**
     *
     * @returns {Promise.<void>}
     */
    async setupStitch() {
        const appId = 'everylist-lvlrz';
        const client = Stitch.hasAppClient(appId) ? Stitch.getAppClient(appId) : Stitch.initializeAppClient(appId);

        if (client.auth.hasRedirectResult()) {
            await client.auth.handleRedirectResult().catch(console.error);
        }

        if (client.auth.isLoggedIn) {
            let auth = client.auth;
            let db = client.getServiceClient(RemoteMongoClient.factory, 'everylist').db('everylist');
            this.setState({ auth, db });
        } else {
            //client.auth.loginWithRedirect(new GoogleRedirectCredential());
        }
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div className="App">
                <Layout app={this.state} />
            </div>
        );
    }
}

export default App;
