import React from 'react';

export default function Gallery() {
  const images = [
    "/images/pfa/img.JPG",
    "/images/pfa/img1.jpg",
    "/images/pfa/img2.jpg",
    "/images/pfa/img3.jpg",
    "/images/pfa/img4.png",
    "/images/pfa/img5.jpg",
    "/images/pfa/img6.JPG",
    "/images/pfa/img7.JPG",
    "/images/pfa/img8.JPG",
    "/images/pfa/img9.jpg",
    "/images/pfa/img10.jpg",
  ];
  const img = [
    "/images/pehchaan/img1.png",
    "/images/pehchaan/img2.jpg",
    "/images/pehchaan/img3.jpg",
    "/images/pehchaan/img4.jpg",
   
  ];
  const img1 = [
    "/images/paras/img1.jpg",
    "/images/paras/img2.png",
    "/images/paras/img3.jpg",
    "/images/paras/img4.jpg",
    "/images/paras/img5.jpg",
    "/images/paras/img6.png",
    "/images/paras/img7.png",
    "/images/paras/img8.png",
    "/images/paras/img9.jpg",
    "/images/paras/img10.png",
    
  ];

  return (
    <section className="text-green-900 body-font bg-green-50">
      <div className="container px-5 py-24 mx-auto" id="pfa">
        
        {/* Title */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-900">
           People For Action Event Gallery
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-green-700">
            Relive the moments from our sustainability workshops and events.  
            Every image tells a story of eco-conscious action and community spirit.
          </p> */}
          <div className="w-16 h-1 bg-green-500 rounded mx-auto mt-4"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
      <div className="container px-5 py-24 mx-auto" id="pehchaan">
        
        {/* Title */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-900">
            Pehchaan Event Gallery
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-green-700">
            Relive the moments from our sustainability workshops and events.  
            Every image tells a story of eco-conscious action and community spirit.
          </p> */}
          <div className="w-16 h-1 bg-green-500 rounded mx-auto mt-4"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {img.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
      <div className="container px-5 py-24 mx-auto" id="paras"> 
        
        {/* Title */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-900">
            Paras Foundation Event Gallery
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-green-700">
            Relive the moments from our sustainability workshops and events.  
            Every image tells a story of eco-conscious action and community spirit.
          </p> */}
          <div className="w-16 h-1 bg-green-500 rounded mx-auto mt-4"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {img1.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
