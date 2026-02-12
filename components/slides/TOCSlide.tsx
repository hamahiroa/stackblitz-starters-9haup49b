import { tocSections, tocDetails } from '../tocData';

export default function TOCSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-950 p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="mb-8 animate-fade-in">
          <div className="text-gray-500 font-mono text-xs tracking-widest mb-2">TABLE OF CONTENTS</div>
          <h2 className="text-3xl font-bold text-white">Universe OS 開発者向けブリーフィング</h2>
        </div>

        <div className="space-y-1">
          {tocSections.map((section, i) => (
            <div
              key={section.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex items-start gap-4 py-3 px-4 rounded-lg border border-transparent hover:border-gray-800 transition-colors duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center bg-gray-800/60 text-gray-400 font-mono text-sm mt-0.5">
                  {section.id}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-gray-200 text-base font-medium mb-1.5">
                    {section.label}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {tocDetails[section.id]?.map((detail, j) => (
                      <span
                        key={j}
                        className="text-gray-500 text-xs font-mono before:content-['·'] before:mr-1.5 before:text-gray-700"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {i < tocSections.length - 1 && (
                <div className="ml-8 border-l border-gray-800/50 h-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
