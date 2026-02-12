export default function FinalSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-8 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
        alt="Universe"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 opacity-30">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-6 animate-fade-in">
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-glow">
          結びのメッセージ
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-lg p-6 border-2 border-cyan-500 shadow-2xl space-y-4">
          <div className="text-xl text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-orange-400 font-bold">理不尽なバグ（運命）</span>は
            <span className="text-cyan-400 font-bold">ハック</span>せよ。
          </div>

          <div className="text-xl text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            新しい<span className="text-green-400 font-bold">機能（挑戦）</span>を
            <span className="text-purple-400 font-bold">デプロイ</span>せよ。
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="text-base text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            周りを見渡してください。この滑らかな景色は、宇宙OSがあなたのためにレンダリングした<span className="text-yellow-400 font-bold text-xl">最高のUX</span>です。
          </div>

          <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 font-bold leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            最高のコード（生き様）を、この宇宙リポジトリにマージしていこう。
          </div>
        </div>

        <div className="mt-6 space-y-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-gray-400 text-sm">
            私たちの存在そのものが宇宙OSのUI設計における最も美しい<span className="text-pink-400 font-bold">「バグ」</span>であり<span className="text-cyan-400 font-bold">「仕様」</span>である
          </div>

          <div className="text-gray-500 text-xs font-mono">
            モニターを閉じて、もう一度周りの景色を見渡してみてください。
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="text-4xl font-bold text-white mb-2 animate-glow">
            Universe OS
          </div>
          <div className="text-cyan-400 font-mono text-sm">
            v13.8b - Production Ready
          </div>
        </div>
      </div>
    </div>
  );
}
