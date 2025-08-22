// src/components/PageSkeleton.jsx
export const PageSkeleton = () => (
  <div className="space-y-12 p-6">
    <div className="h-12 bg-gray-700 rounded w-1/4 mb-8" />
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  </div>
);