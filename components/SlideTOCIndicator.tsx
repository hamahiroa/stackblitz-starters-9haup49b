import { tocSections } from './tocData';

interface SlideTOCIndicatorProps {
  activeSection: number;
}

export default function SlideTOCIndicator({ activeSection }: SlideTOCIndicatorProps) {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-1.5 opacity-0 animate-toc-fade-in">
      {tocSections.map((section) => {
        const isActive = section.id === activeSection;
        return (
          <div
            key={section.id}
            className="flex flex-col items-center gap-1 transition-all duration-500"
          >
            <div
              className={`
                text-[9px] font-mono transition-all duration-500 whitespace-nowrap
                ${isActive ? 'text-gray-300 opacity-100 translate-y-0' : 'text-gray-600 opacity-0 translate-y-1'}
              `}
            >
              {section.shortLabel}
            </div>
            <div
              className={`
                rounded-full transition-all duration-500
                ${isActive
                  ? 'w-6 h-1.5 bg-cyan-500/70 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                  : 'w-1.5 h-1.5 bg-gray-700'
                }
              `}
            />
          </div>
        );
      })}
    </div>
  );
}
