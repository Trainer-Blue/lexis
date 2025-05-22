'use server';

import { fetchAndExtractPdfText } from '@/lib/langchain';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { generateSummaryFromGemini } from '@/lib/gemini';
import { getDbConnection } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { formatFileNameAsTitle } from '@/utils/format-utils';
import { revalidatePath } from 'next/cache';

interface PdfSummaryType {
    userId?: string;
    fileUrl: string;
    summary: string;
    title: string;
    fileName: string;
}

export async function generatePdfSummary({
    fileName, 
    fileUrl
}: {
    fileName: string, 
    fileUrl: string
}
) {
    if(!fileUrl){
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        }
    }

    if(!fileUrl){
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(fileUrl);
        console.log(pdfText);

        let summary;
        try {
            // First attempt with OpenAI
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log({ summary });
        } catch (error) {
            // Log the OpenAI error
            console.error('Error occurred while generating summary from OpenAI', error);
            
            // Always attempt to use Gemini as fallback regardless of error type
            console.log('OpenAI API error, switching to Gemini API');
            try {
                summary = await generateSummaryFromGemini(pdfText);
                console.log('Successfully generated summary using Gemini fallback');
            } catch (geminiError) {
                console.error('Gemini API failed after OpenAI error', geminiError);
                throw new Error('Failed to generate summary with available AI providers');
            }
        }

        if(!summary){
            return {
                success: false,
                message: 'Error occurred while generating summary',
                data: null,
            }
        }

        const formattedFileName = formatFileNameAsTitle(fileName);
        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
                title: formattedFileName,
                summary,
            },
        }
    } catch (err) {
        return {
            success: false,
            message: 'Error occurred while extracting text from PDF',
            data: null,
        }
    }
};

async function savePdfSummary({
    userId, 
    fileUrl, 
    summary,
    title, 
    fileName
}: PdfSummaryType){
    //sql for inserting pdf summary into the database
    try {
        const sql = await getDbConnection();
        const [savedSummary] = await sql`INSERT INTO pdf_summaries(
        user_id, 
        original_file_url, 
        summary_text,
        title,
        file_name
        ) VALUES (
        ${userId},
        ${fileUrl}, 
        ${summary},
        ${title},
        ${fileName}
        ) RETURNING id, summary_text`;
        return savedSummary;
    } catch (error) {
        console.error('Error occurred while saving pdf summary', error);
        throw error;
    }
}

export async function storePdfSummaryAction({
    fileUrl, 
    summary, 
    title, 
    fileName
}: PdfSummaryType){
    //user is logged in and we have the userId
    //savePdfSummary()
    let savedSummary:any;
    try {

        const { userId } =  await auth();
        if(!userId){    
            return {
                success: false,
                message: 'User not found',
                data: null,
            }
        }
        savedSummary = await savePdfSummary({
            userId, 
            fileUrl, 
            summary, 
            title, 
            fileName
        });

        if(!savedSummary){
            return {
                success: false,
                message: 'Error occurred while storing summary',
                data: null,
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error? error.message : 'Error occurred while storing summary',
            data: null,
        }
    }

    //revalidate our cache
    revalidatePath(`/summaries/${savedSummary.id}`);
    return {
        success: true,
        message: 'Summary stored successfully',
        data: {
            id: savedSummary.id
        },
    }
}