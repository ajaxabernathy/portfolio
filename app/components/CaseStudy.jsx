import Image from "next/image";
import Button from "./Button";

const studies = [
  {
    title: "SYLVAIN Impact Report 2025",
    about: "About",
    link: "https://impact.sylvain.co/2025",
    img: "/sylvain.jpg",
  },
  {
    title: "xumo.com",
    about: "About",
    link: "https://xumo.com",
    img: "/xumo.jpg",
  },
  {
    title: "NAF Health Benefits",
    about: "About",
    link: "https://nafhealthplans.com",
    img: "/dod.jpg",
  },
  {
    title: "HeadFirst from Philadelphia Union",
    about: "About",
    link: "https://myheadfirst.org",
    img: "/puf.jpg",
  },
  {
    title: "Peacock Summer Olympics Coverage 2024",
    about: "About",
    link: "https://peacock-olympics.vercel.app/",
    img: "/peacock.jpg",
  },
  {
    title: "Comcast Business Brand Hub",
    about: "About",
    link: "https://cbbrandguidelines.com",
    img: "/cbbh.jpg",
  },
  {
    title: "Xfinity Brand Hub",
    about: "About",
    link: "https://brand.xfinity.com/",
    img: "/xbh.jpg",
  },
];

const CaseStudy = () => {
  return (
    <section className="site-grid-container content-wrapper body text-white w-full pt-[14rem]">
      <h2 className="heading-serif col-span-6">Work</h2>
      <div className="col-span-6 grid grid-cols-2 gap-8">
        {studies.map((study, i) => (
          <div
            key={"case_study_" + i}
            className="mb-24 flex flex-col gap-8 min-h-[]"
          >
            <p className="uppercase -mb-4">[{`0${i + 1}`}]</p>
            <div className="w-[80%]">
              <Image
                src={study.img}
                alt={study.title}
                width={500}
                height={282}
                className="shadow-lg"
              />
            </div>
            <p>{study.title}</p>
            <p>{study.about}</p>
            <Button label="Live Site" href={study.link} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;

// const CaseStudy = () => {
//   return (
//     <section className="content-wrapper text-white w-full pt-[145px]">
//       <h2 className="heading-serif">Work</h2>

//       <div className="site-grid-container body">
//         {/* 1–2 Left */}
//         <div className="col-span-7 flex">
//           <div className="w-1/2 pr-4">
//             <div className="flex flex-col gap-8 mb-24">
//               <p className="uppercase -mb-4">[01]</p>
//               <div className="max-w-[400px]">
//                 <Image
//                   src="/sylvain.jpg"
//                   alt="SYLVAIN Impact Report 2025"
//                   width={500}
//                   height={282}
//                 />
//               </div>
//               <p>SYLVAIN Impact Report 2025</p>
//               <p>About</p>
//               <Button label="Live Site" href="https://impact.sylvain.co/2025" />
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="flex flex-col gap-8 mb-24">
//               <p className="uppercase -mb-4">[02]</p>
//               <div className="max-w-[400px]">
//                 <Image
//                   src="/xumo.jpg"
//                   alt="xumo.com"
//                   width={500}
//                   height={282}
//                 />
//               </div>
//               <p>xumo.com</p>
//               <p>About</p>
//               <Button label="Live Site" href="https://xumo.com" />
//             </div>
//           </div>
//         </div>

//         {/* 3 Right */}
//         <div className="col-span-4 pr-8">
//           <div className="flex flex-col gap-8 mb-24">
//             <p className="uppercase -mb-4">[03]</p>
//             <div className="max-w-[400px]">
//               <Image
//                 src="/dod.jpg"
//                 alt="NAF Health Benefits"
//                 width={500}
//                 height={282}
//               />
//             </div>
//             <p>NAF Health Benefits</p>
//             <p>About</p>
//             <Button label="Live Site" href="https://nafhealthplans.com" />
//           </div>
//         </div>

//         {/* 4–5 Left */}
//         <div className="col-span-7 flex">
//           <div className="w-1/2 pr-4">
//             <div className="flex flex-col gap-8 mb-24">
//               <p className="uppercase -mb-4">[04]</p>
//               <div className="max-w-[400px]">
//                 <Image
//                   src="/puf.jpg"
//                   alt="HeadFirst from Philadelphia Union"
//                   width={500}
//                   height={282}
//                 />
//               </div>
//               <p>HeadFirst from Philadelphia Union</p>
//               <p>About</p>
//               <Button label="Live Site" href="https://myheadfirst.org" />
//             </div>
//           </div>
//           <div className="w-1/2">
//             <div className="flex flex-col gap-8 mb-24">
//               <p className="uppercase -mb-4">[05]</p>
//               <div className="max-w-[400px]">
//                 <Image
//                   src="/peacock.jpg"
//                   alt="Peacock Summer Olympics Coverage 2024"
//                   width={500}
//                   height={282}
//                 />
//               </div>
//               <p>Peacock Summer Olympics Coverage 2024</p>
//               <p>About</p>
//               <Button
//                 label="Live Site"
//                 href="https://peacock-olympics.vercel.app/"
//               />
//             </div>
//           </div>
//         </div>

//         {/* 6 Right */}
//         <div className="col-span-4 pr-8">
//           <div className="flex flex-col gap-8 mb-24">
//             <p className="uppercase -mb-4">[06]</p>
//             <div className="max-w-[400px]">
//               <Image
//                 src="/cbbh.jpg"
//                 alt="Comcast Business Brand Hub"
//                 width={500}
//                 height={282}
//               />
//             </div>
//             <p>Comcast Business Brand Hub</p>
//             <p>About</p>
//             <Button label="Live Site" href="https://cbbrandguidelines.com" />
//           </div>
//         </div>

//         {/* 7 Left (final single column) */}
//         <div className="col-span-7 flex">
//           <div className="w-1/2 pr-4">
//             <div className="flex flex-col gap-8 mb-24">
//               <p className="uppercase -mb-4">[07]</p>
//               <div className="max-w-[400px]">
//                 <Image
//                   src="/xbh.jpg"
//                   alt="Xfinity Brand Hub"
//                   width={500}
//                   height={282}
//                 />
//               </div>
//               <p>Xfinity Brand Hub</p>
//               <p>About</p>
//               <Button label="Live Site" href="https://brand.xfinity.com/" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudy;
