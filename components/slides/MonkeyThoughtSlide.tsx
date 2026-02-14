export default function MonkeyThoughtSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex gap-12 items-center">
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gray-500/5 rounded-lg blur-xl group-hover:bg-gray-500/10 transition-all duration-700"></div>
            <img
              src="/image.png"
              alt="Monkey typing on a typewriter"
              className="relative w-56 rounded-lg shadow-2xl shadow-black/50 border border-gray-800 grayscale"
            />
          </div>
          <div className="text-center mt-3 text-gray-600 font-mono text-xs">Infinite Monkey Theorem</div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gray-500 font-mono text-xs tracking-widest">THOUGHT EXPERIMENT</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            猿とマシンの思考実験
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">従来の猿 / タイプライター</div>
              <div className="text-gray-300 text-sm leading-relaxed mb-2">
                ランダムに文字を打ってもシェイクスピアは書けない
              </div>
              <div className="font-mono text-xs text-gray-600 bg-black/30 rounded px-3 py-1.5">
                asdkjf;lkajsdf;lkjas;dlfkj... <span className="text-gray-700">{'// '}ただのノイズ</span>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">デジタル物理学の猿 / コンピュータ</div>
              <div className="text-gray-300 text-sm leading-relaxed mb-2">
                ランダムなビットでも「短いコード（物理法則）」が生成され、システムが宇宙をレンダリング開始
              </div>
              <div className="font-mono text-xs bg-black/30 rounded px-3 py-1.5">
                <span className="text-gray-400">01001101</span> <span className="text-gray-700">{'// '}物理法則 → 実行 → 創発</span>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">CONCLUSION</div>
              <div className="text-white text-sm leading-relaxed">
                「宇宙はランダムに星を作ったのではない。<span className="text-gray-400 font-semibold">プログラムを実行して</span>今の複雑さを生み出したのだ。」
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
