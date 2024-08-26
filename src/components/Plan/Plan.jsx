import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import twoD1 from "../../assets/Plan2DImages/twoD1.jpeg"; 
import twoD2 from "../../assets/Plan2DImages/twoD2.jpeg"; 
import twoD3 from "../../assets/Plan2DImages/twoD3.jpeg"; 
import twoD4 from "../../assets/Plan2DImages/twoD4.jpg"; 
import threeD1 from "../../assets/Plan3DImages/3D1.jpeg"; 
import threeD2 from "../../assets/Plan3DImages/3D2.jpeg"; 
import threeD3 from "../../assets/Plan3DImages/3D3.jpeg"; 
import threeD4 from "../../assets/Plan3DImages/3d5.avif";
import beam1 from "../../assets/BeamImages/beam1.jpg";
import beam2 from "../../assets/BeamImages/beam2.webp";
import beam3 from "../../assets/BeamImages/beam3.jpg";
import beam4 from "../../assets/BeamImages/beam4.png";
import plumb1 from "../../assets/PlumbingImages/plumb1.jpg"; 
import plumb3 from "../../assets/PlumbingImages/plumb3.jpg";
import plumb4 from "../../assets/PlumbingImages/plumb4.png";
import elev1 from "../../assets/ElevationImages/elev1.jpg";
import elev2 from "../../assets/ElevationImages/elev2.jpg";
import elev3 from "../../assets/ElevationImages/elev3.jpg";
import elev4 from "../../assets/ElevationImages/elev4.jpg";
import ele1 from "../../assets/ElectricalImages/elec1.jpeg";
const twoDImages = [
  { image: twoD1 },
  { image: twoD2 },
  { image: twoD3 },
  { image: twoD4 }
];

const threeDImages = [
  { image: threeD1 },
  { image: threeD2 },
  { image: threeD3 },
  { image: threeD4 }
]

const beamImages = [
  { image: beam1 },
  { image: beam2 },
  { image: beam3 },
  { image: beam4 }
]

const plumbingImages = [
  { image: plumb1 },
  { image: plumb4 },
  { image: plumb3 },
  { image: plumb4 }
]

const elevationImages = [
  { image: elev1 },
  { image: elev2 },
  { image: elev3 },
  { image: elev4 }
]

const electricalImages = [
  { image: ele1 }
]

function Plan() {
  const { serviceDetails } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    switch (serviceDetails) {
      case '2D Plans':
        setImages(twoDImages);
        break;
      case '3D Plans':
        setImages(threeDImages);
        break;
      case 'Beam Plan':
        setImages(beamImages);
        break;
      case 'Plumbing Plan':
        setImages(plumbingImages);
        break;
      case 'Elevation Plan':
        setImages(elevationImages);
        break;
        case 'Electrical Plan':
          setImages(electricalImages);
          break;
      default:
        setImages([]);
        break;
    }
  }, [serviceDetails]);

  return (
    <div className="p-4 mt-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div
            key={index} // Use index as key if there is no unique identifier
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
  );
}

export default Plan;

