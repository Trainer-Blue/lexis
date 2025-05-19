import { Card } from "../ui/card";


export default function LoadingSkeleton() {
  return (
    <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[600px] overflow-hidden bg-gradient-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10">
      {/* Progress Bar Skeleton */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-4 sm:pt-6">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="h-3 w-16 bg-gray-400 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-3 w-8 bg-gray-400 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[30%] bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
          <div className="flex justify-between px-0.5 mt-1">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-full overflow-y-auto no-scrollbar pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="px-4 sm:px-8">
          {/* Title Skeleton */}
          <div className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 z-10">
            <div className="h-10 w-3/4 bg-gray-400 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            {[...Array(2)].map((_, index) => (
              <div 
                key={index} 
                className="p-3.5 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800/60 border border-gray-400/50 dark:border-purple-900/10"
              >
                <div className="flex space-x-2">
                  <div className="h-5 w-5 rounded-full bg-gray-400 dark:bg-gray-700 animate-pulse"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-4 w-full bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls Skeleton */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-8 w-8 bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="h-8 w-[180px] bg-gray-400 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
}