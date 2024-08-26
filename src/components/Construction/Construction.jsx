import React, { useEffect } from 'react'
import conImg1 from "../../assets/ConstructionImages/conImg1.jpeg"
import conImg2 from "../../assets/ConstructionImages/conImg2.jpeg"
import conImg3 from "../../assets/ConstructionImages/conImg3.jpeg"
import conImg4 from "../../assets/ConstructionImages/conImg4.jpeg"
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const constructionImages = [
    { image: conImg1 },
    { image: conImg2 },
    { image: conImg3 },
    { image: conImg4 }
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
