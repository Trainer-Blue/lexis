import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UploadLimitCheckProps {
  uploadLimit?: number;
  children: React.ReactNode;
}

export default async function UploadLimitCheck({ 
  uploadLimit = 10, // Default upload limit
  children 
}: UploadLimitCheckProps) {
  // Get current user (server-side)
  const user = await currentUser();
  if (!user?.id) return redirect("/sign-in");
  const userId = user.id;

  // Get summaries count
  const summaries = await getSummaries(userId);
  const isLimitReached = summaries.length >= uploadLimit;

  if (isLimitReached) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 border border-purple-200 rounded-lg bg-transparent backdrop-blur-xl dark:bg-purple-900/20 dark:border-purple-800/30">
        <div className="flex items-center gap-2 text-grey-800 dark:text-purple-300">
          <AlertCircle className="h-5 w-5" />
          <h2 className="font-semibold">Upload Limit Reached</h2>
        </div>
        <p className="text-center text-grey-700 dark:text-purple-400 max-w-md">
          You've reached your upload limit of {uploadLimit} PDFs. 
          Please delete an existing summary before uploading a new one.
        </p>
        <div className="flex gap-3 mt-2">
          <Button asChild variant="outline" className="border-purple-300 hover:bg-purple-100">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  // If limit not reached, render children (the upload form)
  return <>{children}</>;
}