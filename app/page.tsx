import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-lime-100 h-screen p-5 dark:bg-gray-600 flex justify-center items-center  ">
      <div className="bg-white flex flex-col md:flex-row gap-4 w-full shadow-lg p-5 dark:bg-gray-800 rounded-2xl max-w-screen-sm ">
        <input
          placeholder="Email"
          type="email"
          required
          className="peer invalid:focus:ring-red-300 placeholder:text-orange-500 w-full bg-gray-200 outline-none ring ring-transparent focus:ring-green-400 transition-shadow focus:ring-offset-2 h-12 rounded-full pl-4"
        />
        <span className="hidden text-red-300 peer-invalid:block">Email is required.</span>
        <button className="peer-invalid:bg-red-100 md:px-2 font-medium text-xl py-2 active:scale-90 outline-none peer-valid:bg-gradient-to-tr from-cyan-500 to-purple-400 rounded-full text-white">
          Search
        </button>
      </div>
    </main>
  );
}
