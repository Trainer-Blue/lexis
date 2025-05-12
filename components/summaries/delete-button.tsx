'use client'

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { deleteSummaryAction } from "@/actions/summary-actions";


export default function DeleteButton({ summaryId }: { summaryId: string }) {
    const [open, setOpen] = React.useState(false);
    const [isPending, startTransition] = React.useTransition();

    const handleDelete = async () => {
        startTransition(async () => {
            const result = await deleteSummaryAction({ summaryId });
            if(result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
            setOpen(false);
        });
    };

    return <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-500 bg-gray-100 border border-gray-200 hover:text-purple-600 hover:bg-purple-100">
                        <Trash2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Delete Summary</DialogTitle>
                <DialogDescription>
                    Are you sure you want to delete this summary? This action cannot be undone. This will permanently delete your summary and remove it from our servers.
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="ghost" className="text-gray-700 bg-gray-100 border border-gray-200 hover:text-purple-700 hover:bg-purple-100" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="ghost" className="text-rose-500 bg-rose-200 border border-rose-200 hover:text-rose-600 hover:bg-rose-100" onClick={handleDelete}>
                        {isPending?'Deleting...':'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>;

}