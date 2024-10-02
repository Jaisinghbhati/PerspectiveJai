import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';


const galleryImages = [
  { url: "https://images.unsplash.com/photo-1722953036477-03749e0c99c4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1720245550369-a008c0b9375e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1677251486218-96798abb85a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1710912119115-eeb1dfa1e8fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1584516437417-180b91ee65ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1594296061348-24e38ef1dd0c?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1638617858733-3984b5d9c10d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1672840892334-02f305b7d0b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const testimonials = [
  { name: "John Doe", quote: "Amazing photography!", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", quote: "Captured moments perfectly.", image: "https://via.placeholder.com/150" },
  { name: "Alex Johnson", quote: "A unique perspective in every shot.", image: "https://via.placeholder.com/150" },
];

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
   
      <section className="relative lg:h-screen h-[500px] bg-cover bg-center">
      <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
        />
      
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="text-white lg:text-6xl  text-3xl opacity-50">
            PERSPECTIVE.
            <p className='text-sm pl-4 lg:pl-0'>Capturing the moments</p>
            
          </motion.h1>

        </div>
      </section>

    {/* Image Grid Section */}
<section className="py-16 bg-gray-100">
  <motion.h2 
    className="lg:text-5xl text-2xl text-center mb-12 "
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    GALLERY
  </motion.h2>

 
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-12">
    {galleryImages.map((image, index) => (
      <React.Fragment key={index}>
        <motion.div
          className={`relative overflow-hidden ${index % 2 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}  // Random grid span for variety
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          <img 
            src={image.url} 
            alt={`Photo ${index}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
        </motion.div>

    
        {(index + 1) % 2 === 0 && (
          <motion.div
            className="relative overflow-hidden col-span-1 row-span-1 bg-gray-200 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: (index + 1) * 0.1 }}
          >
 
            {index === 1 && (
              <img 
                src="https://images.unsplash.com/photo-1716534133678-4eb3eee6e098?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Placeholder 1" 
                className="w-full h-full object-cover"
              />
            )}
            {index === 3 && (
              <img 
                src="https://images.unsplash.com/photo-1622463666127-579bfd5b8c50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Placeholder 2" 
                className="w-full h-full object-cover"
              />
            )}
            {index === 5 && (
              <img 
                src="https://plus.unsplash.com/premium_photo-1691031429909-539e8af8b4cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Placeholder 3" 
                className="w-full h-full object-cover"
              />
            )}
            {index === 7 && (
              <img 
                src="https://images.unsplash.com/photo-1664473654226-d15b0a7278f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Placeholder 4" 
                className="w-full h-full object-cover"
              />
            )}

              {index === 9 && (
              <img 
                src="https://images.unsplash.com/photo-1712516906174-3b7b50713291?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Placeholder 4" 
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        )}
      </React.Fragment>
    ))}
  </div>
</section>


      {/* Video Section */}
      <section className="relative h-screen bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/18983873/18983873-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          
          <motion.h1
            className="text-white  lg:text-5xl text-3xl  "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 50 }}
            transition={{ duration: 1 }}
          >
             DRONE SHOTS
          </motion.h1>
        </div>
      </section>

      {/* Section 1: The Art of Photography */}
     


      <section className="py-16 bg-white flex flex-col md:flex-row items-center lg:p-16 ">
      
        <motion.div 
          className="w-full md:w-1/2 px-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl mb-4  pl-4  "> THE ART OF PHOTOGRAPHY</h2>
          <p className="text-lg text-gray-600 pl-4 lg:pl-4 ">
            DISCOVER THE PASSION, DEDICATION, AND SKILL THAT GOES INTO CREATING EACH PHOTOGRAPH TO MAKE IT REAL TO THE WORLD TO SEE . 
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 pt-6 p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="https://images.unsplash.com/photo-1536632087471-3cf3f2986328?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Art of Photography" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#A7BEAE]">
  <motion.h2 
    className="text-5xl text-center mb-12 "
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
     TESTIMONIALS
  </motion.h2>
  
  <div className="flex flex-wrap justify-center">
    {[
      { 
        name: "John Doe", 
        quote: "Amazing photography!", 
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=400&fit=crop"  // Placeholder 1 
      },
      { 
        name: "Jane Smith", 
        quote: "Captured moments perfectly.", 
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=400&fit=crop"  // Placeholder 2 
      },
      { 
        name: "Alex Johnson", 
        quote: "A unique perspective in every shot.", 
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400&fit=crop"  // Placeholder 3
      },
    ].map((testimonial, index) => (
      <motion.div
        key={index}
        className="bg-white p-8 shadow-lg m-4 rounded-lg w-full md:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
      >
        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2 text-center">{testimonial.name}</h3>
        <p className="text-gray-600 text-center">{testimonial.quote}</p>
      </motion.div>
    ))}
  </div>
</section>





    </div>
  );
};

export default HomePage;











