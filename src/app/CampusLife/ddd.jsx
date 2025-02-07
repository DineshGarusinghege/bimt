// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import MainHeader from '../ui/MainHeader';
// // import AnnounsmentBar from '../ui/AnnounsmentBar';
// import { useState } from "react";
// export default function CampusLife() {


//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSection = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);

//   const toggleGallery = () => {
//     setIsGalleryExpanded(!isGalleryExpanded);
//   };


//   const [isGalleryExpanded1, setIsGalleryExpanded1] = useState(false);

//   const toggleGallery1 = () => {
//     setIsGalleryExpanded1(!isGalleryExpanded1);
//   };

//   const [isGalleryExpanded2, setIsGalleryExpanded2] = useState(false);

//   const toggleGallery2 = () => {
//     setIsGalleryExpanded2(!isGalleryExpanded2);
//   };

//   const [isGalleryExpanded3, setIsGalleryExpanded3] = useState(false);

//   const toggleGallery3 = () => {
//     setIsGalleryExpanded3(!isGalleryExpanded3);
//   };


//   return (
//     <>

//       <head>
//         <title>Campus Life | BIMT Campus</title>
//         <meta
//           name="description"
//           content="Campus life at BIMT is vibrant, inclusive, and enriching, offering students a perfect blend of academics, extracurricular activities, and personal growth opportunities. From state-of-the-art facilities to engaging events and clubs, BIMT provides a dynamic environment where students can learn, connect, and thrive."
//         />
//       </head>

//       <MainHeader />
//       {/* <AnnounsmentBar /> */}


//       {/* Here section */}
//       <div className="relative bg-cover bg-center h-[480px] z-0" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
//         {/* Overlay for better text visibility */}
//         {/* <div className="absolute inset-0 bg-[#272A5DB2] opacity-[70%] z-10"></div> */}

//         <div className='relative max-w-[1430px] mx-auto top-[55px]'>
//           {/* Breadcrumb Section */}
//           <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20">
//             <nav
//               className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
//               style={{
//                 display: 'inline-flex',
//                 padding: '5px 25px',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 gap: '10px',
//                 background: '#ffffff45',
//               }}
//             >
//               <ol className="flex space-x-2">
//                 <li>
//                   <Link
//                     href="/"
//                     className="hover:underline hover:text-blue-500"
//                     style={{
//                       color: '#fff',
//                       fontFamily: 'Avenir LT Std',
//                       fontSize: '16px',
//                       fontStyle: 'normal',
//                       fontWeight: '600',
//                       lineHeight: 'normal',
//                     }}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <span className="text-gray-400">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="15"
//                     height="15"
//                     viewBox="0 0 15 15"
//                     fill="none"
//                   >
//                     <path
//                       d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </span>
//                 <li>
//                   <Link
//                     href="/ContactUs"
//                     className="hover:underline hover:text-blue-500"
//                     style={{
//                       color: '#fff',
//                       fontFamily: 'Avenir LT Std',
//                       fontSize: '16px',
//                       fontStyle: 'normal',
//                       fontWeight: '600',
//                       lineHeight: 'normal',
//                     }}
//                   >
//                     Contact Us
//                   </Link>
//                 </li>

//                 <span className="text-gray-400">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="15"
//                     height="15"
//                     viewBox="0 0 15 15"
//                     fill="none"
//                   >
//                     <path
//                       d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </span>
//                 <li>
//                   <span
//                     className="text-gray-600"
//                     style={{
//                       color: '#fff',
//                       fontFamily: 'Avenir LT Std',
//                       fontSize: '16px',
//                       fontStyle: 'normal',
//                       fontWeight: '600',
//                       lineHeight: 'normal',
//                     }}
//                   >
//                     Students Blogs
//                   </span>
//                 </li>
//               </ol>
//             </nav>
//           </div>
//         </div>

//       </div>


