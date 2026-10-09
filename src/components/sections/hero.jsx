import Banner from "@/assets/banner.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-full h-[25vh] md:h-[35vh] lg:h-[50vh] rounded-2xl overflow-hidden">
        <Image
          src={Banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl uppercase text-normal">
          Bite into{" "}
          <span className="font-heading text-accent underline">Better</span>.
        </h1>
        <p className="text-base text-normal uppercase">Something for every craving.</p>
      </div>
    </div>
  );
}
