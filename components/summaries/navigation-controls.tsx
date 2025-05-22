'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../ui/select";

interface NavigationControlsProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}

export default function NavigationControls({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: NavigationControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-transparent backdrop-blur-sm justify-between gap-4">
      <div className="flex items-center space-x-2 bg-transparent">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={currentSection === 0}
          className="h-8 w-8"
          aria-label="Previous section"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-sm text-muted-foreground">
          {currentSection + 1} of {totalSections}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className="h-8 w-8"
          aria-label="Next section"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <Select
        value={currentSection.toString()}
        onValueChange={(value) => onSectionSelect(parseInt(value, 10))}
      >
        <SelectTrigger className="w-[180px] h-8">
          <SelectValue placeholder="Go to section" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: totalSections }, (_, i) => (
            <SelectItem key={i} value={i.toString()}>
              Section {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}