import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative mt-[180px] z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent "
            >Explore your life&#39;s patterns.</h1>
            <p
            className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Life is a journey of ever-changing experiences.Our AI partner, helps you navigate the unique patterns of your life, offering personalized insights and support in relationships, career, and personal growth.</p>
            <div className="mt-14">
                <Link href={"/chat"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Chat
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection