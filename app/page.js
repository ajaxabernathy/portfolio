import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="text-black uppercase pt-[145px]">
        <div className="site-grid-container content-wrapper body">
          <div className="col-span-7">
            <p className="mb-6 w-[70%]">
              Full stack software engineer building things for
              screens—balancing&nbsp;functionality and aesthetics with a bias
              toward simplicity.
              <br />I partner with designers to build thoughtful, brand-aligned
              websites&nbsp;that&nbsp;perform.
            </p>
            <p>
              Currently: Full Stack Developer at{" "}
              <a href="https://modworldwide.com">MOD</a>
            </p>
            <p>Available for: freelance</p>
          </div>
          <div className="col-span-5">
            <div className="flex">
              <div className="w-1/2 flex flex-col">
                <p className="mb-6">[Contact]</p>
                <p>(239) 404-9052</p>
                <a
                  href="mailto:ajaxabernathy@gmail.com"
                  className="lowercase mb-1"
                >
                  ajaxabernathy@gmail.com
                </a>
                <p>
                  <a href="https://www.linkedin.com/in/ajax-abernathy/">
                    LinkedIn
                  </a>{" "}
                  | <a href="https://github.com/ajaxabernathy">GitHub</a>
                </p>
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="mb-6">[Education]</p>
                <p className="normal-case">The City College of New York</p>
                <p className="normal-case">BFA Audio Technology, 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-black w-full pt-[145px]">
        <h2 className="content-wrapper heading-serif">Coming soon...</h2>
      </section>
    </main>
  );
}
