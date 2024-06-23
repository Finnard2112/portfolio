
import Image from "next/image";
import Job from "../components/Jobs";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {

    const content = [
        {
          _type: 'block',
          _key: '6',
          style: 'normal',
          markDefs: [],
          children: [
            {
              _type: 'span',
              _key: 'unique-child-key',
              text:  `
              I'm interested in everything from defensive/offensive security, programming, programming languages, computer systems and networks, and cryptography.\n
              In my free time, I like working out, hiking, tennis, reading, writing, listening to podcasts, and playing video games with friends. \n
              I've worked as an undergraduate researcher, teaching assistant, full stack web dev intern, and IT intern. I'm Network+ certified, and I'm working towards Security+ and AWS certificates. \n
              If you'd like to know more about me, please visit my blog for technical writeups or writings about my personal interests.\n
              `,
              marks: [],
            },
          ],
        },
      ];
    
    const skills = ["Java", "C", "Python", "Ruby", "Javascript", "Bash","Assembly","Docker","SQL","Flask","Wireshark","Metasploit","Linux","Network Protocols(TCP/IP)","MITRE ATT&CK","OSINT","HTML/CSS","Next.js"];

    // Generate the array of pairs
    const skillspaired = skills.map((text, index) => ({
        skill: text,
        id: index + 6 // Assuming you want to start IDs from 1
    }));

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        <div key={5}>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
            <div className="order-2 lg:order-none">
            <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                {`Hi, I'm Finn! A Vietnamese student studying CS at UMD with a focus on cybersecurity `}
            </h1>

            <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
            <PortableText value={content} />
            </div>
            </div>

            <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <div>
                <Image
                className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                src={"/images/1675021317768.jpg"}
                width={400}
                height={400}
                quality={100}
                alt={"My picture"}
                />

                <a
                href={`https://drive.google.com/file/d/1ahEgKRsGBNjMEEbi_tr4fg98qJL2eKqO/view?usp=sharing`}
                className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                >
                <BiFile className="text-base" /> Resume Link
                </a>
            </div>

            <ul>
                <li key={"email"}>
                <a
                    href={`mailto:finnard2112@gmail.com`}
                    className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                >
                    <BiEnvelope className="text-lg" />
                    {`finnard2112@gmail.com`}
                </a>
                </li>
            </ul>
            </div>
        </section>

        <section className="mt-24 max-w-2xl">
            <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
            <p className="text-zinc-400 max-w-lg">
            {"My tech stack in no particular order:"}
            </p>

            <ul className="flex flex-wrap items-center gap-3 mt-8">
            {skills.map((skill) => (
                <li key={skill}
                className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                >
                {skill}
                </li>
            ))}
            </ul>
        </section>

        <Job />
        </div>
    </main>
  );
}