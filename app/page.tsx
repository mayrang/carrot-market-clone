import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-300 h-screen p-5 dark:bg-gray-600 flex justify-center items-center  ">
      <div className="bg-white w-full shadow-lg p-5 dark:bg-gray-800 rounded-2xl max-w-screen-sm ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 dark:text-gray-300 font-semibold -mb-1">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>

        <div className="my-2 flex itemx-center gap-2">
          <span className="bg-green-400 hover:scale-110 hover:bg-green-500 transition text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full">
            Today
          </span>
          <span>9:30-10:30u</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200  w-full h-2 absolute rounded-full " />
          <div className="bg-green-300 w-2/3 absolute h-2  rounded-full " />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-200">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
