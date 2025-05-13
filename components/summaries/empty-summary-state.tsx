import Link from "next/link";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptySummaryState() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] w-full rounded-lg border border-dashed p-4 md:p-8">
            <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" 
                aria-hidden="true"
            >
                <span className="text-[60px] sm:text-[90px] md:text-[120px] font-extrabold text-gray-900/20 dark:text-gray-100 blur-[2px]">
                    NO SUMMARIES
                </span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3 md:gap-4 w-full max-w-[280px] sm:max-w-md">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <Upload className="h-8 w-8 md:h-10 md:w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">No Summaries Found</h3>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                    You haven't created any summaries yet. Upload a PDF to generate your first summary.
                </p>
                <Button asChild className="mt-2 w-full sm:w-auto">
                    <Link href="/upload">Upload PDF</Link>
                </Button>
            </div>
        </div>
    );
}