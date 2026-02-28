import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const HouseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data fetching based on ID
    const house = {
        id: parseInt(id) || 1,
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80',
        tags: 'Modern Space',
        color: 'blue',
        basePrice: 120000,
        title: 'The Serene Villa',
        description: 'A beautiful modern family home featuring expansive windows, a spacious backyard, and contemporary architectural design. It is built to maximize natural light and open space.'
    };

    const [interiorOption, setInteriorOption] = useState('standard');

    const interiorPricing = {
        standard: 0,
        premium: 25000,
        luxury: 60000
    };

    const totalCost = house.basePrice + interiorPricing[interiorOption];

    const handleProceed = () => {
        // Navigate to booking with state
        navigate(`/book/${house.id}`, {
            state: {
                houseId: house.id,
                houseTitle: house.title,
                basePrice: house.basePrice,
                interiorOption: interiorOption,
                interiorCost: interiorPricing[interiorOption],
                totalHouseCost: totalCost
            }
        });
    };

    return (
        <div className="pt-16 min-h-screen bg-slate-950 pb-20">
            {/* Hero Section */}
            <div className="w-full h-[40vh] md:h-[50vh] relative">
                <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply z-10" />
                <img src={house.img} alt={house.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16 max-w-7xl mx-auto bg-gradient-to-t from-slate-950 to-transparent">
                    <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 inline-block">
                        {house.tags}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">{house.title}</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-4">About This House</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">{house.description}</p>
                    </section>

                    <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Choose Interior Package</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Option 1 */}
                            <div
                                onClick={() => setInteriorOption('standard')}
                                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${interiorOption === 'standard' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Standard</h3>
                                <p className="text-slate-400 text-sm mb-4">Basic modern fixtures, standard flooring and paint.</p>
                                <p className="text-white font-semibold">Included</p>
                            </div>

                            {/* Option 2 */}
                            <div
                                onClick={() => setInteriorOption('premium')}
                                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${interiorOption === 'premium' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                                <p className="text-slate-400 text-sm mb-4">Upgraded appliances, hardwood floors, smart lighting.</p>
                                <p className="text-emerald-400 font-semibold">+ $25,000</p>
                            </div>

                            {/* Option 3 */}
                            <div
                                onClick={() => setInteriorOption('luxury')}
                                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${interiorOption === 'luxury' ? 'border-purple-500 bg-purple-500/10' : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Luxury</h3>
                                <p className="text-slate-400 text-sm mb-4">High-end materials, custom cabinetry, full smart home.</p>
                                <p className="text-purple-400 font-semibold">+ $60,000</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Pricing Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-8 sticky top-24">
                        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Cost Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-slate-300">
                                <span>Base House Price</span>
                                <span>${house.basePrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-slate-300">
                                <span className="capitalize">{interiorOption} Interior</span>
                                <span>${interiorPricing[interiorOption].toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="border-t border-slate-800 pt-6 mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg text-white font-medium">Estimated Total</span>
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    ${totalCost.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 text-right">*Excludes builder & labour costs</p>
                        </div>

                        <button
                            onClick={handleProceed}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        >
                            Proceed to Book Builders
                        </button>
                        <Link to="/home" className="block text-center mt-4 text-slate-400 hover:text-white transition-colors text-sm">
                            Back to Catalog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetail;
