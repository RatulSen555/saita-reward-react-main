// src/components/LoadingSkeletons.jsx
export const ProductCardSkeleton = () => (
  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 animate-pulse">
    <div className="h-48 bg-gray-700 rounded-xl mb-4" />
    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-700 rounded w-1/2 mb-4" />
    <div className="h-10 bg-gray-700 rounded-lg" />
  </div>
);

export const ProjectCardSkeleton = () => (
  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 animate-pulse">
    <div className="h-48 bg-gray-700 rounded-xl mb-4" />
    <div className="h-4 bg-gray-700 rounded w-full mb-2" />
    <div className="h-4 bg-gray-700 rounded w-2/3 mb-4" />
    <div className="flex justify-between">
      <div className="h-4 bg-gray-700 rounded w-1/4" />
      <div className="h-4 bg-gray-700 rounded w-1/5" />
    </div>
  </div>
);

export const TokenMetricSkeleton = () => (
  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 animate-pulse">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-700 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-1/3" />
        <div className="h-6 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  </div>
);

export const RoadmapSkeleton = () => (
  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 animate-pulse">
    <div className="h-6 bg-gray-700 rounded w-1/4 mb-6" />
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-4 h-4 bg-gray-700 rounded-full mt-2" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-700 rounded w-1/5" />
            <div className="h-4 bg-gray-700 rounded w-1/3" />
            <div className="h-4 bg-gray-700 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TextSkeleton = ({ lines = 3, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div key={i} className="h-4 bg-gray-700 rounded w-full" />
    ))}
  </div>
);