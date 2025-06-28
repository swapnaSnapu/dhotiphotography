// 'use client';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import Reviews from './reviewcard';

// const images = [
//   { id: 1, src: "/img10.jpg", alt: "Wedding Photography" },
//   { id: 2, src: "/img2.jpg", alt: "Cultural Events" },
//   { id: 3, src: "/img3.jpg", alt: "Family Portraits" },
// ];

// const reviews = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     text: "Absolutely stunning photos of our wedding! Captured every special moment perfectly.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Raj Patel",
//     text: "Professional service and beautiful traditional photography. Highly recommend!",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Ananya Gupta",
//     text: "They truly understood our vibe and style — highly recommend!",
//     rating: 4
//   }
// ];

// export default function HeroSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

//   useEffect(() => {
//     const imgInt = setInterval(() => setCurrentImageIndex(prev => (prev + 1) % images.length), 5000);
//     const revInt = setInterval(() => setCurrentReviewIndex(prev => (prev + 1) % reviews.length), 6000);
//     return () => {
//       clearInterval(imgInt);
//       clearInterval(revInt);
//     };
//   }, []);

//   return (
//     <section id="HeroSection" className="relative bg-[#F9F5EC] flex flex-col lg:flex-row items-start px-6 pb-20 overflow-hidden">
      