//       <div
//         className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#13218F] to-[rgba(101,90,173,0.8)] flex items-center gap-[40px] px-[30px] py-[20px] p-[20px]"
//         style={{ marginTop: "50px" }}
//       >
//         {/* Left Side Image */}
//         <div className="w-[300px] h-[200px]">
//           <Image
//             src="/images/6-1 1 (7).png"
//             alt="Facilities"
//             width={300}
//             height={200}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Text */}
//         <div
//           className="flex flex-col gap-[20px] flex-grow"
//           style={{ width: "800px" }}
//         >
//           {/* Facilities Heading */}
//           <h2
//             className="text-white font-bold text-[24px] leading-[53px]"
//             style={{
//               color: "#fff",
//               fontSize: "40px",
//               fontFamily: "Avenir LT Std",
//               fontStyle: "normal",
//               fontWeight: "600",
//               lineHeight: "53px",
//             }}
//           >
//             GRADUATION
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-white text-[16px] leading-[18.77px] text-justify"
//             style={{
//               fontFamily: "Work Sans",
//               textUnderlinePosition: "from-font",
//               textDecorationSkipInk: "none",
//             }}
//           >
//             Our BIMT Campus annual graduation ceremony is a day devoted to
//             celebrate an important point in our students’ lives. Examinations
//             are finally over, scruffiness is replaced with fancy clothes and
//             parents admire their children for reaching the finishing line of a
//             long marathon. The future of BIMT past pupil always seems more
//             promising than the present, and the present on graduation day is
//             pretty good even if it is not quite the reality.
//           </p>
//         </div>

//         {/* Right Side Red Border with SVG */}
//         <div
//           className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
//           onClick={toggleSection}
//         >
//           <Image
//             src={isExpanded ? "/images/down-arrow-svgrepo-com (1).svg" : "/images/uparrow.png"}
//             alt="Toggle Arrow"
//             width={30}
//             height={20}
//           />
//         </div>
//       </div>

//       {/* Hidden/Visible Section */}
//       {isExpanded && (
//         <div
//           className="relative w-[1300px] h-[998px] mx-auto bg-opacity-25 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/images/1-2 1.png")',
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-25"></div>

//           {/* Grid Layout */}
//           <div
//             className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
//             style={{ background: "#ffffff8f" }}
//           >
//             <div
//               className="grid grid-cols-2 gap-5"
//               style={{
//                 width: "100%",
//                 padding: "0",
//               }}
//             >
//               {/* First Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/2-4 2.png"
//                   alt="Graduation Image 1"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/1-2 1.png"
//                   alt="Graduation Image 2"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Second Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/3 2.png"
//                   alt="Graduation Image 3"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/6-1 1 (1).png"
//                   alt="Graduation Image 4"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}





//       {/* Banner Section 02 */}
//       {/* Facilities Banner Section */}
//       <div
//         className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#7323BF] to-[rgba(150,3,80,0.8)] flex items-center gap-[40px] px-[30px] py-[20px]"
//         style={{ marginTop: "35px" }}
//       >
//         {/* Left Side Image */}
//         <div className="w-[300px] h-[200px]">
//           <Image
//             src="/images/6-1 1.png"
//             alt="Facilities"
//             width={300}
//             height={200}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Text */}
//         <div
//           className="flex flex-col gap-[20px] flex-grow"
//           style={{ width: "800px" }}
//         >
//           {/* Facilities Heading */}
//           <h2
//             className="text-white font-bold text-[24px] leading-[53px]"
//             style={{
//               color: "#fff",
//               fontSize: "40px",
//               fontFamily: "Avenir LT Std",
//               fontStyle: "normal",
//               fontWeight: "600",
//               lineHeight: "53px",
//             }}
//           >
//             FACILITIES
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-white text-[16px] leading-[18.77px] text-justify"
//             style={{
//               fontFamily: "Work Sans",
//               textUnderlinePosition: "from-font",
//               textDecorationSkipInk: "none",
//             }}
//           >
//             We strive to provide the best possible facilities to enable our
//             students to benefit from a modern learning environment and enjoy
//             their educational experience. We offer adequate facilities suitable
//             for the specific subject areas taught with students’ comfort and
//             welfare in mind. These include the following,
//           </p>
//         </div>

//         {/* Right Side Red Border with Arrow */}
//         <div
//           className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
//           onClick={toggleGallery}
//         >
//           <Image
//             src={
//               isGalleryExpanded ? "/images/down-arrow-svgrepo-com (1).svg" : "/images/uparrow.png"
//             }
//             alt="Toggle Arrow"
//             width={30}
//             height={20}
//           />
//         </div>
//       </div>

//       {/* Gallery Section */}
//       {isGalleryExpanded && (
//         <div
//           className="relative w-[1300px] h-[998px] mx-auto bg-opacity-25 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/images/1-2 1.png")',
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-25"></div>

