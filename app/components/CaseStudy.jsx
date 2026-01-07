"use client";

import Image from "next/image";
import Button from "./Button";
import Cat from "./svg/Cat";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CatRender from "./Cat";

const studies = [
  {
    title: "SYLVAIN Impact Report 2025",
    about: "Contributor",
    link: "https://impact.sylvain.co/2025",
    img: "/sylvain.jpg",
  },
  {
    title: "MOD Worldwide",
    about: "Contributor",
    link: "https://modworldwide.com/",
    img: "/mod.jpg",
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
    title: "Peacock Olympics Coverage",
    about: "Lead developer",
    link: "https://peacock-olympics.vercel.app/",
    img: "/peacock.jpg",
  },
  {
    title: "HeadFirst from Philadelphia Union",
    about: "Lead developer",
    link: "https://myheadfirst.org",
    img: "/puf.jpg",
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
  const [showCat, setShowCat] = useState(false);

  const catRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3, paused: false });

    tl.to(catRef.current, {
      rotate: 5,
      duration: 0.1,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
      transformOrigin: "center center",
    });
  }, []);

  function handleCat() {
    setShowCat((prev) => !prev);
  }

  return (
    <section className="relative w-full content-wrapper mt-[8rem] md:mt-[14rem]">
      <div className="site-grid-container body text-white">
        <div className="col-span-6">
          <h2 className="heading-serif">Work</h2>
          <button
            onClick={handleCat}
            className="absolute grid-break:static right-16 -top-32 grid-break:m-[12rem] size-24 md:size-32 cursor-pointer"
          >
            <div
              className="rotate-12 hover:shadow-lg shadow-green"
              ref={catRef}
            >
              <Cat />
            </div>
            <p className="text-green font-serif uppercase mt-2">Cat!</p>
          </button>
        </div>
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
              <p className="-mt-4">{study.title}</p>
              <Button label="Live Site" href={study.link} />
            </div>
          ))}
        </div>
      </div>

      {showCat && (
        <div>
          <CatRender handleCat={handleCat} />
        </div>
      )}
    </section>
  );
};

export default CaseStudy;
