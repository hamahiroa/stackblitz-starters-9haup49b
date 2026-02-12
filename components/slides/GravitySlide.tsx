export default function GravitySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg"
        alt="Black Hole"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-8 border-2 border-orange-500 shadow-2xl">
          <div className="text-3xl font-bold text-orange-400 mb-6 font-mono animate-fade-in">
            🧲 引力の本質：最適化アルゴリズム
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-cyan-400 font-mono font-bold mb-3">宇宙の最適化目標</div>
              <div className="text-gray-300">
                計算コストを最小化する = エネルギー効率を最大化する
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-950/50 border border-green-500 p-4 rounded animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-green-400 font-mono font-bold mb-2 text-lg">高更新頻度エリア</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>✓ 真空（何もない空間）</div>
                  <div>✓ 時間が早く流れる</div>
                  <div>✓ フレームレート高</div>
                  <div className="text-red-400 mt-2">⚠️ 計算コスト：高</div>
                </div>
              </div>

              <div className="bg-red-950/50 border border-red-500 p-4 rounded animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-red-400 font-mono font-bold mb-2 text-lg">低更新頻度エリア</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>✓ 星・惑星の近く</div>
                  <div>✓ 時間が遅く流れる</div>
                  <div>✓ フレームレート低</div>
                  <div className="text-green-400 mt-2">✓ 計算コスト：低</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border-2 border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-yellow-300 font-bold text-xl mb-3">
                💡 結論：引力の正体
              </div>
              <div className="text-gray-200">
                システムは自動的にオブジェクトを<br />
                <span className="text-pink-400 font-bold text-lg">「低コスト（ラグい）エリア」</span>
                へと移動させる。<br />
                <br />
                この<span className="text-cyan-400 font-bold">統計的な圧力</span>が、
                私たちが「引力」と呼んでいるものの正体。
              </div>
            </div>

            <div className="bg-black/70 p-4 rounded font-mono text-xs animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-green-400">{'// 擬似コード'}</div>
              <div className="text-gray-400">
                <span className="text-purple-400">if</span> (computationalCost &gt; threshold) {'{'}<br />
                &nbsp;&nbsp;<span className="text-cyan-400">throttleFrameRate</span>();<br />
                &nbsp;&nbsp;<span className="text-yellow-400">moveToLowCostArea</span>();<br />
                &nbsp;&nbsp;<span className="text-gray-500">{'// これが引力'}</span><br />
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
