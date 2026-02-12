export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-8 animate-fade-in">
        <div className="inline-block px-6 py-2 border border-cyan-500 rounded-full text-cyan-400 text-sm font-mono mb-4 animate-pulse-slow">
          $ universe --version
        </div>

        <h1 className="text-7xl font-bold text-white mb-4 animate-glow">
          Universe OS
        </h1>

        <div className="text-2xl text-cyan-400 font-mono mb-8">
          〜138億年目のプロダクション環境デプロイガイド〜
        </div>

        <div className="text-gray-400 text-lg max-w-2xl mx-auto">
          エンジニアの視点で宇宙を読み解く
        </div>

        <div className="mt-12 font-mono text-green-400 text-sm animate-blink">
          <span className="mr-2">▶</span>
          Press SPACE or → to start...
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan"></div>
    </div>
  );
}
