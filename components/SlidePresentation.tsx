'use client';

import { useState, useEffect } from 'react';
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import Chapter1Slide from './slides/Chapter1Slide';
import Chapter2Slide from './slides/Chapter2Slide';
import MultiverseSlide from './slides/MultiverseSlide';
import Chapter3Slide from './slides/Chapter3Slide';
import GravitySlide from './slides/GravitySlide';
import LightSpeedSlide from './slides/LightSpeedSlide';
import Chapter4Slide from './slides/Chapter4Slide';
import EntropySlide from './slides/EntropySlide';
import PullRequestSlide from './slides/PullRequestSlide';
import FinalSlide from './slides/FinalSlide';

const slides = [
  TitleSlide,
  IntroSlide,
  Chapter1Slide,
  Chapter2Slide,
  MultiverseSlide,
  Chapter3Slide,
  GravitySlide,
  LightSpeedSlide,
  Chapter4Slide,
  EntropySlide,
  PullRequestSlide,
  FinalSlide,
];

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
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

  const CurrentSlideComponent = slides[currentSlide];

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

      <div className="fixed bottom-8 right-8 flex items-center gap-4 text-gray-400 text-sm font-mono z-50">
        <span>{currentSlide + 1} / {slides.length}</span>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 left-8 text-gray-500 text-xs font-mono z-50">
        ← → キー or スペースキーで操作
      </div>
    </div>
  );
}
