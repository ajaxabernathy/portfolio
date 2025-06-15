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
    <section className="text-black w-full pt-[145px]">
      <div className="content-wrapper">
        <h2 className="heading-serif">Work</h2>
      </div>

      <div className="site-grid-container content-wrapper body">
        {/* This matches col-span-7, like the left side of Skills & Services */}
        <div className="col-span-7 grid grid-cols-12">
          {studies.map((study, i) => (
            <div key={"case_study_" + i} className="col-span-6">
              <div className="flex flex-col gap-8 mb-24">
                <p className="uppercase -mb-4">[{`0${i + 1}`}]</p>

                <div className="relative w-[90%] h-auto">
                  <Image
                    src={study.img}
                    alt={study.title}
                    width={500}
                    height={282}
                  />
                </div>

                <p>{study.title}</p>
                <p>{study.about}</p>
                <Button label={"Live Site"} href={study.link} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty spacer or future content (to match col-span-5 in the original layout) */}
        {/* <div className="col-span-5"></div> */}
      </div>
    </section>
  );
};

export default CaseStudy;
