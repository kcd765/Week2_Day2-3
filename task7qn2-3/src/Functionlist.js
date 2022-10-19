import React from 'react'
import PropTypes from 'prop-types'

const Functionlist = (props) => {

    return (
        <React.Fragment>
            {props.data.map(i => {
                return (
                    <ul key={i.item}>
                        <li>Item: {i.item}</li>
                        <li>Quantity: {i.quantity}</li>
                        <li>Price: ${i.price.toFixed(2)}</li>
                    </ul>
                )
            }
            )}
        </React.Fragment>
    )
}

Functionlist.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }))
}

export default Functionlist