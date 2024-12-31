import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faClock } from '@fortawesome/free-solid-svg-icons';
import TransferCard from './TransferCard';

const ParisTransfers = () => {
    const transfers = [
        {
            route: 'Paris - Orly Airport',
            price: 'from 80 €',
            duration: '30 minutes',
            image: '/images/orly-airport.jpg', // Replace with the actual image path
        },
        {
            route: 'Paris - Charles de Gaulle Airport',
            price: 'from 85 €',
            duration: '40 minutes',
            image: '/images/charles-de-gaulle.jpg', // Replace with the actual image path
        },
        {
            route: 'Paris - Beauvais Airport',
            price: 'from 160 €',
            duration: '1 hour 15 minutes',
            image: '/images/beauvais-airport.jpg', // Replace with the actual image path
        },
    ];

    return (
        <div className="container mx-auto px-6  space-y-12">
            {/* Заголовок и описание */}
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-gray-900">Paris Transfers</h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Discover comfortable and reliable transfers from Paris to major airports with fixed pricing and professional drivers.
                </p>
            </div>

            {/* Карточки трансферов */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {transfers.map((transfer, index) => (
                    <TransferCard
                        key={index}
                        route={
                            <div className="text-2xl font-bold text-gray-900 mb-2">
                             {transfer.route}
                             </div>
                        }
                        price={
                            <div className="flex items-center text-black">
                                <FontAwesomeIcon icon={faEuroSign} className="text-gray-900 mr-2 text-lg" />
                                {transfer.price}
                            </div>
                        }
                        duration={
                            <div className="flex items-center text-black">
                                <FontAwesomeIcon icon={faClock} className="text-gray-900 mr-2 text-lg" />
                                {transfer.duration}
                            </div>
                        }
                        image={transfer.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ParisTransfers;
