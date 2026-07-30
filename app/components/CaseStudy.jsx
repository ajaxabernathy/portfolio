"use client";

import Image from "next/image";
import Button from "./Button";
import Cat from "./svg/Cat";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CatRender from "./Cat";

const studies = [
  {
    title: "YUME",
    description: "Next.js, Motion, Sanity",
    link: "https://sweetyume.com",
    img: "/yume.webp",
  },
  {
    title: "SYLVAIN Impact Report 2025",
    description: "React, CSS",
    link: "https://impact.sylvain.co/2025",
    img: "/sylvain.jpg",
  },
  {
    title: "MOD Worldwide",
    description: "Next.js, Tailwind, Motion",
    link: "https://modworldwide.com/",
    img: "/mod.webp",
  },
  {
    title: "Xumo",
    description: "Next.js, Motion, Directus, Oracle",
    link: "https://xumo.com",
    img: "/xumo.webp",
  },
];

const studiesSmall = [
  //   {
  //     title: "NAF Health Benefits",
  //     description: "Lead developer",
  //     link: "https://nafhealthplans.com",
  //     img: "/dod.jpg",
  //   },
  //   {
  //     title: "Peacock Olympics Coverage",
  //     about: "Lead developer",
  //     link: "https://peacock-olympics.vercel.app/",
  //     img: "/peacock.jpg",
  //   },
  //   {
  //     title: "Comcast Business Brand Hub",
  //     about: "Contributor",
  //     link: "https://cbbrandguidelines.com",
  //   },
  //   {
  //     title: "Xfinity Brand Hub",
  //     about: "Contributor",
  //     link: "https://brand.xfinity.com/",
  //   },
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
        <div className="col-span-12">
          <h2 className="heading mb-12 uppercase">Recent Work</h2>
          <button
            onClick={handleCat}
            className="absolute right-16 grid-break:left-48 -top-32 grid-break:-top-72 size-24 grid-break:size-32 cursor-pointer"
          >
            <div className="rotate-12" ref={catRef}>
              <Cat />
            </div>
            {/* <p className="text-green font-serif uppercase mt-2">Cat!</p> */}
          </button>
        </div>
        <div className="col-span-12 grid grid-break:grid-cols-2 gap-6 mb-24">
          {studies.map((study, i) => (
            <div
              key={"case_study_" + i}
              className="mb-16 md:mb-24 flex flex-col"
            >
              <p className="mb-6">[{`0${i + 1}`}]</p>
              <div className="w-full aspect-[16/10] relative mb-6">
                <Image
                  src={study.img}
                  alt={study.title}
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
              <div className="flex w-full justify-between">
                <div>
                  <p className="">{study.title}</p>
                  <p className="pt-4 font-light">{study.description}</p>
                </div>
                <Button label="Live Site" href={study.link} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full col-span-12 grid md:grid-cols-4 gap-6">
          {studiesSmall.map((study, i) => (
            <div
              key={"case_study_" + i}
              className="mb-16 md:mb-24 flex flex-col gap-8 col-span-1"
            >
              <p className="uppercase">[{`0${i + 5}`}]</p>
              <div className=""></div>
              <p className="mb-2">{study.title}</p>
              <p className="mb-2">{study.description}</p>
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
