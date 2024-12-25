import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './HeroSection.css';

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Array of image URLs for background images
  const images = [
    "/src/components/home/images/backgroundpics/principalmassaddress3.jpg",
    "/src/components/home/images/backgroundpics/scottishdance.jpg",
    "/src/components/home/images/backgroundpics/basketball.jpg",
    "/src/components/home/images/backgroundpics/assembly.jpg",
    "/src/components/home/images/backgroundpics/foreignexchange.jpg",
    "/src/components/home/images/backgroundpics/girlssoccerteam.jpg",
    "/src/components/home/images/backgroundpics/inclusiveimmersiondairy.jpg",
    "/src/components/home/images/backgroundpics/scouts.jpg",
    "/src/components/home/images/backgroundpics/primarylovely.jpg",
    "/src/components/home/images/backgroundpics/mass1.jpg",
  ];

  // Array of content for each sliding container
  const cards = [
    "Our school offers a nurturing environment that blends cutting-edge technology with a rigorous curriculum.",
    "We empower students to explore their passions, grow as leaders, and succeed in an ever-changing world.",
    "Our strong community ties and unparalleled extracurricular options create an enriched learning experience.",
    "A safe and welcoming campus ensures holistic education for academic, social, and emotional growth.",
    "Join a vibrant community dedicated to helping every student achieve their full potential.",
  ];

  // Change image every 6 seconds for slower transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds for slower transition

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="hero-section">
      {/* Background Images with Slide Transition */}
      <div className="background-container">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, transform: "translateX(-100%)" }}
          animate={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          exit={{ opacity: 0, transform: "translateX(100%)" }}
          transition={{ duration: 6, ease: "easeInOut" }}
        >
          <img
            src={images[currentImageIndex]}
            alt="Background"
            className="w-full h-full object-cover opacity-100"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="content-container flex">
        {/* Motto Card - Left Half */}
        <div className="motto-card">
          <motion.div
            className="flip-card"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Front of the Card */}
            <div className="flip-card-front relative h-[200px] w-[200px] md:h-[250px] md:w-[250px] p-4 mx-auto mt-4">
              <img
                src="/src/components/home/images/backgroundpics/principalmassaddress3.jpg"
                alt="Principal"
                className="rounded-full h-32 w-32 object-cover mx-auto mt-4"
              />
              <div className="text-container text-center mt-4 px-4">
                <h3 className="text-2xl font-bold text-[#006400]">Message from our principal</h3>
                <p className="text-xl italic text-[#1E3A8A]">We'd love to have you as one of us!!</p>
              </div>
            </div>
            {/* Back of the Card */}
            <div className="flip-card-back flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#1E3A8A]">"Carpe Diem"<br></br>
                Seize the Opportunity</h3>
              <p className="text-lg text-[#1E3A8A]">
                
              </p>
              <img
                src="/src/components/home/images/backgroundpics/principalmassaddress3.jpg"
                alt="Principal"
                className="w-24 h-24 object-cover rounded-full mt-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Sliding Content with Arrows */}
        <motion.div
          className="paragraph-container relative w-full md:w-1/2 px-4"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
  style={{
    fontFamily: "Times New Roman, Times, serif",
    color: "red",
    fontSize: "1.875rem", // Equivalent to text-3xl
    fontWeight: "bold",
    marginBottom: "1rem"
  }}
>
  Why Join Us?
</h2>
<p
  style={{
    fontFamily: "Times New Roman, Times, serif",
    fontSize: "1.25rem", // Equivalent to text-xl
    background: "linear-gradient(to grey, black)",
    color:"black",
    WebkitBackgroundClip: "text",
  }}
>
  {cards[currentCardIndex]}
</p>

          

          {/* Previous and Next Buttons */}
          <span
            onClick={handlePreviousCard}
            className="button-prev absolute left-0 text-white hover:text-green-500 cursor-pointer"
          >
            &#8592;
          </span>
          <span
            onClick={handleNextCard}
            className="button-next absolute right-0 text-white hover:text-green-500 cursor-pointer"
          >
            &#8594;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