//       {/* Left Side */}
//       <div className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left mt-12 lg:mt-0">
//         <motion.h1
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl lg:mt-4 md:text-4xl lg:text-6xl -mt-9 font-bold text-[#800000] mb-4 leading-tight"
//         >
//           Capture Your Culture{" "}
//           <span className="text-[#D4AF37] lg:ml-45 italic inline-block">Dhoti</span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-xs text-[#5D4037] font-[Palatino] mb-8 max-w-lg mx-auto lg:text-xl md-text-xl lg:mx-0 space-y-3"
//         >
//           <p>
//             Our mission is to beautifully preserve the essence of your cultural moments whether it's a radiant South Asian wedding, an intimate family portrait session, or a vibrant traditional festival.
//             Specializing in cultural photography, we artfully blend heritage storytelling with modern techniques to capture images that reflect the richness of your background and the joy of the present moment.
//             With deep experience in both traditional and contemporary photography styles, we create timeless visuals that honor your customs, rituals, and family legacy celebrating the vibrant colors, emotions, and beauty of South Asian traditions through every frame.
//           </p>
//         </motion.div>

//         {/* Review & Buttons */}
//         {/* <div className="lg:mt-5 w-full  flex flex-col sm:flex-row sm:items-start sm:justify-start gap-6">
//           {/* Review Box */}
//           {/* <div className="bg-gradient-to-br from-white via-[#f9f5ec] to-[#f0e9dc]
//               border border-[#e4dcd1] rounded-3xl shadow-xl
//               p-3 h-32 w-full lg:p-5 lg:h-40 max-w-[260px]
//               flex flex-col justify-between">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={reviews[currentReviewIndex].id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col justify-between h-full"
//               >
//                 <p className="text-gray-700 italic text-xs lg:text-sm leading-snug line-clamp-3">
//                   “{reviews[currentReviewIndex].text}”
//                 </p>

//                 <div className="flex items-center mt-4">
//                   <div className="w-9 h-9 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold lg:text-sm text:xs r-3 shadow">
//                     {reviews[currentReviewIndex].name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#5D4037] lg:text-sm text:xs">
//                       {reviews[currentReviewIndex].name}
//                     </p>
//                     <p className="lg:text-xs text[1px] text-[#D4AF37] leading-none">
//                       {'⭐️'.repeat(reviews[currentReviewIndex].rating)}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div> */} 
          
//           <Reviews/>

//           {/* Buttons */}
//           <div className="space-x-3 md:ml-50 lg:space-y-3 space-x-3">
//             <Link href="#ContactSection">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0  ml-[-160px] bg-[#D4AF37] text-xs lg:text-lg text-white lg:font-semibold rounded-full shadow-md hover:bg-[#c19b2c]"
//             >
//               Book Your Session
//             </motion.button>
//             </Link>
//             <Link href="#GallerySection">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0 lg:mr-0 mr-[-155px] lg:mt-5 mt-1 text-xs lg:text-lg bg-white border border-[#D4AF37] text-[#5D4037] font-semibold rounded-full shadow-md hover:bg-[#f5f0e4]"
//             >
//               See Our Gallery
//             </motion.button>
//             </Link>
//           </div>
//         </div>
//       {/* </div> */}

//       {/* Right Side: Rotating Image Section */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-4">
//         <div className="relative w-[450px] h-[350px] md:w-[420px] md:h-[480px] lg:w-[560px] lg:h-[600px]">
//           <AnimatePresence mode="wait">
//             {images.map((img, idx) => (
//               idx === currentImageIndex && (
//                 <motion.div
//                   key={img.id}
//                   className="absolute inset-0"
//                   initial={{ opacity: 0, rotateY: 90 }}
//                   animate={{ opacity: 1, rotateY: 0 }}
//                   exit={{ opacity: 0, rotateY: -90 }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                 >
//                   <Image
//                     src={img.src}
//                     alt={img.alt}
//                     fill
//                     className="object-cover"
//                     style={{ borderRadius: '50% / 40%', objectPosition: 'center top' }}
//                     priority
//                   />
//                 </motion.div>
//               )
//             ))}
//           </AnimatePresence>

//           {/* Stand Holders */}
//           <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
//           <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />

//           {/* 3D Stand Base */}
//           <motion.div
//             className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#5D4037] rounded-t-md z-10 shadow"
//             animate={{ scale: [1, 1.04, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-[#5D4037] to-[#3E2723] rounded-full shadow-md" />

//           {/* Modified Stand Base with Shallow Cut Corners */}
//           <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-48 h-6 bg-[#4E342E] shadow-xl [clip-path:polygon(8%_0%,92%_0%,100%_100%,0%_100%)]" />
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';
// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../admin/Firebase/config';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// const images = [
//   { id: 1, src: "/img10.jpg", alt: "Wedding Photography" },
//   { id: 2, src: "/img2.jpg", alt: "Cultural Events" },
//   { id: 3, src: "/img3.jpg", alt: "Family Portraits" },
// ];

// export default function HeroSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [reviews, setReviews] = useState([]);
//   const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'reviews'));
//         const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setReviews(data);
//       } catch (err) {
//         console.error("Failed to fetch reviews:", err);
//       }
//     };

//     fetchReviews();
//   }, []);

//   useEffect(() => {
//     const imgInterval = setInterval(() => {
//       setCurrentImageIndex(prev => (prev + 1) % images.length);
//     }, 5000);

//     const reviewInterval = setInterval(() => {
//       if (reviews.length > 0) {
//         setCurrentReviewIndex(prev => (prev + 1) % reviews.length);
//       }
//     }, 6000);

//     return () => {
//       clearInterval(imgInterval);
//       clearInterval(reviewInterval);
//     };
//   }, [reviews]);

//   const currentReview = reviews[currentReviewIndex];

//   return (
//     <section id="HeroSection" className="relative bg-[#F9F5EC] flex flex-col lg:flex-row items-start px-6 pb-20 overflow-hidden">
//       {/* Left Content */}
//       <div className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left mt-12 lg:mt-0">
//         <motion.h1
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl lg:mt-4 md:text-4xl lg:text-6xl -mt-9 font-bold text-[#800000] mb-4 leading-tight"
//         >
//           Capture Your Culture{" "}
//           <span className="text-[#D4AF37] lg:ml-45 italic inline-block">Dhoti</span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-xs text-[#5D4037] font-[Palatino] mb-8 max-w-lg mx-auto lg:text-xl md-text-xl lg:mx-0 space-y-3"
//         >
//           <p>
//             Our mission is to beautifully preserve the essence of your cultural moments—whether it’s a radiant South Asian wedding, an intimate family portrait, or a vibrant traditional festival.
//           </p>
//         </motion.div>

//         {/* Dynamic Review Box */}
//         {currentReview && (
//           <div className="lg:mt-5 w-full flex flex-col sm:flex-row sm:items-start sm:justify-start gap-6">
//             <div className="bg-gradient-to-br from-white via-[#f9f5ec] to-[#f0e9dc]
//                 border border-[#e4dcd1] rounded-3xl shadow-xl
//                 p-3 h-32 w-full lg:p-5 lg:h-40 max-w-[260px]
//                 flex flex-col justify-between">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentReview.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.6 }}
//                   className="flex flex-col justify-between h-full"
//                 >
//                   <p className="text-gray-700 italic text-xs lg:text-sm leading-snug line-clamp-3">
//                     “{currentReview.text || 'No review provided.'}”
//                   </p>
//                   <div className="flex items-center mt-4">
//                     <div className="w-9 h-9 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold lg:text-sm text-xs shadow">
//                       {currentReview.name.charAt(0)}
//                     </div>
//                     <div className="ml-2">
//                       <p className="font-medium text-[#5D4037] lg:text-sm text-xs">
//                         {currentReview.name}
//                       </p>
//                       <p className="lg:text-xs text-[10px] text-[#D4AF37] leading-none">
//                         {'⭐️'.repeat(currentReview.rating)}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="space-x-3 md:ml-50 lg:space-y-3 space-x-3 mt-6">
//           <Link href="#ContactSection">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0 ml-[-160px] bg-[#D4AF37] text-xs lg:text-lg text-white lg:font-semibold rounded-full shadow-md hover:bg-[#c19b2c]"
//             >
//               Book Your Session
//             </motion.button>
//           </Link>
//           <Link href="#GallerySection">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0 lg:mr-0 mr-[-155px] lg:mt-5 mt-1 text-xs lg:text-lg bg-white border border-[#D4AF37] text-[#5D4037] font-semibold rounded-full shadow-md hover:bg-[#f5f0e4]"
//             >
//               See Our Gallery
//             </motion.button>
//           </Link>
//         </div>
//       </div>

//       {/* Right Side – Rotating Image */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-4">
//         <div className="relative w-[450px] h-[350px] md:w-[420px] md:h-[480px] lg:w-[560px] lg:h-[600px]">
//           <AnimatePresence mode="wait">
//             {images.map((img, idx) =>
//               idx === currentImageIndex ? (
//                 <motion.div
//                   key={img.id}
//                   className="absolute inset-0"
//                   initial={{ opacity: 0, rotateY: 90 }}
//                   animate={{ opacity: 1, rotateY: 0 }}
//                   exit={{ opacity: 0, rotateY: -90 }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                 >
//                   <Image
//                     src={img.src}
//                     alt={img.alt}
//                     fill
//                     className="object-cover"
//                     style={{ borderRadius: '50% / 40%', objectPosition: 'center top' }}
//                     priority
//                   />
//                 </motion.div>
//               ) : null
//             )}
//           </AnimatePresence>

//           {/* Stand */}
//           <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
//           <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
//           <motion.div
//             className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#5D4037] rounded-t-md z-10 shadow"
//             animate={{ scale: [1, 1.04, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-[#5D4037] to-[#3E2723] rounded-full shadow-md" />
//           <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-48 h-6 bg-[#4E342E] shadow-xl [clip-path:polygon(8%_0%,92%_0%,100%_100%,0%_100%)]" />
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../admin/Firebase/config';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { id: 1, src: "/img10.jpg", alt: "Wedding Photography" },
  { id: 2, src: "/img2.jpg", alt: "Cultural Events" },
  { id: 3, src: "/img3.jpg", alt: "Family Portraits" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'reviews'));
        const data = snapshot.docs.map(doc => {
          const d = doc.data();
          return {
            id: doc.id,
            name: d.name || 'Anonymous',
            text: d.comment || d.review || d.message || 'No review provided.',
            rating: d.rating || 5
          };
        });
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);

    const reviewInterval = setInterval(() => {
      if (reviews.length > 0) {
        setCurrentReviewIndex(prev => (prev + 1) % reviews.length);
      }
    }, 6000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(reviewInterval);
    };
  }, [reviews]);

  const currentReview = reviews[currentReviewIndex];

  return (
    <section id="HeroSection" className="relative bg-[#F9F5EC] flex flex-col lg:flex-row items-start px-6 pb-20 overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left mt-12 lg:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:mt-4 md:text-4xl lg:text-6xl -mt-9 font-bold text-[#800000] mb-4 leading-tight"
        >
          Capture Your Culture{" "}
          <span className="text-[#D4AF37] lg:ml-45 italic inline-block">Dhoti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-[#5D4037] font-[Palatino] mb-8 max-w-lg mx-auto lg:text-xl md-text-xl lg:mx-0 space-y-3"
        >
          <p>
            Our mission is to beautifully preserve the essence of your cultural moments whether it's a radiant South Asian wedding, an intimate family portrait session, or a vibrant traditional festival.
             Specializing in cultural photography, we artfully blend heritage storytelling with modern techniques to capture images that reflect the richness of your background and the joy of the present moment.
             With deep experience in both traditional and contemporary photography styles, we create timeless visuals that honor your customs, rituals, and family legacy celebrating the vibrant colors, emotions, and beauty of South Asian traditions through every frame.
          </p>
        </motion.div>

        {/* Review Box (Updated: No name icon, show 5 stars total) */}
{currentReview && (
  <div className="lg:mt-5 w-full flex flex-col sm:flex-row sm:items-start sm:justify-start gap-6">
    <div className="bg-gradient-to-br from-white via-[#f9f5ec] to-[#f0e9dc]
        border border-[#e4dcd1] rounded-3xl shadow-xl
        p-3 h-32 w-full lg:p-5 lg:h-40 max-w-[260px]
        flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentReview.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between h-full"
        >
          <p className="text-gray-700 italic text-xs lg:text-sm leading-snug line-clamp-3">
            “{currentReview.text || 'No review provided.'}”
          </p>
          <div className="mt-4">
            <p className="font-bold text-[#5D4037] lg:text-sm text-xs">
              {currentReview.name}
            </p>
            <div className="lg:text-xs text-[10px] text-[#D4AF37] leading-none flex">
              {/* {
                Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < currentReview.rating ? '⭐️' : '☆'}
                  </span>
                ))
              } */}
      <div className="flex space-x-[2px]">
  {Array.from({ length: 5 }).map((_, i) => {
    const isFilled = i < currentReview.rating;
    return (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFilled ? '#D4AF37' : '#FFFFFF'}
        stroke={isFilled ? 'none' : 'black'}
        className={isFilled ? 'w-5 h-5' : 'w-4 h-4'}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.3 5.8 22l1.2-7.86-5-4.87 7.1-1.01L12 2z"
        />
      </svg>
    );
  })}
</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
)}


        {/* Buttons */}
        <div className="space-x-3 md:ml-50 lg:space-y-3 space-x-3 mt-6">
          <Link href="#ContactSection">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0 ml-[-160px] bg-[#D4AF37] text-xs lg:text-lg text-white lg:font-semibold rounded-full shadow-md hover:bg-[#c19b2c]"
            >
              Book Your Session
            </motion.button>
          </Link>
          <Link href="#GallerySection">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="lg:px-7 lg:py-3 px-2 py-5 lg:ml-0 lg:mr-0 mr-[-155px] lg:mt-5 mt-1 text-xs lg:text-lg bg-white border border-[#D4AF37] text-[#5D4037] font-semibold rounded-full shadow-md hover:bg-[#f5f0e4]"
            >
              See Our Gallery
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Right Side – Rotating Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-4">
        <div className="relative w-[450px] h-[350px] md:w-[420px] md:h-[480px] lg:w-[560px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            {images.map((img, idx) =>
              idx === currentImageIndex ? (
                <motion.div
                  key={img.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    style={{ borderRadius: '50% / 40%', objectPosition: 'center top' }}
                    priority
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Stand */}
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
          <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-5 h-24 bg-[#D4AF37] rounded-full shadow-lg" />
          <motion.div
            className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#5D4037] rounded-t-md z-10 shadow"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-[#5D4037] to-[#3E2723] rounded-full shadow-md" />
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-48 h-6 bg-[#4E342E] shadow-xl [clip-path:polygon(8%_0%,92%_0%,100%_100%,0%_100%)]" />
        </div>
      </div>
    </section>
  );
}
