import "@/components/common/blob.css";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Page() {
  return (
      <section className="min-h-screen">
        <div className="blob"/>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-purple-200 via-purple-500 to-purple-800 animate-gradient-x group" >
                    <Badge variant='secondary' className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
                        <Sparkles className="!h-5 !w-5 mr-2 text-purple-700 animate-pulse" />
                        <p className="text-base text-purple-600">AI-Powered Content Creation</p>
                    </Badge>
                </div>
                <h1>Start Uploading Your PDFs</h1>
                <p>Upload your PDFs to get started with LexisPDF</p>
            </div>
        </div>
      </section>
    );
}