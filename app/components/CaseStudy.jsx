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
    title: "Xumo",
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
    link: "https://impact.sylvain.co/2025",
    img: "/puf.jpg",
  },
  {
    title: "Peacock Summer Olympics Coverage 2024",
    about: "About",
    link: "https://https://peacock-olympics.vercel.app/",
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
    link: "https://https://brand.xfinity.com/",
    img: "/xbh.jpg",
  },
];

const CaseStudy = () => {
  return (
    <section className="text-black w-full pt-[145px]">
      <div className="content-wrapper">
        {studies.map((study, i) => {
          return (
            <div key={"case_study_" + i} className="mb-24">
              <h3 className="heading-serif col-span-5">{study.title}</h3>
              <div className="site-grid-container">
                <div className="col-span-5">
                  <p className="mb-16">About</p>
                  <Button label={"Live Site"} href={study.link} />
                </div>

                <div className="col-span-7">
                  <div className="relative w-full h-auto">
                    <Image
                      src={study.img}
                      alt={study.title}
                      width={1000}
                      height={563}
                      //   className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudy;
