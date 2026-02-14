'use client';

import { useState, useEffect } from 'react';
import TitleSlide from './slides/TitleSlide';
import TOCSlide from './slides/TOCSlide';
import IntroSlide from './slides/IntroSlide';
import BookSlide from './slides/BookSlide';
import MonkeyThoughtSlide from './slides/MonkeyThoughtSlide';
import Chapter1Slide from './slides/Chapter1Slide';
import RelativitySlide from './slides/RelativitySlide';
import QuantumSlide from './slides/QuantumSlide';
import EntropyIntroSlide from './slides/EntropyIntroSlide';
import StringTheorySlide from './slides/StringTheorySlide';
import Chapter2Slide from './slides/Chapter2Slide';
import BigBangSlide from './slides/BigBangSlide';
import MultiverseSlide from './slides/MultiverseSlide';
import MultiverseCodeSlide from './slides/MultiverseCodeSlide';
import StorageSlide from './slides/StorageSlide';
import Chapter3Slide from './slides/Chapter3Slide';
import MassSlide from './slides/MassSlide';
import GravitySlide from './slides/GravitySlide';
import AttractionSlide from './slides/AttractionSlide';
import BlackHoleSlide from './slides/BlackHoleSlide';
import LightSpeedSlide from './slides/LightSpeedSlide';
import Chapter4Slide from './slides/Chapter4Slide';
import ConsciousnessSlide from './slides/ConsciousnessSlide';
import ConsciousnessDetailSlide from './slides/ConsciousnessDetailSlide';
import EntropySlide from './slides/EntropySlide';
import MainProcessSlide from './slides/MainProcessSlide';
import PullRequestSlide from './slides/PullRequestSlide';
import LinterSlide from './slides/LinterSlide';
import FinalSlide from './slides/FinalSlide';
import SlideTOCIndicator from './SlideTOCIndicator';

interface SlideEntry {
  component: React.ComponentType;
  section: number | null;
}

const slides: SlideEntry[] = [
  { component: TitleSlide, section: null },
  { component: TOCSlide, section: null },
  { component: IntroSlide, section: 0 },
  { component: BookSlide, section: 0 },
  { component: MonkeyThoughtSlide, section: 0 },
  { component: Chapter1Slide, section: 1 },
  { component: RelativitySlide, section: 1 },
  { component: QuantumSlide, section: 1 },
  { component: EntropyIntroSlide, section: 1 },
  { component: StringTheorySlide, section: 1 },
  { component: Chapter2Slide, section: 2 },
  { component: MultiverseSlide, section: 2 },
  { component: BigBangSlide, section: 2 },
  { component: MultiverseCodeSlide, section: 2 },
  { component: StorageSlide, section: 2 },
  { component: Chapter3Slide, section: 3 },
  { component: MassSlide, section: 3 },
  { component: GravitySlide, section: 3 },
  { component: AttractionSlide, section: 3 },
  { component: BlackHoleSlide, section: 3 },
  { component: LightSpeedSlide, section: 3 },
  { component: Chapter4Slide, section: 4 },
  { component: ConsciousnessSlide, section: 4 },
  { component: ConsciousnessDetailSlide, section: 4 },
  { component: EntropySlide, section: 4 },
  { component: MainProcessSlide, section: 4 },
  { component: PullRequestSlide, section: 4 },
  { component: LinterSlide, section: 4 },
  { component: FinalSlide, section: 4 },
];

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setDirection('forward');
          setCurrentSlide(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          setDirection('backward');
          setCurrentSlide(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const current = slides[currentSlide];
  const CurrentSlideComponent = current.component;
  const activeSection = current.section;
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div
        key={currentSlide}
        className={`w-full h-full ${
          direction === 'forward'
            ? 'animate-slide-in-right'
            : 'animate-slide-in-left'
        }`}
      >
        <CurrentSlideComponent />
      </div>

      {activeSection !== null && (
        <SlideTOCIndicator activeSection={activeSection} />
      )}

      <div className="fixed top-0 left-0 right-0 h-px bg-gray-800 z-50">
        <div
          className="h-full bg-gray-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed bottom-6 right-8 text-gray-600 text-xs font-mono z-50">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
