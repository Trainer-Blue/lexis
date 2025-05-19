'use client';

interface ContentSectionProps {
  content: string[];
}

export default function ContentSection({ content }: ContentSectionProps) {
  if (!content || content.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-muted-foreground text-center">No content available for this section.</p>
      </div>
    );
  }

  // Default emojis to use if none is present
  const defaultEmojis = ["📝", "✨", "💡", "📊", "🔍", "🚀", "📌", "⭐", "📚", "🔎"];

  return (
    <div className="space-y-4">
      {content.map((point, index) => {
        // Remove leading period if present
        let processedPoint = point.startsWith('.') ? point.slice(1) : point;
        
        // Check if the point already has an emoji
        const hasEmoji = /[\p{Emoji}]/u.test(processedPoint);
        
        // If no emoji present, add one from our default list
        if (!hasEmoji) {
          processedPoint = `${defaultEmojis[index % defaultEmojis.length]} ${processedPoint}`;
        }
        
        // Handle markdown formatting
        const hasBold = /\*\*(.*?)\*\*/.test(processedPoint);
        
        return (
          <div 
            key={index} 
            className="p-3.5 rounded-lg shadow-sm hover:shadow-md transition-all bg-purple-100 dark:bg-purple-900/60 backdrop-blur-sm border border-purple-200/50"
          >
            {hasBold ? (
              <p className="leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: processedPoint
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n/g, '<br />') 
              }} />
            ) : (
              <p className="leading-relaxed">{processedPoint}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}