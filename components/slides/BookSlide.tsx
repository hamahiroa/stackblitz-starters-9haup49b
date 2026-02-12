export default function BookSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex gap-12 items-center">
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-2 bg-cyan-500/10 rounded-lg blur-xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            <img
              src="/71XddNYvUnL.jpg"
              alt="Programming the Universe - Seth Lloyd"
              className="relative w-52 rounded-lg shadow-2xl shadow-black/50 border border-gray-800"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gray-500 font-mono text-xs tracking-widest">REFERENCE</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Programming the Universe
          </h2>
          <div className="text-gray-400 text-sm mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Seth Lloyd / MIT教授
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono text-sm mt-0.5">diff</span>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <div className="text-gray-500 line-through mb-1">
                    - 原著：宇宙 = 量子コンピュータ
                  </div>
                  <div className="text-green-400">
                    + 本プレゼン：宇宙 = 普通のPC
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
              <div className="text-gray-300 text-sm leading-relaxed space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 select-none">&gt;</span>
                  <span>演算のルール（OSのカーネル）が違うだけで、基本構造は同じ（情報の計算機）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 select-none">&gt;</span>
                  <span>Docker、OS、ストレージ、<code className="text-cyan-400 bg-gray-800/50 px-1.5 py-0.5 rounded text-xs">.env</code> などの抽象化レイヤーの話も同じ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
