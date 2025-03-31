'use server';

import { fetchAndExtractPdfText } from '@/lib/langchain';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { generateSummaryFromGemini } from '@/lib/gemini';

export async function generatePdfSummary(uploadResponse: [{
    serverData:{
        userId: string;
        file: {
            url: string;
            name: string;
        };
    };
}]
) {
    if(!uploadResponse){
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        }
    }

    const {
        serverData:{
            userId,
            file: {
                url: pdfUrl, 
                name: fileName
            },
        }
    } = uploadResponse[0];

    if(!pdfUrl){
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log(pdfText);

        let summary;
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log({ summary });
        } catch (error) {
            console.error('Error occurred while generating summary from OpenAI', error);

            if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED'){
                try {
                    summary = await generateSummaryFromGemini(pdfText);
                } catch (error) {
                    console.error('gemini API failed after OpenAI error', error);
                    throw new Error('Failed to generate summary with available AI providers');
                }
            }
        }

        if(!summary){
            return {
                success: false,
                message: 'Error occurred while generating summary',
                data: null,
            }
        }

        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
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