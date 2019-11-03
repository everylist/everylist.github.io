import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

class Navbar extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.toggleOffcanvas = this.toggleOffcanvas.bind(this);
        this.state = { offcanvas: false };
    }

    /**
     *
     */
    toggleOffcanvas() {
        this.setState({ offcanvas: !this.state.offcanvas });
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        const t = this.props.app.t
        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <a className={"navbar-brand"} href="#goto"><FontAwesomeIcon icon={faListAlt} /> EveryList</a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" onClick={this.toggleOffcanvas}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"navbar-collapse offcanvas-collapse " + (this.state.offcanvas ? 'open' : '')} id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#goto">{t('My Lists')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">{t('Create New List')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">{t('Update My Lists')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goto">{t('Log Out')}</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar;
