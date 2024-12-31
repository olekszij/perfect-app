
import Card from '../Card/Card';

const TransferCard = ({ route, price, duration, image }) => {
    const description = (
        <div className="space-y-4">
            <div className="flex items-center justify-between text-gray-800">
                <span className="font-bold text-xl">{price}</span>
            </div>
            <div className="flex items-center justify-between text-gray-600">
                <span className="text-md">{duration}</span>
            </div>
        </div>
    );

    return (
        <Card
            title={route}
            description={description}
            image={image}
            link="#"
        />
    );
};

export default TransferCard;
