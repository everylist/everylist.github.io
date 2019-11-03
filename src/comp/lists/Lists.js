import React from 'react';
import './Lists.css';

class Lists extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {lists: []};
    }

    /**
     *
     */
    componentDidMount() {
        this.loadLists();
    }

    /**
     *
     */
    loadLists() {
        if (this.props.app.db) {
            this.props.app.db.collection('lists')
                .find({}, {limit: 100})
                .asArray()
                .then(lists => {this.setState({ lists: lists })})
        }
    };

    /**
     *
     * @returns {XML}
     */
    render() {
        const lists = this.state.lists.map((item, i) => (
            <div>
                <h1>{ item._id }</h1>
            </div>
        ));

        return (<div>{lists}</div>);
    }
}

export default Navbar;
