
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
        <ul className="text-gray-500 text-sm list-disc list-inside">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
