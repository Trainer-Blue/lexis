'use client';

import { parseSection } from "@/utils/summary-helpers";
import { useState } from "react";
import { Card } from "../ui/card";
import NavigationControls from "./navigation-controls";
import ProgressBar from "./progress-bar";
import ContentSection from "./content-section";

const SectionTitle = ({ title }: { title: string }) => (
    <div className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 bg-transparent backdrop-blur-xs z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2">
            {title}
        </h2>
    </div>
);

export default function SummaryViewer({ summary }: { summary: string }) {
    const [currentSection, setCurrentSection] = useState(0);

    const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    const handlePrevious = () => setCurrentSection((prev) => Math.max(prev - 1, 0));

    const sections = summary
    .split('\n# ')
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection)
    return (
        <Card 
            className="relative min-h-[700px] h-full w-full xl:w-[600px] overflow-hidden bg-gradient-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10"
            >
            <ProgressBar sections={sections} currentSection={currentSection} />
            
            {/* Use flex layout to keep navigation fixed at bottom */}
            <div className="flex flex-col h-full pt-12 sm:pt-16">
                {/* Main content area with scrolling */}
                <div className="flex-1 px-4 sm:px-8 pb-4">
                    <SectionTitle title={sections[currentSection]?.title} />
                    <ContentSection content={sections[currentSection]?.points.map(point=>point.toString())} />
                        {/* Fixed navigation area */}
                    <div className="absolute bottom-0 left-0 right-0 pb-8 px-4 sm:px-8 py-4 bg-transparent backdrop-blur-sm">
                        <NavigationControls 
                            currentSection={currentSection}
                            totalSections={sections.length}
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            onSectionSelect={setCurrentSection}
                        />
                    </div>
                </div>
                
                
            </div>
        </Card>
    );
}