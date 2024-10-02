import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-white">
        <motion.h1
          className="lg:text-5xl text-3xl text-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT PERSPECTIVE
        </motion.h1>
        <motion.p
          className="text-lg text-black p- text-center max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >

          PERSPECTIVE IS NOT JUST ABOUT PHOTOGRAPHY. IT'S ABOUT CAPTURING THE MOMENTS, EMOTIONS, AND STORIES THAT LIE BEHIND EVERY PICTURE.
        </motion.p>
      </section>

      {/* Our Story Section */}
      <motion.section
  className="py-20 bg-[#375E97] px-10 flex flex-col md:flex-row items-center"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Text Section */}
  <motion.div 
    className="md:w-1/2 mb-8 md:mb-0 md:mr-8" 
    variants={fadeIn}
  >
    <motion.h2 className="text-4xl mb-8" variants={fadeIn}>
      OUR STORY
    </motion.h2>
    <motion.p className="text-lg mb-6 max-w-xl" variants={fadeIn}>
      
      PERSPECTIVE WAS BORN FROM A PASSION FOR STORYTELLING THORUGH THE LENS OF A CAMERA. OUR TEAM OF PHOTOGRAPHERS HAS TRAVELED THE WORLD, CAPTURING LIFE AS IT HAPPENS — THE HIGHS, THE LOWS, AND EVERYTHING IN BETWEEN. 
    </motion.p>
  </motion.div>

  {/* Image Section */}
  <motion.div className="md:w-1/2" variants={fadeIn}>
    <motion.img
      src="https://images.unsplash.com/photo-1529589585661-8fb5cdc75c48?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Our story"
      className="w-full h-96 object-cover rounded-md shadow-lg"
      variants={fadeIn}
    />
  </motion.div>
</motion.section>


      {/* Our Team Section */}
      <section className="py-20 px-10 bg-[#FFBB00]">
  <motion.h2
    className="text-4xl text-black mb-8 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    MEET OUR TEAM
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      'https://images.unsplash.com/photo-1572671846602-1e3a1f4c177f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1648598030797-5c7a49b4e37b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1532660621034-fb55e2e59762?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ].map((imageUrl, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <img
          src={imageUrl}
          alt={`Photographer ${index + 1}`}
          className="w-64 h-64 object-cover rounded-full mb-4"
        />
        <h3 className="text-2xl text-black ">PHOTOGRAPHER {index + 1}</h3>
        <p className="text-sm text-black pt-2">
          AN EXPERT IN  {['portrait', 'team', 'photographer'][index]}, PHOTOGRAPHER, BRINGING YEARS OF EXPERIENCE TO EVERY SHOT.
        </p>
      </motion.div>
    ))}
  </div>
</section>

    

      {/* Closing Section */}
      <motion.section
  className="py-20  px-10 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <h2 className="text-4xl text-black  mb-8">JOIN US IN OUR JOURNEY</h2>
  <p className="text-lg max-w-3xl mx-auto mb-6 text-black">
    EXPLORE THE WORLD THROUGH THE LENS OF PERSPECTIVE. EVERY PHOTO TELLS A STORY, AND WE'RE JUST GETTING STARTED.
  </p>
  <motion.video
    src="https://videos.pexels.com/video-files/27733109/12214420_2560_1440_30fps.mp4" 
    className="w-full h-96 object-cover rounded-md shadow-lg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    autoPlay
    loop
    muted
  />
</motion.section>

    </div>
  );
};

export default AboutPage;













































































































































































































































































































































































