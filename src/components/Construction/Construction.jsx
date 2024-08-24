import React, { useEffect } from 'react'
import const1 from "../../assets/ConstructionImages/const1.png";
import const2 from "../../assets/ConstructionImages/const2.jpg";
import const3 from "../../assets/ConstructionImages/const3.png";
import const4 from "../../assets/ConstructionImages/const4.jpg";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const constructionImages = [
    { image: const1 },
    { image: const2 },
    { image: const3 },
    { image: const4 }
];
function Construction() {
    const { constructionPlans } = useParams();
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(constructionImages);
    }, [constructionPlans])
    return (
        <div>
            <div className="p-4 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg group"
                        >
                            <img
                                className="w-full h-48 object-cover rounded-t-lg"
                                src={item.image}
                                alt={`Image ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Construction