//           {/* Grid Layout */}
//           <div
//             className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
//             style={{ background: "#ffffff8f" }}
//           >
//             <div
//               className="grid grid-cols-2 gap-5"
//               style={{
//                 width: "100%",
//                 padding: "0",
//               }}
//             >
//               {/* First Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/2-4 2.png"
//                   alt="Graduation Image 1"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/1-2 1.png"
//                   alt="Graduation Image 2"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Second Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/3 2.png"
//                   alt="Graduation Image 3"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/6-1 1 (1).png"
//                   alt="Graduation Image 4"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}


//       {/* Banner Section 03 */}

//       <div
//         className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#20808F] to-[rgba(14,76,166,0.8)] flex items-center gap-[40px] px-[30px] py-[20px] p-[20px]"
//         style={{ marginTop: '35px' }}
//       >
//         {/* Left Side Image */}
//         <div className="w-[300px] h-[200px]">
//           <Image
//             src="/images/6-1 1 (8).png"
//             alt="Facilities"
//             width={300}
//             height={200}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Text */}
//         <div className="flex flex-col gap-[20px] flex-grow" style={{ width: '800px' }}>
//           {/* Facilities Heading */}
//           <h2 className="text-white font-bold text-[24px] leading-[53px]"
//             style={{
//               color: '#fff',
//               fontSize: '40px',
//               fontFamily: 'Avenir LT Std',
//               fontStyle: 'normal',
//               fontWeight: '600',
//               lineHeight: "53px"
//             }}
//           >
//             CRICKET TOURNAMENT
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-white text-[16px] leading-[18.77px] text-justify"
//             style={{
//               fontFamily: 'Work Sans',
//               textUnderlinePosition: 'from-font',
//               textDecorationSkipInk: 'none',
//             }}
//           >
//             BIMT cricket tournament was well-organized by Alumni Association of BIMT Campus. This game proved a true leadership and team sprit throughout the whole day of the matches. Main theme of the cricket tournament was to build a Positive behavior that make cricket an exciting game that encourages leadership, friendship, and teamwork.
//           </p>
//         </div>

//         {/* Right Side Red Border with SVG */}
//         <div className="w-[40px] h-[240px] flex items-center justify-center"
//           onClick={toggleGallery1}
//         >
//           <Image
//             src={
//               isGalleryExpanded1 ? "/images/down-arrow-svgrepo-com (1).svg" : "/images/uparrow.png"
//             }
//             alt="Facilities"
//             width={30}
//             height={20}
//           />

//         </div>
//       </div>

//       {/* Gallery Section */}
//       {isGalleryExpanded1 && (
//         <div
//           className="relative w-[1300px] h-[998px] mx-auto bg-opacity-25 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/images/1-2 1.png")',
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-25"></div>

//           {/* Grid Layout */}
//           <div
//             className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
//             style={{ background: "#ffffff8f" }}
//           >
//             <div
//               className="grid grid-cols-2 gap-5"
//               style={{
//                 width: "100%",
//                 padding: "0",
//               }}
//             >
//               {/* First Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/2-4 2.png"
//                   alt="Graduation Image 1"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/1-2 1.png"
//                   alt="Graduation Image 2"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Second Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/3 2.png"
//                   alt="Graduation Image 3"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/6-1 1 (1).png"
//                   alt="Graduation Image 4"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}



//       {/* Banner Section 04 */}

//       <div
//         className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#A96702] to-[#5A5111] flex items-center gap-[40px] px-[30px] py-[20px] p-[20px]"
//         style={{ marginTop: '35px' }}
//       >
//         {/* Left Side Image */}
//         <div className="w-[300px] h-[200px]">
//           <Image
//             src="/images/6-1 1 (9).png"
//             alt="Facilities"
//             width={300}
//             height={200}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Text */}
//         <div className="flex flex-col gap-[20px] flex-grow" style={{ width: '800px' }}>
//           {/* Facilities Heading */}
//           <h2 className="text-white font-bold text-[24px] leading-[53px]"
//             style={{
//               color: '#fff',
//               fontSize: '40px',
//               fontFamily: 'Avenir LT Std',
//               fontStyle: 'normal',
//               fontWeight: '600',
//               lineHeight: "53px"
//             }}
//           >
//             CAMPING NIGHT - KABARAGALA
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-white text-[16px] leading-[18.77px] text-justify"
//             style={{
//               fontFamily: 'Work Sans',
//               textUnderlinePosition: 'from-font',
//               textDecorationSkipInk: 'none',
//             }}
//           >
//             This Camping Night was organized to build the confidence of our students to dream big and to make them such people who are driver, to achieve their dreams.
//           </p>
//         </div>

