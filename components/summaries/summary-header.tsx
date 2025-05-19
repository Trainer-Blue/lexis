import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function SummaryHeader({ title,created_at,word_count }: { title: string, created_at: string, word_count: number }) {
    const date = new Date(created_at);
    const readingTime = `${Math.ceil(word_count / 200)} min read`;
    return (
        <div className="flex gap-4 mb-4 justify-between">
            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                    <Badge variant={'secondary'} className="relative px-4 py-1.5 text-sm font-semibold bg-white/80 backdrop-blur-xs rounded-full hover:bg-white/90 transition-all duration-200 shadow-xs hover:shadow-md"><Sparkles className="h-4 w-4 mr-1.5 font-bold"/>AI Summary
                    </Badge>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        {date.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-purple-400" />
                        {readingTime}
                    </div>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight"><span className="bg-linear-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">{title}</span></h1>
            </div>
            <div className="self-start">
                <Button variant={'link'} className="text-white text-xs sm:text-sm rounded-full bg-purple-200 hover:bg-white/80 hover:no-underline transition duration-400 shadow-lg">
                    <Link href="/dashboard" className="flex items-center text-purple-500 font-semibold"><ChevronLeft className="w-5 h-5"/><span>Back <span className="hidden sm:inline">to Dashboard</span></span></Link>
                </Button>            
            </div>
        </div>
        );
}