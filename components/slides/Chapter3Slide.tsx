export default function Chapter3Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-blue-950/20 to-black p-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">
          第三章：システムのバグと最適化
          <span className="block text-2xl text-cyan-400 mt-4 font-mono">
            （重力と時間の正体）
          </span>
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg p-6 border border-blue-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-blue-400 mb-3 font-mono flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              質量 (M) = 計算の複雑性
            </div>
            <div className="text-gray-300">
              真空（空メモリ）に比べ、物質がある場所は<br />
              <span className="text-yellow-400 font-bold">計算リクエストが爆増するホットスポット</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg p-6 border border-red-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-red-400 mb-3 font-mono flex items-center gap-3">
              <span className="text-3xl">🐌</span>
              重力 = 処理落ち（Lag）
            </div>
            <div className="text-gray-300">
              高負荷エリアではCPU負荷が増大<br />
              → <span className="text-orange-400">スロットリング（処理落ち）</span>が発生<br />
              <span className="text-cyan-400 text-sm">
                これが「重力が強いと時間が遅れる」の正体
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg p-6 border border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-purple-400 mb-3 font-mono flex items-center gap-3">
              <span className="text-3xl">🧲</span>
              引力 = コスト削減の副作用
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="bg-black/50 rounded p-3">
                <div className="text-green-400 font-mono mb-1">真空（サクサク）</div>
                <div className="text-gray-300 text-sm">
                  更新頻度が高い<br />
                  <span className="text-red-400">→ コスト高</span>
                </div>
              </div>
              <div className="bg-black/50 rounded p-3">
                <div className="text-blue-400 font-mono mb-1">星の近く（ラグい）</div>
                <div className="text-gray-300 text-sm">
                  更新頻度が低い<br />
                  <span className="text-green-400">→ コスト安</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-yellow-300 text-sm border-t border-gray-700 pt-3">
              システムは計算コストをケチるため、オブジェクトを<br />
              「更新頻度の低い場所」へ掃き出す。<br />
              <span className="text-pink-400 font-bold">この統計的な圧力こそが引力である</span>
            </div>
          </div>

          <div className="bg-black rounded-lg p-6 border-2 border-red-600 animate-fade-in-up animate-pulse-slow" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl font-bold text-red-500 mb-3 font-mono flex items-center gap-3">
              <span className="text-3xl">⚫</span>
              ブラックホール = Loading... 画面
            </div>
            <div className="text-gray-300 text-sm">
              処理が追いつかないほどの高負荷<br />
              システムはクロックを極限まで落とし、処理を先送り<br />
              <span className="text-cyan-400">→ 事象の地平面</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