//         {/* Right Side Red Border with SVG */}
//         <div className="w-[40px] h-[240px] flex items-center justify-center"
//           onClick={toggleGallery2}
//         >
//           <Image
//             src={
//               isGalleryExpanded2 ? "/images/down-arrow-svgrepo-com (1).svg" : "/images/uparrow.png"
//             }
//             alt="Facilities"
//             width={30}
//             height={20}
//           />

//         </div>
//       </div>

//       {/* Gallery Section */}
//       {isGalleryExpanded2 && (
//         <div
//           className="relative w-[1300px] h-[998px] mx-auto bg-opacity-25 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/images/1-2 1.png")',
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-25"></div>

//           {/* Grid Layout */}
//           <div
//             className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
//             style={{ background: "#ffffff8f" }}
//           >
//             <div
//               className="grid grid-cols-2 gap-5"
//               style={{
//                 width: "100%",
//                 padding: "0",
//               }}
//             >
//               {/* First Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/2-4 2.png"
//                   alt="Graduation Image 1"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/1-2 1.png"
//                   alt="Graduation Image 2"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Second Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/3 2.png"
//                   alt="Graduation Image 3"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/6-1 1 (1).png"
//                   alt="Graduation Image 4"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}



//       {/* Banner Section 05 */}

//       <div
//         className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#3B8144] to-[rgba(6,56,3,0.8)] flex items-center gap-[40px] px-[30px] py-[20px] p-[20px]"
//         style={{ marginTop: '35px', marginBottom: '50px' }}
//       >
//         {/* Left Side Image */}
//         <div className="w-[300px] h-[200px]">
//           <Image
//             src="/images/6-1 1 (10).png"
//             alt="Facilities"
//             width={300}
//             height={200}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Text */}
//         <div className="flex flex-col gap-[20px] flex-grow" style={{ width: '800px' }}>
//           {/* Facilities Heading */}
//           <h2 className="text-white font-bold text-[24px] leading-[53px]"
//             style={{
//               color: '#fff',
//               fontSize: '40px',
//               fontFamily: 'Avenir LT Std',
//               fontStyle: 'normal',
//               fontWeight: '600',
//               lineHeight: "53px"
//             }}
//           >
//             ADVENTURE TRIP - KITHULGALA
//           </h2>

//           {/* Paragraph */}
//           <p
//             className="text-white text-[16px] leading-[18.77px] text-justify"
//             style={{
//               fontFamily: 'Work Sans',
//               textUnderlinePosition: 'from-font',
//               textDecorationSkipInk: 'none',
//             }}
//           >
//             This “Adventure Trip 2022” was organized to enhance the confident level of our students to dream big and to make them such people who are driven to achieve their dream.
//           </p>
//         </div>

//         {/* Right Side Red Border with SVG */}
//         <div className="w-[40px] h-[240px] flex items-center justify-center"
//           onClick={toggleGallery3}
//         >

//           <Image
//             src={
//               isGalleryExpanded3 ? "/images/down-arrow-svgrepo-com (1).svg" : "/images/uparrow.png"
//             }
//             alt="Facilities"
//             width={30}
//             height={20}
//           />

//         </div>
//       </div>

//       {/* Gallery Section */}
//       {isGalleryExpanded3 && (
//         <div
//           className="relative w-[1300px] h-[998px] mx-auto bg-opacity-25 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/images/1-2 1.png")',
//           }}
//         >
//           <div className="absolute inset-0 bg-white bg-opacity-25"></div>

//           {/* Grid Layout */}
//           <div
//             className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
//             style={{ background: "#ffffff8f" }}
//           >
//             <div
//               className="grid grid-cols-2 gap-5"
//               style={{
//                 width: "100%",
//                 padding: "0",
//               }}
//             >
//               {/* First Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/2-4 2.png"
//                   alt="Graduation Image 1"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/1-2 1.png"
//                   alt="Graduation Image 2"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Second Row - Two Cards */}
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "0",
//                 }}
//               >
//                 <Image
//                   src="/images/3 2.png"
//                   alt="Graduation Image 3"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div
//                 className="w-[625px] h-[416.67px] bg-white shadow-lg overflow-hidden"
//                 style={{
//                   marginLeft: "15px",
//                 }}
//               >
//                 <Image
//                   src="/images/6-1 1 (1).png"
//                   alt="Graduation Image 4"
//                   width={625}
//                   height={416.67}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
