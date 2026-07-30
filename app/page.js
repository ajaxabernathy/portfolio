import CaseStudy from "./components/CaseStudy";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <header className="w-full fixed top-0 left-0 z-50 site-grid-container content-wrapper heading mt-[14px] md:mt-[28px] text-white uppercase invert-text">
        <Link
          href="/"
          className="col-span-3 grid-break:col-span-6"
          style={{ textDecoration: "none" }}
        >
          Ajax
          <br />
          Abernathy
        </Link>
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
      </header>
      <div className="w-full min-h-dvh flex flex-col justify-end ">
        <section className="text-white uppercase mb-12 md:mb-18">
          <div className="site-grid-container content-wrapper body">
            <div className="col-span-6">
              <p className="mb-12 md:mb-6 md:w-[80%] grid-break:w-[80%] font-light">
                Full stack software engineer building things for
                screens—balancing functionality and aesthetics with a bias
                toward simplicity. I partner with designers to create
                thoughtful, brand-aligned websites&nbsp;that&nbsp;perform.
              </p>
              <p>
                <span className="font-light">Currently:</span> Full Stack
                Developer at{" "}
                <a
                  href="https://wearemodcreative.com"
                  className="hover:text-red"
                >
                  MOD
                </a>
              </p>
              <p>
                <span className="font-light">Available for:</span> freelance
              </p>
            </div>
            <div className="col-span-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-1/2 flex flex-col">
                  <p className="mt-12 md:mt-0 mb-2 md:mb-6">[Contact]</p>

                  <a
                    href="mailto:ajaxabernathy@gmail.com"
                    className="lowercase mb-1 hover:text-red w-fit"
                  >
                    ajaxabernathy@gmail.com
                  </a>
                  <p className="mb-6">
                    <a
                      href="https://www.linkedin.com/in/ajax-abernathy/"
                      className="hover:text-red"
                    >
                      LinkedIn
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/ajaxabernathy"
                      className="hover:text-red"
                    >
                      GitHub
                    </a>
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
      </div>
      <section className="text-white w-full content-wrapper mt-[8rem] md:mt-[14rem]">
        <div className="site-grid-container body">
          <div className="col-span-6">
            <h2 className="heading uppercase max-w-[200px] mb-12">
              Skills & Services
            </h2>
          </div>
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
                  <li>GROQ</li>
                  <li>Shell/CLI</li>
                </ul>
              </div>
              <div className="w-1/2 flex flex-col pl-2 md:pl-0">
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
                <li>CMS (Sanity, Directus, Strapi)</li>
                <li>Webflow</li>
                <li>Webpack</li>
                <li>Turbopack</li>
                <li>Vercel</li>
                <li>AWS (EC2, S3, Amplify, DynamoDB)</li>
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
