export default function EntropySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-red-950/20 to-orange-950/20 p-8">
      <div className="max-w-5xl w-full">
        <div className="bg-gradient-to-br from-red-900/80 to-orange-900/80 backdrop-blur-md rounded-lg p-6 border-2 border-red-500 shadow-2xl">
          <div className="text-3xl font-bold text-orange-300 mb-4 font-mono animate-fade-in">
            宇宙OSの真のKPI：エントロピーのRTA
          </div>

          <div className="space-y-4">
            <div className="bg-black/60 p-4 rounded-lg border border-yellow-500/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-yellow-400 font-mono font-bold text-base mb-2">
                ミッション：最速攻略
              </div>
              <div className="text-gray-200 text-sm">
                いかに早く、いかに徹底的に、宇宙の全エネルギーを<span className="text-cyan-400 font-bold">「意味のある計算（複雑性）」</span>に変えて使い切るか
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-4 rounded-lg border-2 border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-purple-300 font-mono font-bold text-xl mb-3">
                知性の役割
              </div>
              <div className="text-gray-200 space-y-2">
                <div className="text-sm">
                  私たちは、ただのチリよりも<span className="text-yellow-400 font-bold">数万倍効率よく</span>エネルギーを消費する
                </div>
                <div className="bg-black/50 p-2 rounded">
                  <div className="text-cyan-400 font-mono text-xs mb-1">宇宙全体の目的関数を更新する</div>
                  <div className="text-green-400 font-mono text-xs">
                    J(θ) += <span className="text-yellow-400">intelligence.compute()</span>
                  </div>
                </div>
                <div className="text-sm border-l-4 border-orange-500 pl-3">
                  <span className="text-orange-400 font-bold">「私たちが思考し、行動し、文明を築くこと」</span> = 宇宙OSがその生涯で最も「熱く」燃え上がるための<span className="text-pink-400 font-bold">メインプロセス</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/80 p-3 rounded border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-gray-400 font-mono mb-1 text-xs">低効率な処理</div>
                <div className="text-gray-300 text-xs">
                  石ころ、チリ<br />
                  <span className="text-red-400">→ エネルギー消費：低</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/80 to-emerald-900/80 p-3 rounded border-2 border-green-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-green-400 font-mono mb-1 font-bold text-xs">高効率な処理</div>
                <div className="text-gray-200 text-xs">
                  知的生命体<br />
                  <span className="text-green-400 font-bold">→ エネルギー消費：超高</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/60 p-4 rounded-lg border border-cyan-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-cyan-300 text-center text-lg font-bold">
                あなたは宇宙の高性能アクセラレータ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
