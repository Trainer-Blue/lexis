import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
    return <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-purple-200 via-purple-500 to-purple-800 animate-gradient-x group" >
            <Badge variant='secondary' className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
            <Sparkles className="!h-5 !w-5 mr-2 text-purple-700 animate-pulse" />
            <p className="text-base text-purple-600">Powered By AI</p>
            </Badge>
        </div>
        <h1 className="font-bold py-6 text-center">Transform PDFs into <span className="relative inline-block">
            <span className="relative z-10">concise</span>
            <span className="absolute inset-0 bg-violet-200 -z-10 transform -rotate-2 scale-105" aria-hidden="true"></span>
            </span> summaries</h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl">Get a beautiful Summary reel of the document in seconds</h2>
        <Button variant={'link'} className="text-white mt-6 text-base sm:text-lg lg:text:xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-br from-purple-950 to-purple-500 hover:from-purple-500 hover:to-purple-950 hover:no-underline font-bold transition duration-700 shadow-lg">
            <Link href="/#pricing" className="flex gap-2 items-center">
                <span>Try Lexis</span>
                <ArrowRight className="animate-pulse" />
            </Link>
        </Button>
    </section>
    }