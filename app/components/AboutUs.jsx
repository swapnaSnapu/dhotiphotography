// 'use client'; // Needed if you're using App Router (Next.js 13+)

// import { useState } from 'react';
// import Image from 'next/image';

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpanded = () => setExpanded(!expanded);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-white relative">
//       {/* Left Side Content */}
//       <div className="md:w-1/2 space-y-4">
//         <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
//         <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

//         <p className="text-gray-500">
//           We capture timeless moments through our lens, telling visual stories that inspire and connect.
//         </p>

//         {expanded && (
//           <p className="text-gray-500 transition-all duration-300">
//             Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
//           </p>
//         )}

//         <button
//           onClick={toggleExpanded}
//           className="mt-4 flex items-center gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
//         >
//           {expanded ? 'Read Less' : 'Read More'}
//           <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}>
//             ➜
//           </span>
//         </button>
//       </div>
// {/* Step-wise overlapping square images with hover effect */}
// <div className="absolute right-0 -translate-x-6 flex">
//   {/* Image 1 */}
//   <div className="relative z-10 w-[240px] h-[240px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 transition-transform hover:scale-105">
//     <Image src="/len1.jpg" alt="Image 1" layout="fill" objectFit="cover" />
//   </div>

//   {/* Image 2 */}
//   <div className="relative -ml-16 mt-8 z-20 w-[200px] h-[200px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 transition-transform hover:scale-105">
//     <Image src="/len2.jpg" alt="Image 2" layout="fill" objectFit="cover" />
//   </div>

//   {/* Image 3 */}
//   <div className="relative -ml-16 mt-16 z-30 w-[160px] h-[160px] rounded overflow-hidden border-4 border-white shadow-lg shadow-yellow-200 transition-transform hover:scale-105">
//     <Image src="/img3.jpg" alt="Image 3" layout="fill" objectFit="cover" />
//   </div>

//   {/* Image 4 */}
//   <div className="relative -ml-16 mt-24 z-40 w-[130px] h-[130px] rounded overflow-hidden border-4 border-white shadow-lg shadow-green-200 transition-transform hover:scale-105">
//     <Image src="/img4.jpg" alt="Image 4" layout="fill" objectFit="cover" />
//   </div>

//   {/* Image 5 */}
//   <div className="relative -ml-16 mt-32 z-50 w-[100px] h-[100px] rounded overflow-hidden border-4 border-white shadow-lg shadow-blue-200 transition-transform hover:scale-105">
//     <Image src="/img5.jpg" alt="Image 5" layout="fill" objectFit="cover" />
//   </div>
// </div>

//     </section>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function AboutUs() {
//   const [expanded, setExpanded] = useState(false);
//   const toggleExpanded = () => setExpanded(!expanded);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-white relative">
//       {/* Left Side Content */}
//       <div className="md:w-1/2 space-y-4">
//         <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
//         <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

//         <p className="text-gray-500">
//           We capture timeless moments through our lens, telling visual stories that inspire and connect.
//         </p>

//         {expanded && (
//           <p className="text-gray-500 transition-all duration-300">
//             Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
//           </p>
//         )}

//         <button
//           onClick={toggleExpanded}
//           className="mt-4 flex items-center gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
//         >
//           {expanded ? 'Read Less' : 'Read More'}
//           <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}>
//             ➜
//           </span>
//         </button>
//       </div>

//       {/* Right Side Images - Two Sets with Space Between */}
//       <div className="md:w-1/2 relative flex justify-end gap-12 mt-12 md:mt-0">
//         {/* Left Image Set (Mirrored) */}
//         <div className="flex">
//           <div className="relative z-10 w-[240px] h-[240px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 transition-transform hover:scale-105">
//             <Image src="/len1.jpg" alt="Image A1" layout="fill" objectFit="cover" />
//           </div>

//           <div className="relative -ml-16 mt-8 z-20 w-[200px] h-[200px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 transition-transform hover:scale-105">
//             <Image src="/len2.jpg" alt="Image A2" layout="fill" objectFit="cover" />
//           </div>
//         </div>

//         {/* Right Image Set (Original) */}
//         <div className="flex">
//           <div className="relative z-10 w-[240px] h-[240px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 transition-transform hover:scale-105">
//             <Image src="/len1.jpg" alt="Image B1" layout="fill" objectFit="cover" />
//           </div>

//           <div className="relative -ml-16 mt-8 z-20 w-[200px] h-[200px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 transition-transform hover:scale-105">
//             <Image src="/len2.jpg" alt="Image B2" layout="fill" objectFit="cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-white relative">
      {/* Left Side Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-sm font-medium text-black uppercase tracking-wide">About Us</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#800020]">Behind the Lens</h3>

        <p className="text-gray-500">
          We capture timeless moments through our lens, telling visual stories that inspire and connect.
        </p>

        {expanded && (
          <p className="text-gray-500 transition-all duration-300">
            Our mission is to reflect authentic experiences in every frame. With years of expertise and a passion for storytelling, we create visuals that linger in memory.
          </p>
        )}

        <button
          onClick={toggleExpanded}
          className="mt-4 flex items-center gap-2 text-white bg-[#D4AF37] px-4 py-2 rounded hover:bg-[#c19b2c] transition"
        >
          {expanded ? 'Read Less' : 'Read More'}
          <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}>
            ➜
          </span>
        </button>
      </div>

      {/* Right Side Images - Two Sets with Space Between */}
      <div className="md:w-1/2 relative flex justify-end gap-12 mt-12 md:mt-0">
        {/* Left Image Set (original: big then small) */}
        <div className="flex">
          <div className="relative z-10 w-[240px] h-[240px] rounded overflow-hidden border-4 border-white shadow-lg shadow-red-200 transition-transform hover:scale-105">
            <Image src="/len1.jpg" alt="Image A1" layout="fill" objectFit="cover" />
          </div>

          <div className="relative -ml-16 mt-8 z-20 w-[200px] h-[200px] rounded overflow-hidden border-4 border-white shadow-lg shadow-orange-200 transition-transform hover:scale-105">
            <Image src="/len2.jpg" alt="Image A2" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Right Image Set (swapped sizes: small then big) */}
        <div className="flex">
          <div className="relative z-10 w-[180px] h-[180px] rounded overflow-hidden border-4 border-white shadow-lg shadow-blue-200 transition-transform hover:scale-105">
            <Image src="/len3.jpg" alt="Image B1" layout="fill" objectFit="cover" />
          </div>

          <div className="relative -ml-16 mt-8 z-20 w-[220px] h-[220px] rounded overflow-hidden border-4 border-white shadow-lg shadow-green-200 transition-transform hover:scale-105">
            <Image src="/len4.jpg" alt="Image B2" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
