import React from 'react';
import { Stitch, GoogleRedirectCredential } from 'mongodb-stitch-browser-sdk';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: false
        }
    }

    async componentDidMount() {
        await this.setupStitch();
    }

    //start stitch setup
    async setupStitch() {
        //copy the name of your google-auth enabled stitch application here
        //the name of the app will typically be the stitch application name
        //with a "-"" + random string appended
        const appId = 'everylist-lvlrz';

        // Get a client for your Stitch app, or instantiate a new one
        const client = Stitch.hasAppClient(appId)
            ? Stitch.getAppClient(appId)
            : Stitch.initializeAppClient(appId);

        //manage user authentication state

        // Check if this user has already authenticated and we're here
        // from the redirect. If so, process the redirect to finish login.
        if (client.auth.hasRedirectResult()) {
            await client.auth.handleRedirectResult().catch(console.error);
            console.log("Processed redirect result.")
        }

        if (client.auth.isLoggedIn) {
            // The user is logged in. Add their user object to component state.
            let currentUser = client.auth.user;
            console.log(currentUser);
            this.setState({ currentUser });
        } else {
            // The user has not yet authenticated. Begin the Google login flow.
            const credential = new GoogleRedirectCredential();
            client.auth.loginWithRedirect(credential);
        }
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <p>
            <Button variant="primary">Primary</Button>
            Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React {!currentUser ? <div>User must authenticate.</div> : (currentUser.profile.first_name) }
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
