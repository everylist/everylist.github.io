import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleOffcanvas = this.toggleOffcanvas.bind(this);
        this.state = {
            offcanvas: false,
        };
    }

    toggleOffcanvas() {
        this.setState({ offcanvas: !this.state.offcanvas });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <a className={"navbar-brand"} href="#goto">EveryList</a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" onClick={this.toggleOffcanvas}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"navbar-collapse offcanvas-collapse " + (this.state.offcanvas ? 'open' : '')} id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#goto">Dashboard <span className="sr-only">current</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">Notifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">Switch account</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#goto" id="dropdown01"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#goto">Action</a>
                                <a className="dropdown-item" href="#goto">Another action</a>
                                <a className="dropdown-item" href="#goto">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
