'use client';

import UploadFormInput from "@/components/upload/upload-form-input";
import { useUploadThing } from '@/utils/uploadthing';
import { z } from 'zod';
import { toast } from "sonner"
import { generatePdfSummary } from "@/actions/upload-actions";
import { useRef,useState } from 'react';


const schema = z.object({
    file: z
    .instanceof(
        File,{message: 'Please upload a valid file',}
    )
    .refine(
        (file) => file.size <= 24 * 1024 * 1024, {message: 'File size should be less than 20MB'}
    )
    .refine(
        (file) => file.type.startsWith('application/pdf'), {message: 'File should be a PDF'}
    )
});

export default function UploadForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading,setIsLoading] = useState(false);

    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
          console.log("uploaded successfully!");
            toast.success('Uploaded successfully');
        },
        onUploadError: (err) => {
          console.error("error occurred while uploading",err);
            toast.error(`Error occurred while uploading: ${err.message}`);
        },
        onUploadBegin: ([file]) => {
          console.log("upload has begun for", file);
            toast.info(`Upload has begun`);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');

        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;

            //validating the fields

            const validatedFields = schema.safeParse({file});
            console.log(validatedFields);
            if(!validatedFields.success) {
                toast.error(`Something went wrong: ${validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Please try again'}`);
                setIsLoading(false);
                return;
            }

            const resp = await startUpload([file]);
            if(!resp){
                toast.error('Something went wrong, please try again');
                setIsLoading(false);
                return;
            }

            toast.info('💫 Processing your PDF');

            const summary = await generatePdfSummary(resp);
            console.log({summary});

            const {data = null,message = null} = summary||{};

            if(data){
                toast.success(`📝 Saving PDF\nHang tight! we are saving the summary`);
                // if(data.summary){
                    
                // //save to database
                // }
                formRef.current?.reset();
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
            toast.error('Something went wrong, please try again');
            formRef.current?.reset();
        }
    };
    return(
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit = {handleSubmit}/>
        </div>
    )
};