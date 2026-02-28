import React from 'react';
import Section1 from '../components/Section1/section1';

const Home = () => {
    const houses = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww',
            intro: 'Modern Family Home with spacious garden and premium finish. Ideal for a comfortable family lifestyle.',
            tags: 'Modern',
            color: 'blue',
            basePrice: 120000,
            title: 'The Serene Villa'
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww',
            intro: 'Luxury Estate featuring high ceilings, open concept living, and smart home integration setup.',
            tags: 'Luxury',
            color: 'purple',
            basePrice: 250000,
            title: 'Grand Palace Estate'
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww',
            intro: 'Compact Eco-friendly house optimized for minimal energy usage while providing maximum comfort.',
            tags: 'Eco-Friendly',
            color: 'emerald',
            basePrice: 85000,
            title: 'Green Haven'
        },
        {
            id: 4,
            img: 'https://i.pinimg.com/1200x/8d/26/3f/8d263f48666a8717381116f699b12297.jpg',
            intro: 'Explore this beautifully crafted 1450 sqft single-storey 3BHK Kerala home that combines timeless architecture with modern layout features. With a charming sit-out, functional work area, and natural airflow-focused bedrooms, this house is perfect for families, heritage lovers, and retirees',
            tags: 'The Ecosystem',
            color: 'emerald',
            basePrice: 900000,
            title: 'Luxzurious heaven'
        },
        {
            id: 5,
            img: 'https://i.pinimg.com/1200x/6c/2f/5b/6c2f5b80a1ed9f5061cfb617ded94c8f.jpg',
            intro: 'Check out our classic modern house designs that show how timeless charm and simple architecture create a winning combination.',
            tags: 'Classic Modern',
            color: 'emerald',
            basePrice: 1800000,
            title: 'Classic Heaven'
        },
    ];

    return (
        <div className="pt-16 pb-20 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Build Your <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Dream Home</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Browse our catalog of premium house designs. Select a style and customize it to match your vision.
                    </p>
                </div>

                {/* We can temporarily use the existing component if it fits, or build a new grid.
            Given Section1 expects specific props, let's create a custom grid for Catalog.
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {houses.map((house) => (
                        <div key={house.id} className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-slate-700 transition-all group flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={house.img}
                                    alt={house.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                                    <span className={`text-xs font-semibold text-${house.color}-400 uppercase tracking-wider`}>
                                        {house.tags}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">{house.title}</h3>
                                <p className="text-slate-400 mb-6 flex-1 line-clamp-3">
                                    {house.intro}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                    <div>
                                        <span className="text-slate-500 text-sm">Starting at</span>
                                        <p className="text-xl font-bold text-white">${house.basePrice.toLocaleString()}</p>
                                    </div>
                                    <a
                                        href={`/house/${house.id}`}
                                        className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Customize
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
