'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({onSubmit}: UploadFormInputProps) {
    return(
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-1"> 
                <Input 
                id="fle" 
                type="file" 
                name="file" 
                accept="application/pdf" 
                required 
                className="" />
                <Button>Upload Your PDF</Button>
            </div>
        </form>
    )
};