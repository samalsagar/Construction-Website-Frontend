import { useParams } from "react-router-dom";
import twoD from "../../assets/Plan2DImages/twoD.webp"
import threeD from "../../assets/Plan3DImages/threeD.webp"
import beam from "../../assets/BeamImages/beam.webp"
import plumb from "../../assets/PlumbingImages/plumbing.png"
import elevation from "../../assets/ElevationImages/elevation.jpg"

// Updated cardData object
const cardData = {
    planning: [
        {
            imgSrc: twoD,
            title: '2D Plans',
            description: 'A 2D construction plan is a detailed, two-dimensional representation of a building or infrastructure project. These plans are crucial for visualizing the layout and dimensions of the project before actual construction begins. They include various aspects such as floor layouts, wall placements, and spatial arrangements, all depicted in a top-down view.',
        },
        {
            imgSrc: threeD,
            title: '3D Plans',
            description: '3D construction plans provide a comprehensive, three-dimensional view of a building or infrastructure project, offering a detailed representation that goes beyond traditional 2D plans. These plans are essential for visualizing the spatial relationships and overall design of the project, enabling stakeholders to understand and interact with the design in a more immersive way.',
        },
        {
            imgSrc: beam,
            title: 'Beam Plan',
            description: 'Beam plans are critical components in structural design, providing essential information for the stability and integrity of your building. Here’s what you need to know about them:.',
        },
        {
            imgSrc: plumb,
            title: 'Plumbing Plan',
            description: `Plumbing plans are integral to the design and functionality of a building's water and waste management systems. They ensure that water supply, drainage, and sewage systems operate efficiently and meet safety standards. Here’s a breakdown of what plumbing plans encompass:`,
        },

        {
            imgSrc: elevation,
            title: 'Elevation Plan',
            description: `Elevation drawings are vital components in architectural and construction design, providing a clear, two-dimensional view of a building’s exterior. They help visualize how a structure will appear from different angles, offering a detailed representation of its façade. Here’s an overview of what elevation drawings include and their significance.`,
        },
    ],
    construction: [
        {
            imgSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            title: 'Construction Card 1',
            description: 'Details about construction project 1.',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            title: 'Construction Card 2',
            description: 'Details about construction project 2.',
        },
    ],
    planningAndconstruction: [
        {
            imgSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            title: 'Planning & Construction Card 1',
            description: 'Details about planning and construction project 1.',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            title: 'Planning & Construction Card 2',
            description: 'Details about planning and construction project 2.',
        },
    ],
    
};

function ServiceDetails() {
    const { type } = useParams();
    const cards = cardData[type] || []; // Fallback to an empty array if type is not found

    // Determine the heading based on type
    const heading = (() => {
        switch (type) {
            case 'planning':
                return 'All the plan Services We Offer';
            case 'construction':
                return 'Construction Details';
            case 'planningAndconstruction':
                return 'Planning & Construction Details';
            default:
                return 'Details'; // Default heading
        }
    })();

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-black mb-8">{heading}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="relative overflow-hidden">
                                <img className="object-cover w-full h-48" src={card.imgSrc} alt="Product" />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white text-gray-900 py-1 px-4 rounded-full font-bold hover:bg-gray-300">
                                        View Plans
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mt-3">{card.title}</h3>
                            <p className="text-gray-500 text-sm mt-1">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;
