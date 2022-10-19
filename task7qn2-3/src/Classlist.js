import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Classlist extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.data.map(i => {
                    return (
                        <ul key={i.title}>
                            <li>Title: {i.title}</li>
                            <li>Length: {i.length}</li>
                            <li>Theme: {i.theme}</li>
                        </ul>
                    )
                }
                )}
            </React.Fragment>
        );
    }
}

Classlist.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
        theme: PropTypes.string.isRequired,
    }))
}

export default Classlist;