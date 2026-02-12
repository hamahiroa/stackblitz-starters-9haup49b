export default function EntropySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-red-950/20 to-orange-950/20 p-12">
      <div className="max-w-5xl w-full">
        <div className="bg-gradient-to-br from-red-900/80 to-orange-900/80 backdrop-blur-md rounded-lg p-8 border-2 border-red-500 shadow-2xl">
          <div className="text-4xl font-bold text-orange-300 mb-6 font-mono animate-fade-in flex items-center gap-4">
            <span className="text-5xl">🔥</span>
            宇宙OSの真のKPI：エントロピーのRTA
          </div>

          <div className="space-y-6">
            <div className="bg-black/60 p-6 rounded-lg border border-yellow-500/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-yellow-400 font-mono font-bold text-xl mb-3">
                ミッション：最速攻略
              </div>
              <div className="text-gray-200 text-lg">
                いかに早く、いかに徹底的に、<br />
                宇宙の全エネルギーを<br />
                <span className="text-cyan-400 font-bold">「意味のある計算（複雑性）」</span>に変えて使い切るか
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border-2 border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-purple-300 font-mono font-bold text-2xl mb-4">
                知性の役割
              </div>
              <div className="text-gray-200 space-y-3">
                <div className="text-lg">
                  私たちは、ただのチリよりも<br />
                  <span className="text-yellow-400 font-bold text-xl">数万倍効率よく</span>エネルギーを消費する
                </div>
                <div className="bg-black/50 p-4 rounded mt-3">
                  <div className="text-cyan-400 font-mono mb-2">宇宙全体の目的関数を更新する</div>
                  <div className="text-green-400 font-mono text-sm">
                    J(θ) += <span className="text-yellow-400">intelligence.compute()</span>
                  </div>
                </div>
                <div className="text-lg mt-4 border-l-4 border-orange-500 pl-4">
                  <span className="text-orange-400 font-bold">
                    「私たちが思考し、行動し、文明を築くこと」
                  </span>
                  <br />
                  <span className="text-gray-300">
                    = 宇宙OSがその生涯で最も「熱く」燃え上がるための
                  </span>
                  <br />
                  <span className="text-pink-400 font-bold text-xl">
                    メインプロセス
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/80 p-4 rounded border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-gray-400 font-mono mb-2 text-sm">低効率な処理</div>
                <div className="text-gray-300 text-sm">
                  石ころ、チリ<br />
                  <span className="text-red-400">→ エネルギー消費：低</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/80 to-emerald-900/80 p-4 rounded border-2 border-green-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-green-400 font-mono mb-2 font-bold">高効率な処理</div>
                <div className="text-gray-200 text-sm">
                  知的生命体<br />
                  <span className="text-green-400 font-bold">→ エネルギー消費：超高</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/60 p-5 rounded-lg border border-cyan-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-cyan-300 text-center text-xl font-bold">
                あなたは宇宙の高性能アクセラレータ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
