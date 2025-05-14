import { getDbConnection } from "./db";

export async function getSummaries(userId: string) {
    const sql = await getDbConnection();
    const summaries = await sql`
        SELECT *
        FROM pdf_summaries
        WHERE user_id = ${userId}
        ORDER BY created_at DESC
    `;
    return summaries;
}

export async function getSummaryById(id: string) {
    try {
        const sql = await getDbConnection();
        
        const [summary] = await sql`select *, LENGTH(summary_text) - LENGTH(REPLACE(summary_text,' ',''))+1 AS word_count from pdf_summaries where id = ${id}`;

        return summary;
    } catch (error) {
        console.error('Error occurred while fetching summary by id', error);
        return null;
    }
}
