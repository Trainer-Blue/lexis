import { Card } from "@/components/ui/card";
import DeleteButton from "@/components/summaries/delete-button";
import Link from "next/link";
import { FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { format } from "path";
import { formatFileNameAsTitle } from "@/utils/format-utils";

const StatusBadge = ({ status }: { status: string }) => {
    return (
        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
            {status}
        </span>
    );
}

export default function SummaryCard({summary}:{summary:any}) {
    return (
        <div className="">
            <Card className="relative h-full">
                <div className="absolute top-2 right-2">
                    <DeleteButton summaryId={summary.id}/>
                </div>
                <Link href={`summaries/${summary.id}`} className="block p-4 sm:p-6">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex">
                            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mt-2" />
                            <div className="flex-1 min-w-0 ml-2">
                                <h3 className="text-base xl:text-lg font-semibold text-gray-900 truncate w-4/5">
                                    {summary.title || formatFileNameAsTitle(summary.file_name)}
                                </h3>
                                <p className="text-sm text-gray-500 ">{formatDistanceToNow(new Date(summary.created_at),{addSuffix:true})}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 line-clamp-2 text-sm sm:text-base pl-2">
                            {summary.summary_text}
                        </p>
                        <div className="flex items-center justify-between mt-2 sm:mt-4">
                            <StatusBadge status={summary.status} />
                        </div>
                    </div>
                </Link>
            </Card>
        </div>
    );
}