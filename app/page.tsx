import Image from "next/image";

// group-focus-within : group에 어떤 자식중 하나라도 포커스 되어있을 때 적용되는

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-lime-100 h-screen p-5 dark:bg-gray-600 flex justify-center items-center  ">
      <div className="bg-white flex flex-col  gap-4 w-full shadow-lg p-5 dark:bg-gray-800 rounded-2xl max-w-screen-sm ">
        {["GeonSang", "Me", "You", "Yourself", ""].map((person, index) => (
          <div className=" flex items-center gap-4  p-2.5 rounded-xl group" key={index}>
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-20 empty:h-4 empty:bg-gray-300 empty:animate-pulse empty:rounded-full group-hover:text-blue-300">
              {person}
            </span>

            <div className="size-6 bg-red-500 text-white relative flex item-center justify-center rounded-full">
              <span className="z-10">{index + 1}</span>
              <div className="size-6 animate-ping bg-red-500  text-white absolute flex item-center justify-center rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
