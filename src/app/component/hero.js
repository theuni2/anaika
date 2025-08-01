import React from 'react'

export default function Hero() {
  return (
    <div>
        <section class="text-gray-700 body-font bg-green-50">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    {/* <!-- Text Section --> */}
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-800">
        Building a Greener Future  
        <br class="hidden lg:inline-block"/>One Step at a Time
      </h1>
      <p class="mb-8 leading-relaxed text-green-700">
        Together, we can make our planet thrive again. From reducing waste to supporting renewable energy, every choice matters. Join the movement towards a cleaner, greener, and more sustainable tomorrow.
      </p>
      {/* <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg shadow-md">
          Get Involved
        </button>
        <button class="ml-4 inline-flex text-green-800 bg-green-100 border-0 py-2 px-6 focus:outline-none hover:bg-green-200 rounded text-lg">
          Learn More
        </button>
      </div> */}
    </div>
  
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded-lg shadow-lg" alt="sustainability"
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"/>
    </div>
  </div>
</section>

    </div>
  )
}
