'use client';

import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadSummaryButton({
    title,
    summaryText,
    fileName,
    createdAt
}: {
    title: string;
    summaryText: string;
    fileName: string;
    createdAt: string;
}) {
    const handleDownload = () => {
        const summaryContent = `# ${title}
Generated Summary
Generated on: ${new Date(createdAt).toLocaleDateString()}
${summaryText}
Original File: ${fileName}
Genereated By LexisPDF`;
        const blob = new Blob([summaryContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `Summary_${title.replace(/[^a-z0-9]/gi, "_")}.txt`;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    return (
        <Button size={'sm'} className="h-8 px-3 bg-purple-100 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
        onClick={handleDownload}>
            <Download className="h-4 w-4"/>Download Summary
        </Button>
    );
}