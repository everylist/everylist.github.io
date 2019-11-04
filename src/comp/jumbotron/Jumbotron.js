import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import './Jumbotron.css';

class Jumbotron extends React.Component {

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div className={"jumbotron jumbotron-fluid"}>
                <div class="container">
                    <h1 className={"display-6"}>
                        Hello, world!
                    </h1>
                    <p className={"lead"}>
                        This is a simple hero unit, a simple jumbotron-style component
                        for calling extra attention to featured content or information.
                    </p>
                    <p className={"lead"}>
                        <a className={"btn btn-primary btn-lg"} href="#goto" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;
