import React from 'react'

export default function Workshop() {
  return (
    <div>

      <section className="text-gray-700 body-font bg-green-50" id="workshop">
        <div className="container px-5 py-24 mx-auto">

          {/* Main Title */}
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-900 mb-4">
              Workshop on Sustainability 
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-green-700">
              Our sustainability workshops to learn, create, and innovate with eco-friendly practices. 
              Whether you’re a beginner or a pro, our sessions are designed for everyone who cares about the planet.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>

          {/* Gallery Cards */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            
            {/* Card 1 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center border-2 border-green-500 rounded-2xl">
              <img src="/images/parasfoundation.png" alt="Eco Workshop" className="w-full h-60 object-cover rounded mb-5 shadow-md" />
              <div className="flex-grow">
                <h2 className="text-green-900 text-lg title-font font-medium mb-3">Paras Foundation</h2>
                <p className="leading-relaxed text-base text-green-700">
                  Led a workshop on waste management for over 50 students, promoting green governance and sustainable practices.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center border-2 border-green-500 rounded-2xl">
              <img src="/images/pehchaan.jpg" alt="Sustainability" className="w-full h-60 object-cover rounded mb-5 shadow-md" />
              <div className="flex-grow">
                <h2 className="text-green-900 text-lg title-font font-medium mb-3">Pehchaan The Street School</h2>
                <p className="leading-relaxed text-base text-green-700">
                  Led a Green Governance workshop, helping over 45 students learn about cleanliness and proper waste disposal.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center border-2 border-green-500 rounded-2xl">
              <img src="/images/pfa.jpg" alt="Workshop" className="w-full h-60 object-cover rounded mb-5 shadow-md" />
              <div className="flex-grow">
                <h2 className="text-green-900 text-lg title-font font-medium mb-3">People for Action</h2>
                <p className="leading-relaxed text-base text-green-700">
                  Conducted a creative and engaging CD painting activity on the theme 'Green Vision' to help children better understand the workshop’s concepts.
                </p>
              </div>
            </div>
          </div>

          {/* View Gallery Button */}
          <a href='/gallery'>
          <button className="flex mx-auto mt-16 hover:cursor-pointer text-white bg-green-600 border-0 py-2 px-8 
            focus:outline-none hover:bg-green-700 rounded text-lg shadow-md">
            View Gallery
          </button>
</a>
       

        </div>
      </section>

      {/* Showreel Section */}
      <section id="showreel" className="bg-green-50 py-20">
        <div className="container mx-auto px-5 text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-green-900 mb-6">
            Showreel
          </h2>
          <p className="text-green-700 mb-10 max-w-2xl mx-auto">
            Take a quick look at our recent workshops, green governance activities, and sustainability drives in action.
          </p>

          {/* YouTube Embed */}

        <div className="relative w-full max-w-3xl mx-auto aspect-video">
  <iframe
    className="w-full h-full rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/75OfwBuiUok?autoplay=0&modestbranding=1&rel=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </section>

    </div>
  )
}
