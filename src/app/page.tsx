import Image from "next/image";

export default function Hom() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="flex -space-x-2 overflow-hidden">
        <Image
          className="inline-block ring-4 ring-white m-2"
          src="/cat.jpg" 
          alt="cat bromir"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="pt-10 m-0 text-5xl">Welcome Everything</div>
      <div className="mt-4 text-2xl text-center">
        The purpose of this project is to test implementation git action
      </div>
    </main>
  );
}
