import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-lime-100 h-screen p-5 dark:bg-gray-600 flex justify-center items-center  ">
      <div className="bg-white flex flex-col md:flex-row gap-4 w-full shadow-lg p-5 dark:bg-gray-800 rounded-2xl max-w-screen-sm ">
        <input
          placeholder="Search.."
          type="text"
          className="w-full bg-gray-200 outline-none ring ring-transparent focus:ring-orange-400 transition-shadow focus:ring-offset-2 h-12 rounded-full pl-4"
        />
        <button className="md:px-2 font-medium text-xl py-2 active:scale-90 outline-none bg-gray-800 rounded-full text-white">
          Search
        </button>
      </div>
    </main>
  );
}
