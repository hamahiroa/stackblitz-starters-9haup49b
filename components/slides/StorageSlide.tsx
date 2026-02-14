export default function StorageSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-4 tracking-widest">02 / STORAGE</div>
        <h3 className="text-3xl font-bold text-white mb-8">ストレージ仕様</h3>

        <div className="flex gap-8 mb-6">
          <div className="flex-1 space-y-4">
            <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">ホログラフィー原理</div>
              <div className="text-white text-sm font-semibold mb-1">ヘーラルト・トホーフト（1993年）</div>
              <div className="text-gray-300 text-sm leading-relaxed">
                3次元空間の重力理論 = 空間の果て（2次元）の重力を含まない理論
              </div>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">空間 = UI</div>
              <div className="text-gray-300 text-sm leading-relaxed">
                空間とは、情報が整理・接続された結果として現れる「UI（ユーザーインターフェース）」に過ぎない
              </div>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">3D → 2D</div>
              <div className="text-gray-300 text-sm leading-relaxed">
                「3Dゲームの中でリンゴが落ちる（重力）」という現象は、実は「2次元のメモリ上のビットが書き換わっている」だけ
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-3 bg-gray-500/5 rounded-lg blur-xl group-hover:bg-gray-500/10 transition-all duration-700"></div>
              <img
                src="/image copy.png"
                alt="Holographic Principle"
                className="relative w-52 rounded-lg shadow-2xl shadow-black/50 border border-gray-800"
              />
            </div>
            <div className="text-center mt-3 text-gray-600 font-mono text-xs">Holographic Principle</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-gray-500 font-mono text-xs mb-2">ダークエネルギー</div>
            <div className="text-gray-300 text-sm">動的なメモリ増設</div>
            <div className="text-gray-600 font-mono text-xs mt-1">Auto Scaling</div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-gray-500 font-mono text-xs mb-2">ダークマター</div>
            <div className="text-gray-300 text-sm">画面には映らない裏方データ</div>
            <div className="text-gray-600 font-mono text-xs mt-1">Index</div>
          </div>
        </div>
      </div>
    </div>
  );
}
