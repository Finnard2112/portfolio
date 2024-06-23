import Image from "next/image";

export default async function Home() {

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-between justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        <div key={1} className="lg:max-w-2xl max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            {"Finn Nguyen"}
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            <span className="text-white font-bold">CS + ACES @ UMD</span>
            <br />
            <br />
            Loves learning about cybersecurity, programming, and networks. Network+ certified and working towards Security+.
            Programming experience in Java, C, Assembly, Python, Bash, JavaScript, Ruby, and OCaml.
            Exploring careers in computer science and cybersecurity.
          </p>
          <ul className="flex items-center gap-x-6 my-10">
            <li key={2}>
              <a
                href={`https://github.com/Finnard2112`}
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                {`Github`}
              </a>
            </li>
            <li key={3}>
              <a
                href={`https://www.linkedin.com/in/finn-nguyen-55444922a/`}
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                {`LinkedIn`}
              </a>
            </li>
            <li key={4}>
              <a
                href={`https://finnstreefort.blogspot.com//`}
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                {`Personal Blog`}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0 w-full xl:w-auto xl:max-w-md mt-10 xl:mt-0">
          <Image
            src={"/images/finn.png"}
            alt="Description of image"
            width={350} // adjust width as needed
            height={350} // adjust height as needed
            className="object-cover rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
