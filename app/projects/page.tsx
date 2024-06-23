
import Image from "next/image";
import Link from "next/link";

export default async function Project() {

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Projects Showcase
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;sve worked on or helped with many different projects over the years. Here are some of the ones I&apos;sm most proud of!
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          <Link
            href={`https://github.com/Finnard2112/BitTorrentClient`}
            key={"bittorrent"}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={"/images/bittorrent.png"}
              width={60}
              height={60}
              alt={"Python Bittorrent"}
              className="bg-zinc-800 rounded-md p-2"
            />

            <div>
                <h2 className="font-semibold mb-1">{"Python BitTorrent"}</h2>
                <div className="text-sm text-zinc-400">{"A fully working Bittorent client implemented in Python"}</div>
            </div>
          </Link>
          
      </section>
    </main>
  );
}