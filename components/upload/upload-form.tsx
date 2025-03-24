'use client';

import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from 'zod';

const schema = z.object({
    file: z
    .instanceof(
        File,{message: 'Please upload a valid file'}
    )
    .refine(
        (file) => file.size <= 24 * 1024 * 1024, {message: 'File size should be less than 20MB'}
    )
    .refine(
        (file) => file.type.startsWith('application/pdf'), {message: 'File should be a PDF'}
    )
});

export default function UploadForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        //validating the fields

        const validatedFields = schema.safeParse({file});
        console.log(validatedFields);
        if(!validatedFields.success) {
            console.log(validatedFields.error);
            return;
        }
        //schema validation using zod
        //uploading the file to uploadthing
    }
    return(
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit = {handleSubmit}/>
        </div>
    )
};