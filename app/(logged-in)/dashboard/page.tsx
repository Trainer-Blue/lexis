import "@/components/common/blob.css"
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightCircle, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import EmptySummaryState from "@/components/summaries/empty-summary-state";
import Link from "next/link";

export default async function DashboardPage() {
    const user = await currentUser();
    if (!user?.id) return redirect("/sign-in");
    const userId = user.id;

    const summaries = await getSummaries(userId)

    const uploadLimit = 10;
    return (
        <main className="min-h-screen">
            <div className="blob"/>
            <div className="container mx-auto flex flex-col gap-4 px-2 py-12 sm:py-24">
                <div className="flex gap-4 mb-3 justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold tracking-tight bg-linear-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Your Summaries</h1>
                        <p className="text-gray-700">Transform your PDFs into concise, actionable insights</p>
                    </div>
                    <div className="flex items-center justify-end">
                        <Button variant={'link'} className="text-white text-base sm:text-lg lg:text:xl rounded-2xl bg-linear-to-br from-purple-950 to-purple-500 hover:from-purple-500 hover:to-purple-950 hover:no-underline transition duration-700 shadow-lg">
                            <Link href="/upload" className="flex items-center text-white"><Plus className="w-5 h-5 mr-2"/>New Summary</Link>
                        </Button>
                    </div>
                </div>
                {summaries.length === uploadLimit && (<div className="flex justify-center mb-8">
                    <div className="bg-rose-100 border border-rose-200 rounded-lg p-4 shadow-md text-rose-900">
                        <p className="text-sm">You've reached the limit of {uploadLimit} uploads, delete a few summaries to upload more.
                            {/* <Link href="/pricing" className="flex text-slate-900 hover:underline text-sm"><ArrowRightCircle className="w-5 h-5"/>Click here to Upgrade to Pro for unlimited uploads and more features.</Link> */}
                        </p>
                    </div>
                </div>)}
                {summaries.length === 0? <EmptySummaryState/>:(
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
                        {summaries.map((summary, index) => (
                            <SummaryCard key={index} summary={summary}/>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}