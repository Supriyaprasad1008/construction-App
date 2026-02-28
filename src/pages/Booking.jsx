import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state || {};

    // Default values in case accessed directly
    const {
        houseTitle = "Custom Project",
        totalHouseCost = 0,
        basePrice = 0,
        interiorOption = 'N/A',
        interiorCost = 0
    } = state;

    const [builderType, setBuilderType] = useState('standard');
    const [labourCount, setLabourCount] = useState(5);
    const [duration, setDuration] = useState(6); // months
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Pricing constants
    const builderRates = {
        standard: 5000,   // per month
        expert: 8000,     // per month
        master: 12000     // per month
    };

    const labourRatePerMonth = 2500;

    // Calculations
    const builderCost = builderRates[builderType] * duration;
    const labourCost = labourCount * labourRatePerMonth * duration;
    const constructionTotal = builderCost + labourCost;
    const grandTotal = totalHouseCost + constructionTotal;

    const handleBook = (e) => {
        e.preventDefault();
        setIsConfirmed(true);
        // Real implementation would send to backend here
    };

    if (isConfirmed) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 pt-16">
                <div className="bg-slate-900 p-10 rounded-3xl border border-emerald-500/30 shadow-2xl max-w-lg w-full text-center">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Your construction team has been successfully booked for <strong>{houseTitle}</strong>.
                        Our representative will contact you shortly to sign the final agreements.
                    </p>
                    <div className="bg-slate-800/50 p-4 rounded-xl mb-8">
                        <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Total Project Cost</p>
                        <p className="text-3xl font-bold text-emerald-400">${grandTotal.toLocaleString()}</p>
                    </div>
                    <Link to="/home" className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-xl transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Book Your Construction Team</h1>
                    <p className="text-slate-400 text-lg">Select builders and labour force for your project</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-8">

                            {/* Builder Selection */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Project Manager / Builder Level</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className={`cursor-pointer border-2 rounded-xl p-5 block transition-all ${builderType === 'standard' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-800 hover:border-slate-600'}`}>
                                        <input type="radio" name="builder" value="standard" checked={builderType === 'standard'} onChange={(e) => setBuilderType(e.target.value)} className="hidden" />
                                        <div className="font-bold text-white mb-1">Standard Builder</div>
                                        <div className="text-xs text-slate-400 mb-2">3-5 years experience</div>
                                        <div className="text-blue-400 font-semibold">${builderRates.standard}/mo</div>
                                    </label>
                                    <label className={`cursor-pointer border-2 rounded-xl p-5 block transition-all ${builderType === 'expert' ? 'border-purple-500 bg-purple-500/10' : 'border-slate-800 bg-slate-800 hover:border-slate-600'}`}>
                                        <input type="radio" name="builder" value="expert" checked={builderType === 'expert'} onChange={(e) => setBuilderType(e.target.value)} className="hidden" />
                                        <div className="font-bold text-white mb-1">Expert Builder</div>
                                        <div className="text-xs text-slate-400 mb-2">10+ years experience</div>
                                        <div className="text-purple-400 font-semibold">${builderRates.expert}/mo</div>
                                    </label>
                                    <label className={`cursor-pointer border-2 rounded-xl p-5 block transition-all ${builderType === 'master' ? 'border-amber-500 bg-amber-500/10' : 'border-slate-800 bg-slate-800 hover:border-slate-600'}`}>
                                        <input type="radio" name="builder" value="master" checked={builderType === 'master'} onChange={(e) => setBuilderType(e.target.value)} className="hidden" />
                                        <div className="font-bold text-white mb-1">Master Builder</div>
                                        <div className="text-xs text-slate-400 mb-2">Award winning agencies</div>
                                        <div className="text-amber-400 font-semibold">${builderRates.master}/mo</div>
                                    </label>
                                </div>
                            </div>

                            <hr className="border-slate-800" />

                            {/* Labour & Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-white font-bold mb-4">Number of Labourers</label>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="range"
                                            min="2"
                                            max="20"
                                            value={labourCount}
                                            onChange={(e) => setLabourCount(parseInt(e.target.value))}
                                            className="w-full accent-blue-500"
                                        />
                                        <span className="bg-slate-800 text-white px-4 py-2 rounded-lg font-bold min-w-[3rem] text-center">
                                            {labourCount}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">More hands reduce construction time slightly but increase monthly cost.</p>
                                </div>

                                <div>
                                    <label className="block text-white font-bold mb-4">Estimated Duration (Months)</label>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="range"
                                            min="1"
                                            max="24"
                                            value={duration}
                                            onChange={(e) => setDuration(parseInt(e.target.value))}
                                            className="w-full accent-blue-500"
                                        />
                                        <span className="bg-slate-800 text-white px-4 py-2 rounded-lg font-bold min-w-[3rem] text-center">
                                            {duration}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Adjust timeline based on project scale.</p>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Final Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-8 sticky top-24">
                            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Project Summary</h2>

                            <div className="space-y-4 mb-6 text-sm">
                                <h4 className="text-white font-semibold uppercase tracking-wider text-xs bg-slate-800 p-2 rounded">House Details</h4>
                                <div className="flex justify-between text-slate-300">
                                    <span>{houseTitle} (Base)</span>
                                    <span>${basePrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span className="capitalize">{interiorOption} Interior</span>
                                    <span>${interiorCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between font-medium text-white pt-2">
                                    <span>House Total</span>
                                    <span>${totalHouseCost.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 text-sm pt-4 border-t border-slate-800/50">
                                <h4 className="text-white font-semibold uppercase tracking-wider text-xs bg-slate-800 p-2 rounded">Construction Team ({duration} Months)</h4>
                                <div className="flex justify-between text-slate-300">
                                    <span className="capitalize">{builderType} Builder</span>
                                    <span>${builderCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>{labourCount} Labourers</span>
                                    <span>${labourCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between font-medium text-white pt-2">
                                    <span>Construction Total</span>
                                    <span>${constructionTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t-2 border-slate-700 pt-6 mb-8">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-lg text-white font-medium">Grand Total</span>
                                </div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mt-2">
                                    ${grandTotal.toLocaleString()}
                                </div>
                            </div>

                            <button
                                onClick={handleBook}
                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
