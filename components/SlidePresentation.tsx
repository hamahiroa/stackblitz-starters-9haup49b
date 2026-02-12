'use client';

import { useState, useEffect } from 'react';
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import Chapter1Slide from './slides/Chapter1Slide';
import TimeSpaceSlide from './slides/TimeSpaceSlide';
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

const slides = [
  TitleSlide,
  IntroSlide,
  Chapter1Slide,
  TimeSpaceSlide,
  RelativitySlide,
  QuantumSlide,
  EntropyIntroSlide,
  StringTheorySlide,
  Chapter2Slide,
  BigBangSlide,
  MultiverseSlide,
  MultiverseCodeSlide,
  StorageSlide,
  Chapter3Slide,
  MassSlide,
  GravitySlide,
  AttractionSlide,
  BlackHoleSlide,
  LightSpeedSlide,
  Chapter4Slide,
  ConsciousnessSlide,
  ConsciousnessDetailSlide,
  EntropySlide,
  MainProcessSlide,
  PullRequestSlide,
  LinterSlide,
  FinalSlide,
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

  const CurrentSlideComponent = slides[currentSlide];
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
