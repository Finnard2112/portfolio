
import Image from "next/image";

export default async function Job() {

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        <div
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
            <a
                href={"https://vnpt.com.vn/"}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
                <Image
                src={"/images/vnpt-eps-vector-logo-3902466544.png"}
                className="object-cover"
                alt={`VNPT logo`}
                fill
                />
            </a>
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{" VNPT"}</h3>
                <p>{"Full Stack Web Development Intern"}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {`06/2022`} - {`08/2022`}
                </small>
                <ul className="text-base text-zinc-400 my-4 list-disc pl-5">
                  <li>Saved over 100 FTE hours a year by developing a full-stack web application to streamline internal AI testing process</li>
                  <li>Worked closely with my mentors and showed initiative to deliver a polished and functional product in only 2 months</li>
                  <li>Implemented a new scheduling system which includes user login, sessions, drag and drop calendar features to efficiently manage access to testing API endpoints</li>
                  <li>Improved overall task management by designing a dashboard for running and showing the results of tests with notifications in Telegram</li>
                  <li>Self-taught and utilized Bootstrap, CSS for UI, Python and Flask for REST API back-end, PostgreSQL for database</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-12">
        <div
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
            <a
                href={"https://breakerspace.cs.umd.edu/"}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
                <Image
                src={"/images/bs-logo.png"}
                className="object-cover"
                alt={`Breakerspace logo`}
                fill
                />
            </a>
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{" Breakerspace"}</h3>
                <p>{"Cybersecurity Research Intern"}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {`05/2023`} - {`08/2023`}
                </small>

                <ul className="text-base text-zinc-400 my-4 list-disc pl-5">
                  <li>Researched novel website fingerprinting techniques with Machine Learning and improved on exisiting models with over 90% accuracy in a team setting</li>
                  <li>Improved existing Website Fingerprinting techniques by analyzing Levenshtein distance between prints of different pages in the same domain</li>
                  <li>Created a content-focused crawler to model user browsing behavior, which is 3 times more precise than a BFS crawler</li>
                  <li>Collaborated in a Scrum-based team structure to synchronize project progress and optimize workflows while working remotely</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-12">
        <div
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
            <a
                href={"https://umd.edu/"}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
                <Image
                src={"/images/University_of_Maryland_1856_logo-1333615081.png"}
                className="object-cover"
                alt={`UMD logo`}
                fill
                />
            </a>
            <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{" University of Maryland"}</h3>
                <p>{"Teaching Assistant"}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {`01/2023`} - {`05/2023`}
                </small>
                <ul className="text-base text-zinc-400 my-4 list-disc pl-5">
                  <li>Held 6 office hours per week to consolidate students' knowledge and help dozens meet their project deadlines</li>
                  <li>Communicated and organized with other Teaching Assistants to provide the best service in a course of 400 students</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}