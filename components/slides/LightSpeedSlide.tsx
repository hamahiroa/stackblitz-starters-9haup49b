export default function LightSpeedSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-cyan-950/20 to-black p-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-md rounded-lg p-6 border-2 border-cyan-400 shadow-2xl">
          <div className="text-3xl font-bold text-cyan-300 mb-4 font-mono animate-fade-in">
            光速 = システムのクロック周波数
          </div>

          <div className="space-y-4">
            <div className="bg-black/60 p-4 rounded-lg border border-cyan-500/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-cyan-400 font-mono font-bold text-base mb-2">
                なぜ光速が限界なのか？
              </div>
              <div className="text-gray-200 text-sm">
                この宇宙というシミュレーションが走っている<span className="text-yellow-400 font-bold">「バス（Bus）の転送速度」</span>や<span className="text-pink-400 font-bold">「最大通信帯域」</span>が決まっているから
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-4 rounded-lg border border-green-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-green-400 font-mono font-bold mb-2 text-sm">仕様：</div>
                <div className="text-gray-300 space-y-1 text-xs">
                  <div>• c = 299,792,458 m/s</div>
                  <div>• ハードウェア定格速度</div>
                  <div>• 全エリアで一定</div>
                  <div>• <span className="text-cyan-400">const SPEED_OF_LIGHT</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 p-4 rounded-lg border border-red-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-red-400 font-mono font-bold mb-2 text-sm">不具合：</div>
                <div className="text-gray-300 space-y-1 text-xs">
                  <div>• 光速を超えて情報を送る</div>
                  <div>• = システムの定格を超える</div>
                  <div>• = オーバークロック</div>
                  <div>• <span className="text-red-400">→ ハードウェア的に不可能</span></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-4 rounded-lg border-2 border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-purple-300 font-mono font-bold text-sm mb-2">
                類似：コンピュータのバス速度
              </div>
              <div className="text-gray-200 text-sm">
                CPUとRAM間のデータ転送速度が限界 = 光速 | これ以上速くしたければ、<span className="text-cyan-400 font-bold">ハードウェアそのものをアップグレード</span>する必要がある
              </div>
            </div>

            <div className="bg-black/70 p-3 rounded font-mono text-xs animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-green-400">{'// 光速制限の実装'}</div>
              <div className="text-gray-300 mt-1">
                <span className="text-purple-400">const</span> <span className="text-cyan-400">MAX_TRANSFER_RATE</span> = <span className="text-yellow-400">299792458</span>; <span className="text-gray-500">{'// m/s'}</span><br />
                <br />
                <span className="text-purple-400">if</span> (velocity &gt; <span className="text-cyan-400">MAX_TRANSFER_RATE</span>) {'{'}<br />
                &nbsp;&nbsp;<span className="text-red-400">throw</span> <span className="text-yellow-400">new</span> <span className="text-green-400">PhysicsError</span>(<span className="text-orange-400">&quot;Cannot exceed bus speed&quot;</span>);<br />
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
