import Image from "next/image";
import Button from "./Button";

const studies = [
  {
    title: "SYLVAIN Impact Report 2025",
    about: "Contributor",
    link: "https://impact.sylvain.co/2025",
    img: "/sylvain.jpg",
  },
  {
    title: "Xumo.com",
    about: "Contributor",
    link: "https://xumo.com",
    img: "/xumo.jpg",
  },
  {
    title: "NAF Health Benefits",
    about: "Lead developer",
    link: "https://nafhealthplans.com",
    img: "/dod.jpg",
  },
  {
    title: "HeadFirst from Philadelphia Union",
    about: "Lead developer",
    link: "https://myheadfirst.org",
    img: "/puf.jpg",
  },
  {
    title: "Peacock Olympics Coverage",
    about: "Lead developer",
    link: "https://peacock-olympics.vercel.app/",
    img: "/peacock.jpg",
  },
  {
    title: "Comcast Business Brand Hub",
    about: "Contributor",
    link: "https://cbbrandguidelines.com",
    img: "/cbbh.jpg",
  },
  {
    title: "Xfinity Brand Hub",
    about: "Contributor",
    link: "https://brand.xfinity.com/",
    img: "/xbh.jpg",
  },
];

const CaseStudy = () => {
  return (
    <section className="site-grid-container content-wrapper body text-white w-full mt-[8rem] md:mt-[14rem]">
      <h2 className="heading-serif col-span-6">Work</h2>
      <div className="col-span-6 grid md:grid-cols-2">
        {studies.map((study, i) => (
          <div
            key={"case_study_" + i}
            className="mb-16 md:mb-24 flex flex-col gap-8 mr-0 md:mr-4 grid-break:mr-0"
          >
            <p className="uppercase -mb-4">[{`0${i + 1}`}]</p>
            <div className="w-full grid-break:w-[80%]">
              <Image
                src={study.img}
                alt={study.title}
                width={768}
                height={282}
                className="shadow-lg"
              />
            </div>
            <p>{study.title}</p>
            {/* <p className="font-light">{study.about}</p> */}
            <Button label="Live Site" href={study.link} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
