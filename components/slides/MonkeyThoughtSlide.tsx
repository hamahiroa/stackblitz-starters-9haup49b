export default function MonkeyThoughtSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-6xl w-full">
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-2">猿とマシンの思考実験</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900/60 border-2 border-red-900/50 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🐵</span>
              <div>
                <h3 className="text-xl font-bold text-red-400">従来の猿</h3>
                <span className="text-xs text-gray-500 font-mono">タイプライター</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <div className="bg-black/40 rounded p-3 font-mono text-xs text-gray-500 border border-gray-800">
                asdkjf;lkajsdf;lkjas;dlfkjas;ldkfj...
              </div>

              <div className="pl-4 border-l-2 border-red-700/50">
                <div className="text-gray-400 mb-2">ランダムに文字を打っても<br/>シェイクスピアは書けない</div>
                <div className="text-gray-500 text-xs">
                  <span className="text-red-400">✗</span> 生データの総当たり<br/>
                  <span className="text-red-400">✗</span> ただのノイズ
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 border-2 border-cyan-900/50 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🐵</span>
              <div>
                <h3 className="text-xl font-bold text-cyan-400">デジタル物理学の猿</h3>
                <span className="text-xs text-gray-500 font-mono">コンピュータ</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <div className="bg-black/40 rounded p-3 font-mono text-xs border border-cyan-900/50">
                <span className="text-cyan-400">01001101</span> <span className="text-gray-600">{'//'} 物理法則コード</span>
              </div>

              <div className="pl-4 border-l-2 border-cyan-700/50">
                <div className="text-gray-400 mb-2">たまたま「短いコード（物理法則）」が生成される</div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400">→ システムが勝手に実行</div>
                  <div className="text-cyan-400">→ 宇宙をレンダリング開始</div>
                  <div className="text-green-400 flex items-center gap-1 mt-2">
                    <span>✓</span> 複雑さの創発
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-900/40 border border-gray-700 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
              <span className="text-cyan-400 text-xl">💡</span>
            </div>
            <div>
              <div className="text-gray-500 text-xs font-mono mb-2 tracking-wider">CONCLUSION</div>
              <div className="text-xl text-white leading-relaxed">
                「宇宙はランダムに星を作ったのではない。<br/>
                <span className="text-cyan-400 font-bold">プログラムを実行して</span>今の複雑さを生み出したのだ。」
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
