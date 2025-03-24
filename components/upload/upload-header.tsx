import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UploadHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-purple-200 via-purple-500 to-purple-800 animate-gradient-x group" >
                <Badge variant='secondary' className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
                    <Sparkles className="!h-5 !w-5 mr-2 text-purple-700 animate-pulse" />
                    <p className="text-base text-purple-600">AI-Powered Content Creation</p>
                </Badge>
            </div>
            <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h1>Start Uploading {' '}<span className="relative inline-block">
                    <span className="relative z-10">Your PDFs </span>
                    <span className="absolute inset-0 bg-violet-200 -z-10 transform -rotate-2 scale-105" aria-hidden="true"></span>
                    </span>
                </h1>
                <p className="mt-5 text-lg font-medium leading-8 text-gray-600 max-w-2xl text-center">Upload your PDFs to get started with LexisPDF! 🐳</p>
            </div>
        </div>
    );
    }