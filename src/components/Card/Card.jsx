import PropTypes from 'prop-types';

const Card = ({ title, description, image, onClick }) => {
    return (
      <div
        className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl"
        onClick={onClick}
      >
        <img src={image} alt={title} className="w-full h-64 object-cover object-center" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <div className="text-gray-600 mb-4">{description}</div>
        </div>
      </div>
    );
  };
  
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default Card;
  
