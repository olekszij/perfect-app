const Card = ({ title, description, image, onClick }) => {
    return (
      <div
        className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl"
        onClick={onClick}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <div className="text-gray-600 mb-4">{description}</div>


        </div>
      </div>
    );
  };
  
  export default Card;
  
