'use client';
import { useState } from 'react';
import { CheckCircle, Star, Camera, Clock, Image, Users, Video, MapPin, Award, Crown } from 'lucide-react';

const packages = [
  {
    name: 'Bronze',
    subtitle: 'Perfect Start',
    price: '£149',
    originalPrice: '£199',
    features: [
      { icon: Clock, text: '2-Hour Professional Shoot' },
      { icon: Image, text: '15 Premium Edited Photos' },
      { icon: Users, text: 'One Traditional Outfit' },
      { icon: MapPin, text: 'One Outdoor/Indoor Location' },
    ],
    popular: false,
    gradient: 'from-amber-50 to-orange-50',
    borderGradient: 'from-amber-300 to-orange-300',
    buttonGradient: 'from-amber-600 to-orange-600',
    iconColor: 'text-amber-600',
    badge: null,
  },
  {
    name: 'Silver',
    subtitle: 'Most Popular',
    price: '£249',
    originalPrice: '£329',
    features: [
      { icon: Clock, text: '4-Hour Extended Shoot' },
      { icon: Image, text: '30 Professional Edited Photos' },
      { icon: Users, text: 'Two Complete Outfit Changes' },
      { icon: Camera, text: 'Location + Decor Detail Shots' },
      { icon: Video, text: 'Short Cinematic Highlight Video' },
    ],
    popular: true,
    gradient: 'from-slate-50 to-gray-50',
    borderGradient: 'from-slate-400 to-gray-400',
    buttonGradient: 'from-slate-600 to-gray-700',
    iconColor: 'text-slate-600',
    badge: 'Most Popular',
  },
  {
    name: 'Gold',
    subtitle: 'Premium Experience',
    price: '£399',
    originalPrice: '£549',
    features: [
      { icon: Crown, text: 'Full-Day Luxury Coverage' },
      { icon: Image, text: '60+ Masterpiece Edited Photos' },
      { icon: Users, text: 'Unlimited Outfit Changes' },
      { icon: Camera, text: 'Pre/Post Event Complete Coverage' },
      { icon: Video, text: 'Cinematic Video + Social Reels' },
      { icon: Award, text: 'Traditional Poses & Candid Moments' },
    ],
    popular: false,
    gradient: 'from-yellow-50 to-amber-50',
    borderGradient: 'from-yellow-400 to-amber-400',
    buttonGradient: 'from-yellow-600 to-amber-600',
    iconColor: 'text-yellow-600',
    badge: 'Premium',
  },
];

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="PackagesSection" className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photography Packages
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Choose Your Perfect
            <br />
            <span className="text-3xl md:text-5xl">Photography Experience</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Capture your special moments with our professionally crafted packages designed for every celebration and tradition.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group ${pkg.popular ? 'lg:-mt-8' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`
                relative overflow-hidden rounded-2xl lg:rounded-3xl
                bg-gradient-to-br ${pkg.gradient}
                border-2 border-transparent
                bg-clip-padding
                shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-out
                ${hoveredCard === index ? 'scale-105' : ''}
                ${pkg.popular ? 'ring-2 ring-rose-200 shadow-rose-200/25' : ''}
              `}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${pkg.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute inset-[2px] rounded-2xl lg:rounded-3xl bg-gradient-to-br ${pkg.gradient}`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-6">{pkg.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-4xl lg:text-5xl font-bold text-gray-800">
                          {pkg.price}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Save £{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group/feature"
                      >
                        <div className={`
                          flex items-center justify-center w-10 h-10 rounded-full
                          bg-white shadow-md group-hover/feature:shadow-lg
                          transition-all duration-300
                          ${pkg.iconColor}
                        `}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`
                    w-full py-4 px-6 rounded-xl font-semibold text-white
                    bg-gradient-to-r ${pkg.buttonGradient}
                    shadow-lg hover:shadow-xl
                    transform hover:-translate-y-1
                    transition-all duration-300
                    group/button
                  `}>
                    <span className="flex items-center justify-center gap-2">
                      Book {pkg.name} Package
                      <Camera className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>

                  {/* Small print */}
                  <p className="text-center text-gray-500 text-sm mt-4">
                    No hidden fees • Flexible scheduling
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${pkg.buttonGradient} transform rotate-45 translate-x-10 -translate-y-10`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom package? We're here to help create the perfect photography experience for your special day.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Users className="w-5 h-5" />
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { useState, useEffect } from 'react';
// import { CheckCircle, Star, Camera, Clock, Users, Video, Sparkles, Heart, Crown, Gem } from 'lucide-react';

// const packages = [
//   {
//     name: 'Bronze',
//     price: '£149',
//     originalPrice: '£199',
//     icon: Heart,
//     features: [
//       { icon: Clock, text: '2-Hour Shoot' },
//       { icon: Camera, text: '15 Edited Photos' },
//       { icon: Users, text: 'One Traditional Outfit' },
//       { icon: Sparkles, text: 'One Location' },
//     ],
//     color: 'bronze',
//     theme: {
//       primary: '#CD7F32',
//       secondary: '#8B4513',
//       accent: '#DAA520',
//       light: '#F4E4BC',
//       gradient: 'from-amber-200 via-yellow-300 to-orange-400',
//       shadow: 'shadow-amber-500/30',
//     },
//     delay: 0.2
//   },
//   {
//     name: 'Silver',
//     price: '£249',
//     originalPrice: '£329',
//     icon: Crown,
//     features: [
//       { icon: Clock, text: '4-Hour Shoot' },
//       { icon: Camera, text: '30 Edited Photos' },
//       { icon: Users, text: 'Two Outfit Changes' },
//       { icon: Sparkles, text: 'Location + Decor Shots' },
//       { icon: Video, text: 'Short Highlight Video' },
//     ],
//     color: 'silver',
//     theme: {
//       primary: '#C0C0C0',
//       secondary: '#708090',
//       accent: '#B8860B',
//       light: '#F8F8FF',
//       gradient: 'from-slate-200 via-gray-300 to-slate-400',
//       shadow: 'shadow-slate-500/30',
//     },
//     popular: true,
//     delay: 0.4
//   },
//   {
//     name: 'Gold',
//     price: '£399',
//     originalPrice: '£549',
//     icon: Gem,
//     features: [
//       { icon: Clock, text: 'Full-Day Shoot' },
//       { icon: Camera, text: '60+ Edited Photos' },
//       { icon: Users, text: 'Unlimited Outfits' },
//       { icon: Sparkles, text: 'Pre/Post Event Coverage' },
//       { icon: Video, text: 'Highlight Video + Reels' },
//       { icon: Star, text: 'Traditional + Candid' },
//     ],
//     color: 'gold',
//     theme: {
//       primary: '#FFD700',
//       secondary: '#B8860B',
//       accent: '#FF6347',
//       light: '#FFFACD',
//       gradient: 'from-yellow-300 via-amber-400 to-orange-500',
//       shadow: 'shadow-yellow-500/40',
//     },
//     delay: 0.6
//   },
// ];

// export default function PackagesSection() {
//   const [activePackage, setActivePackage] = useState(1);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     setIsVisible(true);
//     // Generate floating particles
//     const newParticles = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 2,
//       delay: Math.random() * 2,
//     }));
//     setParticles(newParticles);
//   }, []);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: ((e.clientX - rect.left) / rect.width) * 100,
//       y: ((e.clientY - rect.top) / rect.height) * 100,
//     });
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
//       {/* Animated background particles */}
//       <div className="absolute inset-0">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               animationDelay: `${particle.delay}s`,
//               animationDuration: `${3 + Math.random() * 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Dynamic gradient overlay */}
//       <div 
//         className="absolute inset-0 opacity-20 transition-all duration-1000"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
//         }}
//       />

//       <div className="relative z-10 px-6 py-20" onMouseMove={handleMouseMove}>
//         {/* Floating header */}
//         <div className="text-center mb-20">
//           <div className={`inline-block transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="relative">
//               <h2 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text mb-4 tracking-tight">
//                 PACKAGES
//               </h2>
//               <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 blur-xl rounded-full -z-10" />
//             </div>
//             <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
//               Discover extraordinary photography experiences crafted for your most precious moments
//             </p>
//           </div>
//         </div>

//         {/* Revolutionary hexagonal layout */}
//         <div className="max-w-7xl mx-auto">
//           <div className="relative flex justify-center items-center min-h-[600px]">
//             {packages.map((pkg, index) => {
//               const IconComponent = pkg.icon;
//               const isActive = activePackage === index;
//               const angle = (index * 120) - 90; // 120 degrees apart, starting from top
//               const radius = 200;
//               const x = Math.cos(angle * Math.PI / 180) * radius;
//               const y = Math.sin(angle * Math.PI / 180) * radius;

//               return (
//                 <div
//                   key={index}
//                   className={`absolute transform transition-all duration-1000 ease-out cursor-pointer ${
//                     isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//                   }`}
//                   style={{
//                     transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.2)' : 'scale(1)'}`,
//                     transitionDelay: `${pkg.delay}s`,
//                     zIndex: isActive ? 50 : 10,
//                   }}
//                   onMouseEnter={() => setActivePackage(index)}
//                 >
//                   {/* Hexagon shape */}
//                   <div className="relative group">
//                     {/* Outer glow effect */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${pkg.theme.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150`} />
                    
//                     {/* Main hexagon container */}
//                     <div className={`
//                       relative w-80 h-80 
//                       ${isActive ? 'animate-pulse' : ''}
//                       transform transition-all duration-500
//                       hover:rotate-12 hover:scale-110
//                     `}>
//                       {/* Hexagon background */}
//                       <div 
//                         className={`
//                           absolute inset-0 
//                           bg-gradient-to-br ${pkg.theme.gradient}
//                           ${pkg.theme.shadow} shadow-2xl
//                           transition-all duration-500
//                         `}
//                         style={{
//                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                         }}
//                       />
                      
//                       {/* Inner content */}
//                       <div className="absolute inset-4 flex flex-col items-center justify-center text-center p-6">
//                         {/* Popular badge */}
//                         {pkg.popular && (
//                           <div className="absolute -top-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
//                             ⭐ POPULAR
//                           </div>
//                         )}

//                         {/* Icon */}
//                         <div className={`mb-4 p-4 rounded-full bg-white/20 backdrop-blur-sm ${isActive ? 'animate-spin' : ''}`}>
//                           <IconComponent className="w-12 h-12 text-white" />
//                         </div>

//                         {/* Package name */}
//                         <h3 className="text-2xl font-black text-white mb-2 tracking-wide">
//                           {pkg.name}
//                         </h3>

//                         {/* Price */}
//                         <div className="mb-4">
//                           <div className="flex items-center justify-center gap-2">
//                             <span className="text-3xl font-bold text-white">{pkg.price}</span>
//                             <span className="text-sm text-white/60 line-through">{pkg.originalPrice}</span>
//                           </div>
//                         </div>

//                         {/* Features count */}
//                         <div className="text-white/80 text-sm mb-4">
//                           {pkg.features.length} Premium Features
//                         </div>

//                         {/* CTA */}
//                         <button className={`
//                           px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold
//                           hover:bg-white hover:text-gray-800 transition-all duration-300
//                           transform hover:scale-105 active:scale-95
//                           ${isActive ? 'animate-pulse' : ''}
//                         `}>
//                           Select {pkg.name}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Features display for active package */}
//           <div className="mt-20 text-center">
//             <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-white/20">
//                 <h4 className="text-3xl font-bold text-white mb-8">
//                   {packages[activePackage].name} Package Features
//                 </h4>
                
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {packages[activePackage].features.map((feature, i) => {
//                     const FeatureIcon = feature.icon;
//                     return (
//                       <div 
//                         key={i}
//                         className={`
//                           flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm
//                           transform transition-all duration-500 hover:scale-105 hover:bg-white/20
//                           border border-white/10
//                         `}
//                         style={{
//                           animationDelay: `${i * 0.1}s`,
//                           animation: `slideInFromBottom 0.6s ease-out ${i * 0.1}s both`,
//                         }}
//                       >
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0">
//                           <FeatureIcon className="w-5 h-5 text-white" />
//                         </div>
//                         <span className="text-white font-medium">{feature.text}</span>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Main CTA */}
//                 <div className="mt-8">
//                   <button className={`
//                     px-12 py-4 bg-gradient-to-r ${packages[activePackage].theme.gradient}
//                     text-white font-bold rounded-full text-lg
//                     transform hover:scale-105 active:scale-95 transition-all duration-300
//                     shadow-2xl hover:shadow-3xl
//                     relative overflow-hidden group
//                   `}>
//                     <span className="relative z-10">Book {packages[activePackage].name} - {packages[activePackage].price}</span>
//                     <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating action elements */}
//         <div className="fixed bottom-8 right-8 z-50">
//           <div className="flex flex-col gap-4">
//             <button className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce">
//               <Camera className="w-8 h-8" />
//             </button>
//             <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
//               <Heart className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInFromBottom {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { CheckCircle, Star, Camera, Clock, Users, Video, Sparkles, Heart, Crown, Gem, Play, Pause, ChevronLeft, ChevronRight, Zap, Gift } from 'lucide-react';

// const services = [
//   {
//     id: 'bronze',
//     name: 'Bronze Experience',
//     price: '£149',
//     originalPrice: '£199',
//     icon: Heart,
//     tagline: 'Perfect Beginning',
//     description: 'Capture your beautiful moments with our essential photography package',
//     color: '#CD7F32',
//     gradient: 'from-orange-400 via-amber-500 to-yellow-600',
//     services: [
//       { icon: Clock, title: '2-Hour Professional Shoot', desc: 'Dedicated photography session' },
//       { icon: Camera, title: '15 Premium Edited Photos', desc: 'High-resolution digital delivery' },
//       { icon: Users, title: 'Single Traditional Outfit', desc: 'One complete look styling' },
//       { icon: Sparkles, title: 'Location Photography', desc: 'Indoor or outdoor setting' },
//     ],
//     features: ['Professional editing', 'Digital gallery', 'Mobile-friendly photos', '48-hour delivery'],
//     testimonial: { text: "Amazing quality for the price!", author: "Sarah M." }
//   },
//   {
//     id: 'silver',
//     name: 'Silver Celebration',
//     price: '£249',
//     originalPrice: '£329',
//     icon: Crown,
//     tagline: 'Most Popular Choice',
//     description: 'Enhanced experience with video highlights and extended coverage',
//     color: '#C0C0C0',
//     gradient: 'from-slate-400 via-gray-500 to-slate-600',
//     services: [
//       { icon: Clock, title: '4-Hour Extended Shoot', desc: 'Comprehensive photography session' },
//       { icon: Camera, title: '30 Curated Photos', desc: 'Professional editing and retouching' },
//       { icon: Users, title: 'Two Outfit Changes', desc: 'Multiple looks and styles' },
//       { icon: Sparkles, title: 'Location + Decor Shots', desc: 'Venue and detail photography' },
//       { icon: Video, title: 'Highlight Video Reel', desc: '60-second cinematic edit' },
//     ],
//     features: ['Priority editing', 'Social media formats', 'Behind-the-scenes', 'Same-day previews'],
//     testimonial: { text: "Exceeded all expectations!", author: "Priya K." }
//   },
//   {
//     id: 'gold',
//     name: 'Gold Premium',
//     price: '£399',
//     originalPrice: '£549',
//     icon: Gem,
//     tagline: 'Ultimate Experience',
//     description: 'Complete coverage with unlimited possibilities and premium deliverables',
//     color: '#FFD700',
//     gradient: 'from-yellow-400 via-amber-500 to-orange-600',
//     services: [
//       { icon: Clock, title: 'Full-Day Coverage', desc: 'Complete event documentation' },
//       { icon: Camera, title: '60+ Premium Photos', desc: 'Unlimited shots, premium selection' },
//       { icon: Users, title: 'Unlimited Outfits', desc: 'As many changes as needed' },
//       { icon: Sparkles, title: 'Pre & Post Coverage', desc: 'Preparation and celebration moments' },
//       { icon: Video, title: 'Cinematic Package', desc: 'Highlight reel + Instagram stories' },
//       { icon: Star, title: 'Traditional + Candid', desc: 'Mixed photography styles' },
//     ],
//     features: ['Same-day editing', 'Premium album', 'Print packages', 'Lifetime storage'],
//     testimonial: { text: "Absolutely magical experience!", author: "Anita R." }
//   },
// ];

// export default function PackagesSection() {
//   const [activeService, setActiveService] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [hoveredService, setHoveredService] = useState(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(() => {
//         setProgress(prev => {
//           if (prev >= 100) {
//             setActiveService(current => (current + 1) % services.length);
//             return 0;
//           }
//           return prev + 2;
//         });
//       }, 100);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying]);

//   const handleServiceSelect = (index) => {
//     setActiveService(index);
//     setProgress(0);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const currentService = services[activeService];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
//       </div>

//       <div className="relative z-10 px-6 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-purple-300 text-sm font-medium mb-8 border border-purple-500/20">
//             <Zap className="w-4 h-4" />
//             Interactive Service Explorer
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text mb-6">
//             Photography Services
//           </h1>
          
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Discover our comprehensive photography services through an interactive experience
//           </p>

//           {/* Service Navigator */}
//           <div className="flex justify-center items-center gap-4 mb-8">
//             <button 
//               onClick={() => handleServiceSelect((activeService - 1 + services.length) % services.length)}
//               className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <div className="flex gap-2">
//               {services.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleServiceSelect(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     activeService === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>

//             <button 
//               onClick={() => handleServiceSelect((activeService + 1) % services.length)}
//               className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>

//             <button 
//               onClick={togglePlayPause}
//               className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-all duration-300 ml-4"
//             >
//               {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Progress Bar */}
//           <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
//             <div 
//               className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-100 ease-linear"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>

//         {/* Main Service Container */}
//         <div className="max-w-7xl mx-auto">
//           <div className="relative">
//             {/* Background Container */}
//             <div className={`
//               relative bg-gradient-to-br ${currentService.gradient} 
//               rounded-3xl p-1 shadow-2xl transform transition-all duration-700
//               hover:scale-[1.02] hover:shadow-3xl
//             `}>
//               <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12">
                
//                 {/* Service Header */}
//                 <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
//                   <div className="flex items-center gap-6 mb-6 lg:mb-0">
//                     <div className={`
//                       w-20 h-20 rounded-2xl bg-gradient-to-br ${currentService.gradient} 
//                       flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-500
//                     `}>
//                       <currentService.icon className="w-10 h-10 text-white" />
//                     </div>
                    
//                     <div>
//                       <div className="text-sm text-purple-300 font-medium mb-1">{currentService.tagline}</div>
//                       <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{currentService.name}</h2>
//                       <p className="text-gray-300 text-lg max-w-md">{currentService.description}</p>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <div className="flex items-center gap-3 mb-2">
//                       <span className="text-2xl text-gray-400 line-through">{currentService.originalPrice}</span>
//                       <span className="text-5xl font-black text-white">{currentService.price}</span>
//                     </div>
//                     <div className="text-purple-300 text-sm">Limited Time Offer</div>
//                   </div>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                   {currentService.services.map((service, index) => (
//                     <div
//                       key={index}
//                       className={`
//                         bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10
//                         transform transition-all duration-500 hover:scale-105 hover:bg-white/10
//                         ${hoveredService === index ? 'scale-105 bg-white/10' : ''}
//                       `}
//                       style={{ 
//                         animationDelay: `${index * 0.1}s`,
//                         animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
//                       }}
//                       onMouseEnter={() => setHoveredService(index)}
//                       onMouseLeave={() => setHoveredService(null)}
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className={`
//                           w-12 h-12 rounded-xl bg-gradient-to-br ${currentService.gradient} 
//                           flex items-center justify-center flex-shrink-0 shadow-lg
//                         `}>
//                           <service.icon className="w-6 h-6 text-white" />
//                         </div>
                        
//                         <div>
//                           <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
//                           <p className="text-gray-300 text-sm">{service.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Features & Testimonial Row */}
//                 <div className="grid lg:grid-cols-2 gap-8 mb-12">
//                   {/* Features */}
//                   <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//                     <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
//                       <Gift className="w-5 h-5" />
//                       Included Benefits
//                     </h3>
//                     <div className="grid grid-cols-2 gap-3">
//                       {currentService.features.map((feature, index) => (
//                         <div key={index} className="flex items-center gap-2 text-gray-300">
//                           <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
//                           <span className="text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Testimonial */}
//                   <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//                     <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
//                       <Star className="w-5 h-5 text-yellow-400" />
//                       Client Love
//                     </h3>
//                     <blockquote className="text-gray-300 text-lg italic mb-3">
//                       "{currentService.testimonial.text}"
//                     </blockquote>
//                     <cite className="text-purple-300 font-medium">— {currentService.testimonial.author}</cite>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button className={`
//                     px-8 py-4 bg-gradient-to-r ${currentService.gradient} 
//                     text-white font-bold rounded-2xl text-lg shadow-xl
//                     transform hover:scale-105 active:scale-95 transition-all duration-300
//                     hover:shadow-2xl relative overflow-hidden group
//                   `}>
//                     <span className="relative z-10">Book {currentService.name}</span>
//                     <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//                   </button>
                  
//                   <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
//                     View Gallery
//                   </button>
                  
//                   <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
//                     Get Quote
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Quick Links */}
//         <div className="mt-16 max-w-4xl mx-auto">
//           <div className="grid grid-cols-3 gap-4">
//             {services.map((service, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleServiceSelect(index)}
//                 className={`
//                   p-4 rounded-2xl transition-all duration-300 text-center
//                   ${activeService === index 
//                     ? `bg-gradient-to-r ${service.gradient} text-white shadow-xl scale-105` 
//                     : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:scale-102'
//                   }
//                 `}
//               >
//                 <service.icon className="w-8 h-8 mx-auto mb-2" />
//                 <div className="font-bold text-sm">{service.name}</div>
//                 <div className="text-xs opacity-80">{service.price}</div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from 'react';
// import { CheckCircle, Star, Camera, Clock, Users, Video, Sparkles, Heart, Crown, Gem, Eye, Gift, ArrowRight } from 'lucide-react';

// const packages = [
//   {
//     id: 'bronze',
//     name: 'Bronze',
//     subtitle: 'Essential Moments',
//     price: '£149',
//     originalPrice: '£199',
//     icon: Heart,
//     description: 'Perfect for intimate celebrations and precious family moments',
//     shape: 'blob1',
//     theme: {
//       primary: '#8B7355',
//       secondary: '#A0937D', 
//       accent: '#D4C4A8',
//       light: '#F5F0E8',
//       gradient: 'from-amber-100 via-orange-50 to-yellow-100',
//       border: 'border-amber-200',
//       shadow: 'shadow-amber-200/40',
//     },
//     services: [
//       { icon: Clock, title: '2-Hour Intimate Session', desc: 'Focused photography time', highlight: false },
//       { icon: Camera, title: '15 Curated Images', desc: 'Hand-selected and professionally edited', highlight: true },
//       { icon: Users, title: 'Traditional Styling', desc: 'One complete outfit consultation', highlight: false },
//       { icon: Sparkles, title: 'Location Choice', desc: 'Indoor studio or outdoor natural setting', highlight: false },
//     ],
//     perks: ['Same-day preview', 'Digital gallery', 'Print-ready files', 'Mobile optimization']
//   },
//   {
//     id: 'silver',
//     name: 'Silver',
//     subtitle: 'Complete Experience',
//     price: '£249',
//     originalPrice: '£329',
//     icon: Crown,
//     description: 'Enhanced coverage with cinematic elements and extended sessions',
//     shape: 'blob2',
//     theme: {
//       primary: '#6B7280',
//       secondary: '#9CA3AF',
//       accent: '#D1D5DB',
//       light: '#F9FAFB',
//       gradient: 'from-slate-100 via-gray-50 to-blue-50',
//       border: 'border-slate-200',
//       shadow: 'shadow-slate-200/40',
//     },
//     services: [
//       { icon: Clock, title: '4-Hour Extended Coverage', desc: 'Comprehensive session timeline', highlight: false },
//       { icon: Camera, title: '30 Premium Photographs', desc: 'Extensive collection with variety', highlight: true },
//       { icon: Users, title: 'Multiple Outfit Changes', desc: 'Two distinct looks and styles', highlight: false },
//       { icon: Sparkles, title: 'Venue & Detail Shots', desc: 'Complete visual storytelling', highlight: true },
//       { icon: Video, title: 'Cinematic Highlight Reel', desc: '90-second professional edit', highlight: true },
//     ],
//     perks: ['Priority scheduling', 'Social media package', 'Behind-the-scenes', 'Rush delivery'],
//     popular: true
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     subtitle: 'Luxury Collection',
//     price: '£399',
//     originalPrice: '£549',
//     icon: Gem,
//     description: 'Premium full-service experience with unlimited creative possibilities',
//     shape: 'blob3',
//     theme: {
//       primary: '#92400E',
//       secondary: '#B45309',
//       accent: '#F59E0B',
//       light: '#FEF3C7',
//       gradient: 'from-yellow-100 via-amber-50 to-orange-100',
//       border: 'border-yellow-200',
//       shadow: 'shadow-yellow-200/40',
//     },
//     services: [
//       { icon: Clock, title: 'Full-Day Documentation', desc: 'Complete event coverage', highlight: false },
//       { icon: Camera, title: '60+ Artistic Images', desc: 'Unlimited shots, curated selection', highlight: true },
//       { icon: Users, title: 'Unlimited Styling', desc: 'As many outfit changes as desired', highlight: false },
//       { icon: Sparkles, title: 'Pre & Post Moments', desc: 'Preparation and celebration coverage', highlight: true },
//       { icon: Video, title: 'Complete Video Package', desc: 'Highlight reel plus social stories', highlight: true },
//       { icon: Star, title: 'Mixed Photography Styles', desc: 'Traditional, candid, and artistic', highlight: true },
//     ],
//     perks: ['Same-day highlights', 'Premium album', 'Print packages', 'Lifetime cloud storage']
//   },
// ];

// export default function PackagesSection() {
//   const [selectedPackage, setSelectedPackage] = useState(1);
//   const [viewMode, setViewMode] = useState('overview'); // 'overview' or 'detailed'
//   const [animationKey, setAnimationKey] = useState(0);

//   useEffect(() => {
//     setAnimationKey(prev => prev + 1);
//   }, [selectedPackage]);

//   const currentPackage = packages[selectedPackage];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20 py-16 px-6 overflow-hidden">
//       {/* Subtle background patterns */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-100/40 to-orange-100/40 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-stone-100/40 to-slate-100/40 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-yellow-100/40 to-amber-100/40 rounded-full blur-2xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full text-stone-600 text-sm font-medium mb-6 border border-stone-200/50 shadow-sm">
//             <Camera className="w-4 h-4" />
//             Photography Packages
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-4 tracking-tight">
//             Capture Your
//             <span className="block font-medium text-amber-700">Perfect Moments</span>
//           </h1>
          
//           <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
//             Thoughtfully crafted photography experiences designed to preserve your most cherished memories
//           </p>
//         </div>

//         {/* Package Selection */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 border border-stone-200/50 shadow-lg">
//             {packages.map((pkg, index) => (
//               <button
//                 key={pkg.id}
//                 onClick={() => setSelectedPackage(index)}
//                 className={`
//                   px-6 py-3 rounded-xl font-medium transition-all duration-300 relative
//                   ${selectedPackage === index 
//                     ? `bg-gradient-to-r ${pkg.theme.gradient} text-stone-700 shadow-md` 
//                     : 'text-stone-600 hover:text-stone-800 hover:bg-white/50'
//                   }
//                 `}
//               >
//                 <pkg.icon className="w-5 h-5 inline mr-2" />
//                 {pkg.name}
//                 {pkg.popular && selectedPackage === index && (
//                   <div className="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Package Display - Organic Shape */}
//         <div className="relative mb-16" key={animationKey}>
//           {/* Custom organic shape container */}
//           <div className="relative mx-auto max-w-6xl">
//             <div 
//               className={`
//                 relative bg-gradient-to-br ${currentPackage.theme.gradient} 
//                 ${currentPackage.theme.shadow} shadow-2xl
//                 transform transition-all duration-700 hover:scale-[1.02]
//               `}
//               style={{
//                 borderRadius: selectedPackage === 0 ? '60% 40% 30% 70% / 60% 30% 70% 40%' :
//                              selectedPackage === 1 ? '40% 60% 70% 30% / 40% 70% 30% 60%' :
//                              '50% 50% 80% 20% / 30% 80% 20% 70%',
//                 minHeight: '600px',
//                 animation: 'morphShape 0.8s ease-out'
//               }}
//             >
//               {/* Popular badge */}
//               {currentPackage.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
//                     <Star className="w-4 h-4 fill-current" />
//                     Most Popular Choice
//                   </div>
//                 </div>
//               )}

//               <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
//                 {/* Header Section */}
//                 <div className="text-center mb-12">
//                   <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-500">
//                     <currentPackage.icon className="w-10 h-10 text-stone-700" />
//                   </div>
                  
//                   <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-2">
//                     {currentPackage.name} Package
//                   </h2>
//                   <p className="text-stone-600 text-lg mb-4">{currentPackage.subtitle}</p>
//                   <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">{currentPackage.description}</p>
                  
//                   <div className="flex items-center justify-center gap-4 mt-6">
//                     <span className="text-2xl text-stone-500 line-through">{currentPackage.originalPrice}</span>
//                     <span className="text-5xl font-light text-stone-800">{currentPackage.price}</span>
//                   </div>
//                 </div>

//                 {/* Services Display - Organic Cards */}
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                   {currentPackage.services.map((service, index) => (
//                     <div
//                       key={index}
//                       className={`
//                         relative bg-white/40 backdrop-blur-sm p-6 
//                         ${currentPackage.theme.border} border shadow-sm
//                         hover:bg-white/60 hover:shadow-md transition-all duration-300
//                         ${service.highlight ? 'ring-2 ring-amber-300/50' : ''}
//                       `}
//                       style={{
//                         borderRadius: index % 3 === 0 ? '30px 10px 30px 10px' :
//                                      index % 3 === 1 ? '10px 30px 10px 30px' :
//                                      '20px 40px 20px 40px',
//                         animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
//                       }}
//                     >
//                       {service.highlight && (
//                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
//                           <Star className="w-3 h-3 text-white fill-current" />
//                         </div>
//                       )}
                      
//                       <div className="flex items-start gap-4">
//                         <div className="w-12 h-12 bg-white/60 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
//                           <service.icon className="w-6 h-6 text-stone-700" />
//                         </div>
                        
//                         <div>
//                           <h3 className="font-medium text-stone-800 mb-1">{service.title}</h3>
//                           <p className="text-stone-600 text-sm leading-relaxed">{service.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Perks Section */}
//                 <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/50">
//                   <h3 className="font-medium text-stone-800 mb-4 flex items-center gap-2">
//                     <Gift className="w-5 h-5" />
//                     Included Benefits
//                   </h3>
//                   <div className="grid md:grid-cols-2 gap-3">
//                     {currentPackage.perks.map((perk, index) => (
//                       <div key={index} className="flex items-center gap-3 text-stone-700">
//                         <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
//                           <CheckCircle className="w-3 h-3 text-white" />
//                         </div>
//                         <span className="text-sm font-medium">{perk}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <button className="px-8 py-4 bg-stone-700 text-white rounded-2xl font-medium shadow-lg hover:bg-stone-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                     Book {currentPackage.name} Package
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
                  
//                   <button className="px-8 py-4 bg-white/60 backdrop-blur-sm text-stone-700 rounded-2xl font-medium shadow-lg hover:bg-white/80 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50 flex items-center gap-2">
//                     <Eye className="w-5 h-5" />
//                     View Portfolio
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Package Comparison Quick View */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {packages.map((pkg, index) => (
//             <button
//               key={pkg.id}
//               onClick={() => setSelectedPackage(index)}
//               className={`
//                 text-left p-6 rounded-3xl transition-all duration-300 
//                 ${selectedPackage === index 
//                   ? `bg-gradient-to-br ${pkg.theme.gradient} ${pkg.theme.shadow} shadow-lg scale-105` 
//                   : 'bg-white/40 backdrop-blur-sm hover:bg-white/60 hover:shadow-md border border-white/50'
//                 }
//               `}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <pkg.icon className="w-6 h-6 text-stone-700" />
//                 <div>
//                   <h3 className="font-medium text-stone-800">{pkg.name}</h3>
//                   <p className="text-stone-600 text-sm">{pkg.subtitle}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-stone-500 line-through">{pkg.originalPrice}</span>
//                 <span className="text-xl font-light text-stone-800">{pkg.price}</span>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes morphShape {
//           0% {
//             transform: scale(0.95);
//             opacity: 0.8;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInFromLeft {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }