

// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   User,
//   MessageSquare,
//   Facebook,
//   Instagram,
//   MessageCircle
// } from 'lucide-react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your API call or submission logic here
//   };

//   return (
//     <section
//       id="contact"
//       className="py-16 px-4 bg-gradient-to-br from-[#F5F5DC] via-[#FDF5E6] to-[#FAF0E6]"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E342E] mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-lg md:text-xl text-[#8D6E63] max-w-2xl mx-auto">
//             Ready to capture your special moments? Let's discuss your photography needs and create something beautiful together.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-[#E8E8E8]"
//           >
//             <div className="mb-6">
//               <h3 className="text-2xl md:text-3xl font-bold text-[#4E342E] mb-2">
//                 Send us a Message
//               </h3>
//               <p className="text-[#8D6E63]">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>
//             </div>

//             {/* Form */}
//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Your Full Name"
//                   required
//                   className="w-full pl-12 pr-4 py-4 border border-[#E0E0E0] rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-[#FEFEFE] text-[#4E342E] placeholder-[#A1887F]"
//                 />
//               </div>

//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Your Email Address"
//                   required
//                   className="w-full pl-12 pr-4 py-4 border border-[#E0E0E0] rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-[#FEFEFE] text-[#4E342E] placeholder-[#A1887F]"
//                 />
//               </div>

//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Your Phone Number"
//                   required
//                   className="w-full pl-12 pr-4 py-4 border border-[#E0E0E0] rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-[#FEFEFE] text-[#4E342E] placeholder-[#A1887F]"
//                 />
//               </div>

//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-4 border border-[#E0E0E0] rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-[#FEFEFE] text-[#4E342E]"
//               >
//                 <option value="">Select Photography Service</option>
//                 <option value="dhoti-ceremony">Dhoti Ceremony</option>
//                 <option value="naming-ceremony">Naming Ceremony</option>
//                 <option value="family-portraits">Family Portraits</option>
//                 <option value="outdoor-sessions">Outdoor Sessions</option>
//                 <option value="custom-package">Custom Package</option>
//               </select>

//               <div className="relative">
//                 <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#D4AF37]" />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about your event and photography needs..."
//                   rows="6"
//                   required
//                   className="w-full pl-12 pr-4 py-4 border border-[#E0E0E0] rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 bg-[#FEFEFE] text-[#4E342E] placeholder-[#A1887F] resize-none"
//                 ></textarea>
//               </div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#4E342E] font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </motion.button>
//             </form>

//             {/* Social Section */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E8E8E8] mt-10">
//               <h3 className="text-2xl font-bold text-[#4E342E] mb-6">Connect With Us</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
//                 {/* Instagram */}
//                 <motion.a
//                   href="https://instagram.com"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex flex-col items-center p-4 bg-[#F8F8F8] rounded-xl hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F56040] hover:text-white transition-all duration-300 group"
//                 >
//                   <Instagram className="w-8 h-8 text-[#D4AF37] group-hover:text-white mb-2" />
//                   <span className="text-sm font-medium text-[#8D6E63] group-hover:text-white">Instagram</span>
//                 </motion.a>

//                 {/* Facebook */}
//                 <motion.a
//                   href="https://facebook.com"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex flex-col items-center p-4 bg-[#F8F8F8] rounded-xl hover:bg-[#1877F2] hover:text-white transition-all duration-300 group"
//                 >
//                   <Facebook className="w-8 h-8 text-[#D4AF37] group-hover:text-white mb-2" />
//                   <span className="text-sm font-medium text-[#8D6E63] group-hover:text-white">Facebook</span>
//                 </motion.a>

//                 {/* WhatsApp */}
//                 <motion.a
//                   href="https://wa.me/441234567890"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex flex-col items-center p-4 bg-[#F8F8F8] rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
//                 >
//                   <MessageCircle className="w-8 h-8 text-[#D4AF37] group-hover:text-white mb-2" />
//                   <span className="text-sm font-medium text-[#8D6E63] group-hover:text-white">WhatsApp</span>
//                 </motion.a>

//                 {/* Call */}
//                 <motion.a
//                   href="tel:+441234567890"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex flex-col items-center p-4 bg-[#F8F8F8] rounded-xl hover:bg-[#34C759] hover:text-white transition-all duration-300 group"
//                 >
//                   <Phone className="w-8 h-8 text-[#D4AF37] group-hover:text-white mb-2" />
//                   <span className="text-sm font-medium text-[#8D6E63] group-hover:text-white">Call Us</span>
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Info & Map */}
//           {/* Right Side - Map and Contact Info */}
// <motion.div
//   initial={{ opacity: 0, x: 50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.7 }}
//   viewport={{ once: true }}
//   className="space-y-6"
// >
//   {/* Map Section */}
//   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E8E8E8]">
//     <h3 className="text-2xl font-bold text-[#4E342E] mb-4">Find Us</h3>
//     <div className="w-full h-64 md:h-72 bg-[#F9F9F9] rounded-xl overflow-hidden border border-[#E8E8E8]">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5439058247586!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0MC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="rounded-xl"
//       ></iframe>
//     </div>
//   </div>

//   {/* Quick Contact Info */}
//   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E8E8E8]">
//     <h3 className="text-2xl font-bold text-[#4E342E] mb-6">Connect With Us</h3>

//     {/* Direct Contact Information */}
//     <div className="space-y-4">
//       <div className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-xl">
//         <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
//         <div>
//           <h4 className="font-semibold text-[#4E342E]">Phone</h4>
//           <p className="text-[#8D6E63]">+44 1234 567890</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-xl">
//         <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
//         <div>
//           <h4 className="font-semibold text-[#4E342E]">Email</h4>
//           <p className="text-[#8D6E63]">info@snapuphotos.co.uk</p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4 p-4 bg-[#F8F8F8] rounded-xl">
//         <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="font-semibold text-[#4E342E]">Address</h4>
//           <p className="text-[#8D6E63]">123 Photography Street<br />London, UK SW1A 1AA</p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4 p-4 bg-[#F8F8F8] rounded-xl">
//         <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="font-semibold text-[#4E342E]">Business Hours</h4>
//           <div className="text-[#8D6E63] text-sm space-y-1">
//             <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
//             <p>Saturday: 10:00 AM - 4:00 PM</p>
//             <p>Sunday: By Appointment</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </motion.div>

//         </div>

//         {/* Footer CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E8E8E8]"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold text-[#4E342E] mb-4">Ready to Book Your Session?</h3>
//           <p className="text-[#8D6E63] mb-6 max-w-3xl mx-auto">
//             Don't wait for the perfect moment - let us help you create it. Whether it's a traditional ceremony or a modern celebration, we're here to capture every precious detail with our signature style and cultural sensitivity.
//           </p>
//           <div className="flex flex-wrap justify-center gap-3 text-sm">
//             {['✨ Free Consultation', '📸 Custom Packages', '🎯 Cultural Expertise', '💫 Premium Quality'].map((label) => (
//               <span
//                 key={label}
//                 className="bg-[#D4AF37]/10 text-[#8D6E63] px-4 py-2 rounded-full border border-[#D4AF37]/20"
//               >
//                 {label}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Helper component for contact info items
// function InfoCard({ icon, title, value }) {
//   return (
//     <div className="flex items-start gap-4 p-4 bg-[#F8F8F8] rounded-xl">
//       <div className="text-[#D4AF37] w-6 h-6 flex-shrink-0 mt-1">{icon}</div>
//       <div>
//         <h4 className="font-semibold text-[#4E342E]">{title}</h4>
//         <p className="text-[#8D6E63] whitespace-pre-line text-sm">{value}</p>
//       </div>
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   User,
//   MessageSquare,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Heart,
//   Star
// } from 'lucide-react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 px-4 bg-gradient-to-br from-rose-50 via-lavender-50 to-sky-50 relative overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 25%, #ecfdf5 50%, #f0f9ff 75%, #fef3c7 100%)'
//       }}
//     >
//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 blur-xl"
//         />
//         <motion.div
//           animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/30 to-teal-200/30 blur-xl"
//         />
//         <motion.div
//           animate={{ y: [-20, 20, -20] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-green-200/40 to-yellow-200/40 blur-lg"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-200/50 shadow-lg"
//           >
//             <Heart className="w-5 h-5 text-pink-400" />
//             <span className="text-slate-600 font-medium">Let's Connect</span>
//             <Heart className="w-5 h-5 text-pink-400" />
//           </motion.div>
          
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
//             Get In Touch
//           </h2>
//           <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Ready to capture your special moments? Let's discuss your photography needs and create something beautiful together.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Form Card */}
//             <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 relative overflow-hidden">
//               {/* Card Background Pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50 rounded-3xl" />
              
//               <div className="relative z-10">
//                 <div className="mb-8">
//                   <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3 flex items-center gap-3">
//                     <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
//                     Send us a Message
//                   </h3>
//                   <p className="text-slate-600 text-lg">
//                     Fill out the form below and we'll get back to you within 24 hours.
//                   </p>
//                 </div>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <motion.div 
//                     whileHover={{ scale: 1.02 }}
//                     className="relative group"
//                   >
//                     <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400 group-hover:text-purple-400 transition-colors duration-300" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Your Full Name"
//                       required
//                       className="w-full pl-14 pr-6 py-5 border-2 border-purple-200/50 rounded-2xl focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-200/30 bg-white/80 text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-purple-300"
//                     />
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02 }}
//                     className="relative group"
//                   >
//                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400 group-hover:text-purple-400 transition-colors duration-300" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Your Email Address"
//                       required
//                       className="w-full pl-14 pr-6 py-5 border-2 border-purple-200/50 rounded-2xl focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-200/30 bg-white/80 text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-purple-300"
//                     />
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02 }}
//                     className="relative group"
//                   >
//                     <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400 group-hover:text-purple-400 transition-colors duration-300" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="Your Phone Number"
//                       required
//                       className="w-full pl-14 pr-6 py-5 border-2 border-purple-200/50 rounded-2xl focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-200/30 bg-white/80 text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-purple-300"
//                     />
//                   </motion.div>

//                   <motion.div whileHover={{ scale: 1.02 }}>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-6 py-5 border-2 border-purple-200/50 rounded-2xl focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-200/30 bg-white/80 text-slate-700 transition-all duration-300 hover:border-purple-300"
//                     >
//                       <option value="">Select Photography Service</option>
//                       <option value="dhoti-ceremony">Dhoti Ceremony</option>
//                       <option value="naming-ceremony">Naming Ceremony</option>
//                       <option value="family-portraits">Family Portraits</option>
//                       <option value="outdoor-sessions">Outdoor Sessions</option>
//                       <option value="custom-package">Custom Package</option>
//                     </select>
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02 }}
//                     className="relative group"
//                   >
//                     <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-pink-400 group-hover:text-purple-400 transition-colors duration-300" />
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Tell us about your event and photography needs..."
//                       rows="6"
//                       required
//                       className="w-full pl-14 pr-6 py-5 border-2 border-purple-200/50 rounded-2xl focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-200/30 bg-white/80 text-slate-700 placeholder-slate-400 resize-none transition-all duration-300 hover:border-purple-300"
//                     ></textarea>
//                   </motion.div>

//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.03, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-pink-200/50"
//                   >
//                     <Send className="w-5 h-5" />
//                     Send Message
//                     <motion.div
//                       animate={{ rotate: [0, 10, -10, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       ✨
//                     </motion.div>
//                   </motion.button>
//                 </form>
//               </div>
//             </div>

//             {/* Social Section */}
//             <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50 rounded-3xl" />
              
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-green-400" />
//                   Connect With Us
//                 </h3>
                
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                   {/* Instagram */}
//                   <motion.a
//                     href="https://instagram.com"
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex flex-col items-center p-5 bg-white/80 rounded-2xl hover:bg-gradient-to-br hover:from-pink-300/80 hover:to-orange-300/80 hover:text-white transition-all duration-300 group shadow-lg border border-pink-200/50"
//                   >
//                     <Instagram className="w-8 h-8 text-pink-400 group-hover:text-white mb-2 transition-colors duration-300" />
//                     <span className="text-sm font-medium text-slate-600 group-hover:text-white">Instagram</span>
//                   </motion.a>

//                   {/* Facebook */}
//                   <motion.a
//                     href="https://facebook.com"
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex flex-col items-center p-5 bg-white/80 rounded-2xl hover:bg-gradient-to-br hover:from-blue-300/80 hover:to-indigo-300/80 hover:text-white transition-all duration-300 group shadow-lg border border-blue-200/50"
//                   >
//                     <Facebook className="w-8 h-8 text-blue-400 group-hover:text-white mb-2 transition-colors duration-300" />
//                     <span className="text-sm font-medium text-slate-600 group-hover:text-white">Facebook</span>
//                   </motion.a>

//                   {/* WhatsApp */}
//                   <motion.a
//                     href="https://wa.me/441234567890"
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex flex-col items-center p-5 bg-white/80 rounded-2xl hover:bg-gradient-to-br hover:from-green-300/80 hover:to-emerald-300/80 hover:text-white transition-all duration-300 group shadow-lg border border-green-200/50"
//                   >
//                     <MessageCircle className="w-8 h-8 text-green-400 group-hover:text-white mb-2 transition-colors duration-300" />
//                     <span className="text-sm font-medium text-slate-600 group-hover:text-white">WhatsApp</span>
//                   </motion.a>

//                   {/* Call */}
//                   <motion.a
//                     href="tel:+441234567890"
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex flex-col items-center p-5 bg-white/80 rounded-2xl hover:bg-gradient-to-br hover:from-purple-300/80 hover:to-pink-300/80 hover:text-white transition-all duration-300 group shadow-lg border border-purple-200/50"
//                   >
//                     <Phone className="w-8 h-8 text-purple-400 group-hover:text-white mb-2 transition-colors duration-300" />
//                     <span className="text-sm font-medium text-slate-600 group-hover:text-white">Call Us</span>
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Info & Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Map Section */}
//             <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-teal-50/50 to-green-50/50 rounded-3xl" />
              
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-400" />
//                   Find Us
//                 </h3>
                
//                 <div className="w-full h-72 md:h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl overflow-hidden border-2 border-teal-200/50 shadow-lg">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5439058247586!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0MC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="rounded-2xl"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Contact Info */}
//             <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/50 to-red-50/50 rounded-3xl" />
              
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
//                   <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400" />
//                   Contact Details
//                 </h3>

//                 <div className="space-y-6">
//                   <motion.div 
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-center gap-5 p-5 bg-white/80 rounded-2xl shadow-lg border border-pink-200/50 hover:border-pink-300/60 transition-all duration-300"
//                   >
//                     <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-3 rounded-xl shadow-lg">
//                       <Phone className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-700 text-lg">Phone</h4>
//                       <p className="text-slate-600">+44 1234 567890</p>
//                     </div>
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-center gap-5 p-5 bg-white/80 rounded-2xl shadow-lg border border-blue-200/50 hover:border-blue-300/60 transition-all duration-300"
//                   >
//                     <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-3 rounded-xl shadow-lg">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-700 text-lg">Email</h4>
//                       <p className="text-slate-600">info@snapuphotos.co.uk</p>
//                     </div>
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-start gap-5 p-5 bg-white/80 rounded-2xl shadow-lg border border-green-200/50 hover:border-green-300/60 transition-all duration-300"
//                   >
//                     <div className="bg-gradient-to-br from-green-400 to-teal-400 p-3 rounded-xl shadow-lg">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-700 text-lg">Address</h4>
//                       <p className="text-slate-600">123 Photography Street<br />London, UK SW1A 1AA</p>
//                     </div>
//                   </motion.div>

//                   <motion.div 
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-start gap-5 p-5 bg-white/80 rounded-2xl shadow-lg border border-orange-200/50 hover:border-orange-300/60 transition-all duration-300"
//                   >
//                     <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-3 rounded-xl shadow-lg">
//                       <Clock className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-700 text-lg">Business Hours</h4>
//                       <div className="text-slate-600 space-y-1">
//                         <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
//                         <p>Saturday: 10:00 AM - 4:00 PM</p>
//                         <p>Sunday: By Appointment</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Footer CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-16 bg-white/60 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/50 shadow-2xl relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-yellow-50/50 rounded-3xl" />
          
//           <div className="relative z-10">
//             <motion.div
//               animate={{ rotate: [0, 5, -5, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="inline-block mb-6"
//             >
//               <Star className="w-12 h-12 text-yellow-400 mx-auto" />
//             </motion.div>
            
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
//               Ready to Book Your Session?
//             </h3>
            
//             <p className="text-slate-600 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
//               Don't wait for the perfect moment - let us help you create it. Whether it's a traditional ceremony or a modern celebration, we're here to capture every precious detail with our signature style and cultural sensitivity.
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-4">
//               {[
//                 { icon: '✨', text: 'Free Consultation', color: 'from-pink-300 to-rose-300' },
//                 { icon: '📸', text: 'Custom Packages', color: 'from-purple-300 to-indigo-300' },
//                 { icon: '🎯', text: 'Cultural Expertise', color: 'from-blue-300 to-teal-300' },
//                 { icon: '💫', text: 'Premium Quality', color: 'from-green-300 to-emerald-300' }
//               ].map((item, index) => (
//                 <motion.span
//                   key={item.text}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-medium shadow-lg border border-white/50 backdrop-blur-sm`}
//                 >
//                   {item.icon} {item.text}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  Star
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="ContactSection"
      className="py-20 px-4 relative overflow-hidden"
     style={{
  background: 'bg-[#FFF8E1]'
}}

    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-600/20 to-orange-600/20 blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-slate-600/20 to-blue-600/20 blur-xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-600/25 to-teal-600/25 blur-lg"
        />
      </div>

      <div className="mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-amber-400/30 shadow-lg"
          >
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="text-slate-700 font-medium">Let's Connect</span>
            <Heart className="w-5 h-5 text-amber-600" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Let's discuss your photography needs and create something beautiful together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/60 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-amber-50/60 to-slate-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600" />
                    Send us a Message
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address"
                      required
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 transition-all duration-300 hover:border-stone-400"
                    >
                      <option value="">Select Photography Service</option>
                      <option value="dhoti-ceremony">Dhoti Ceremony</option>
                      <option value="naming-ceremony">Naming Ceremony</option>
                      <option value="family-portraits">Family Portraits</option>
                      <option value="outdoor-sessions">Outdoor Sessions</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event and photography needs..."
                      rows="6"
                      required
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 resize-none transition-all duration-300 hover:border-stone-400"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-amber-300/30"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-stone-50/60 to-blue-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-600 to-blue-600" />
                  Connect With Us
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Instagram</span>
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://facebook.com"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Facebook className="w-8 h-8 text-blue-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Facebook</span>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/441234567890"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">WhatsApp</span>
                  </motion.a>

                  {/* Call */}
                  <motion.a
                    href="tel:+441234567890"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-slate-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Phone className="w-8 h-8 text-slate-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Call Us</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Section */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-slate-50/60 to-teal-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600" />
                  Find Us
                </h3>
                
                <div className="w-full h-72 md:h-80 bg-gradient-to-br from-slate-100 to-stone-100 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5439058247586!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0MC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-stone-50/60 to-orange-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600" />
                  Contact Details
                </h3>

                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-3 rounded-xl shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Phone</h4>
                      <p className="text-slate-600">+44 1234 567890</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Email</h4>
                      <p className="text-slate-600">info@snapuphotos.co.uk</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Address</h4>
                      <p className="text-slate-600">123 Photography Street<br />London, UK SW1A 1AA</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-xl shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Business Hours</h4>
                      <div className="text-slate-600 space-y-1">
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/60 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-amber-50/60 to-slate-50/80 rounded-3xl" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Star className="w-12 h-12 text-amber-600 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
              Ready to Book Your Session?
            </h3>
            
            <p className="text-slate-600 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              Don't wait for the perfect moment - let us help you create it. Whether it's a traditional ceremony or a modern celebration, we're here to capture every precious detail with our signature style and cultural sensitivity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '✨', text: 'Free Consultation', color: 'from-amber-600 to-orange-600' },
                { icon: '📸', text: 'Custom Packages', color: 'from-slate-600 to-blue-600' },
                { icon: '🎯', text: 'Cultural Expertise', color: 'from-teal-600 to-emerald-600' },
                { icon: '💫', text: 'Premium Quality', color: 'from-orange-600 to-red-600' }
              ].map((item, index) => (
                <motion.span
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-medium shadow-lg border border-white/20 backdrop-blur-sm`}
                >
                  {item.icon} {item.text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



