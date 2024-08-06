import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-lime-100 h-screen p-5 dark:bg-gray-600 flex justify-center items-center  ">
      <div className="bg-white flex flex-col  gap-4 w-full shadow-lg p-5 dark:bg-gray-800 rounded-2xl max-w-screen-sm ">
        {["GeonSang", "Me", "You", "Yourself"].map((person, index) => (
          <div
            className="*:animate-pulse flex items-center gap-4 odd:bg-slate-100 even:bg-cyan-100 border-b-2 last:border-0 p-2.5 rounded-xl"
            key={index}
          >
            <div className="size-10 bg-blue-400 rounded-full" />
            {/* <span className="text-lg font-medium">{person}</span> */}
            <div className="w-60 h-4 rounded-full bg-gray-300" />
            {/* <div className="size-6 bg-red-500 text-white flex item-center justify-center rounded-full">
              <span>{index + 1}</span>
            </div> */}
            <div className="w-40 h-4 rounded-full bg-gray-300" />
          </div>
        ))}
      </div>
    </main>
  );
}
