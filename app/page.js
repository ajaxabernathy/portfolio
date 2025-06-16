import CaseStudy from "./components/CaseStudy";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full sticky top-0 z-50 site-grid-container content-wrapper heading mt-[2rem] md:mt-[6rem] pt-2 text-white uppercase invert-text">
        <p className="col-span-3 grid-break:col-span-6">
          Ajax
          <br />
          Abernathy
        </p>
        <div className="col-span-3 grid-break:col-span-6 grid md:grid-cols-2">
          <h1 className="mb-6">
            Software
            <br />
            Engineer
          </h1>
          <p className="hidden md:block">
            (239)
            <br />
            404-9052
          </p>
        </div>
      </div>
      <section className="text-white uppercase mt-[calc(100dvh-446px)] grid-break:mt-[calc(100vh-500px)]">
        <div className="site-grid-container content-wrapper body">
          <div className="col-span-6">
            <p className="mb-12 md:mb-6 md:w-[80%] grid-break:w-[80%] font-light">
              Full stack software engineer building things for screens—balancing
              functionality and aesthetics with a bias toward simplicity. I
              partner with designers to build thoughtful, brand-aligned
              websites&nbsp;that&nbsp;perform.
            </p>
            <p>
              <span className="font-light">Currently:</span> Full Stack
              Developer at <a href="https://modworldwide.com">MOD</a>
            </p>
            <p className="mb-12">
              <span className="font-light">Available for:</span> freelance
            </p>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col md:flex-row">
              <div className="w-1/2 flex flex-col">
                <p className="mb-2 md:mb-6">[Contact]</p>

                <a
                  href="mailto:ajaxabernathy@gmail.com"
                  className="lowercase mb-1"
                >
                  ajaxabernathy@gmail.com
                </a>
                <p className="mb-6">
                  <a href="https://www.linkedin.com/in/ajax-abernathy/">
                    LinkedIn
                  </a>{" "}
                  | <a href="https://github.com/ajaxabernathy">GitHub</a>
                </p>
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="mb-2 md:mb-6">[Education]</p>
                <p className="normal-case">The City College of New York</p>
                <p className="normal-case">BFA Audio Technology, 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white w-full content-wrapper mt-[8rem] md:mt-[14rem]">
        <div className="site-grid-container body">
          <h2 className=" heading-serif col-span-6">Skills & Services</h2>
          <div className="col-span-6">
            <div className="flex">
              <div className="w-1/2 flex flex-col">
                <p className="mb-6 uppercase">[Languages]</p>
                <ul className="mb-18">
                  <li>TypeScript</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>GraphQL</li>
                  <li>Shell/CLI</li>
                </ul>
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="mb-6 uppercase">[Frameworks]</p>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Jest</li>
                  <li>Cypress</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mb-6 uppercase">[Technologies]</p>
              <ul>
                <li>Figma</li>
                <li>CMS (Directus, Sanity, Strapi)</li>
                <li>Webpack</li>
                <li>Turbopack</li>
                <li>Vercel</li>
                <li>AWS (Lambda, EC2, DynamoDB, S3)</li>
                <li>DigitalOcean (Droplets, App Platform)</li>
                <li>NoSQL Databases</li>
                <li>REST</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
                <li>PostHog</li>
                <li>Google Analytics</li>
                <li>Twilio SendGrid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CaseStudy />
    </main>
  );
}
