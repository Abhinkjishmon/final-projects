export function TeachersDecorative() {
    return (
      <div className="relative">
        {/* Decorative circles and patterns */}
        <div className="absolute top-0 right-0 w-24 h-24 text-[#FF725C]">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* Teacher images grid */}
        <div className="grid grid-cols-2 gap-8 relative z-10">
          <div className="space-y-8">
            <div className="rounded-full overflow-hidden aspect-square bg-[#E6F3EC]">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Teacher portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-full overflow-hidden aspect-square bg-[#EEF2FF] ml-12">
              <img
                src="https://images.unsplash.com/photo-1517940310602-26535839fe84?w=400&h=400&fit=crop"
                alt="Student portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12">
            <div className="rounded-full overflow-hidden aspect-square bg-[#FEF3C7]">
              <img
                src="https://images.unsplash.com/photo-1517940310602-26535839fe84?w=400&h=400&fit=crop"
                alt="Student portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 text-[#2E7D32] transform -translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4.73 13l6.27 6.27 6.27-6.27c3.4-2.72 3.27-6.3 1.15-8.42z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    );
  }