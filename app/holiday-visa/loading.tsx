export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0891b2] to-[#0e7490] flex flex-col">
      <div className="container py-12">
        <div className="text-center mb-12">
          <div className="h-10 bg-white/20 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-4">
            <div className="flex-1 max-w-md">
              <div className="h-11 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-11 w-20 bg-white/20 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-11 w-48 bg-white/20 rounded-lg animate-pulse ml-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/95 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-[#0891b2]/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-6 bg-[#0891b2]/20 rounded animate-pulse w-20"></div>
                    <div className="h-2 w-2 bg-[#f4e04d]/50 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-[#0891b2]/10 rounded animate-pulse w-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-6 space-y-6 shadow-lg">
            <div>
              <div className="h-8 bg-[#0891b2]/20 rounded animate-pulse w-64 mb-2"></div>
              <div className="h-4 bg-[#0891b2]/10 rounded animate-pulse w-full"></div>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[#0891b2]/5">
                  <div className="h-10 w-10 rounded-full bg-[#0891b2]/20 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-[#0891b2]/20 rounded animate-pulse w-32 mb-1"></div>
                    <div className="h-4 bg-[#0891b2]/10 rounded animate-pulse w-48"></div>
                  </div>
                </div>
              ))}
              <div className="h-11 bg-[#f4e04d]/50 rounded animate-pulse w-full"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <div className="h-11 bg-white/20 rounded animate-pulse w-40"></div>
          <div className="h-6 bg-white/10 rounded animate-pulse w-48"></div>
        </div>

        <div className="h-4 bg-white/10 rounded animate-pulse w-80 mx-auto mt-8"></div>
      </div>
    </div>
  )
}
