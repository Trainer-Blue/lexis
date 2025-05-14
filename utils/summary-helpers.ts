
export const parseSection = (section: string) => {
    const [title, content] = section.split('\n\n')

    const cleanTitle = title.startsWith('#')?
    title.substring(1).trim():
    title.trim();

    const points: String[] = [];

    let currentPoint = '';

    content.split('\n').forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('.')) {
            if(currentPoint) points.push(currentPoint.trim());
            currentPoint = trimmedLine;
        } else if (!trimmedLine) {
            if(currentPoint) points.push(currentPoint.trim());
            currentPoint = '';
        }
        else {
            currentPoint += ' ' + trimmedLine;
        }
    }
    );
    if (currentPoint) points.push(currentPoint.trim());

    return { title: cleanTitle, points: points.filter((point)=> point && !point.startsWith('#') && !point.startsWith('[Choose')) };
};