

import PropTypes from 'prop-types';

function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}>

            </div>
            <h1>{name}</h1>
            <p>₹{price}</p>
        </div>
    );
}

MenuItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default MenuItem;
