export default function Chapter2Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-orange-950/30 to-black p-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">
          第二章：システムのデプロイとストレージ
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-lg p-8 border border-orange-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-orange-300 mb-4 font-mono flex items-center gap-3">
              <span className="text-5xl">🚀</span>
              ビッグバン = <code className="text-green-400">docker-compose up</code>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-black/50 rounded p-4">
                <div className="text-cyan-400 font-mono mb-2">1. Provisioning</div>
                <div className="text-gray-300 text-sm">
                  インフレーション<br />
                  → 空間リソースの<span className="text-yellow-400">爆速確保</span>
                </div>
              </div>
              <div className="bg-black/50 rounded p-4">
                <div className="text-cyan-400 font-mono mb-2">2. Env Loading</div>
                <div className="text-gray-300 text-sm">
                  <code className="text-green-400">c</code>（光速）<br />
                  <code className="text-green-400">G</code>（重力定数）<br />
                  を .env からロード
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-purple-400 mb-3 font-mono">
              ストレージ仕様：ブラックホール
            </div>
            <div className="text-gray-300">
              3Dの宇宙は、宇宙の果てという<span className="text-cyan-400">2Dストレージ</span>に刻まれた<br />
              バイナリデータの<span className="text-pink-400 font-bold">プロジェクション（投影）</span>に過ぎない
              <br />
              <span className="text-yellow-400 text-sm">→ ホログラフィー原理</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg p-6 border border-blue-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-blue-400 mb-3 font-mono">
              Scaling：ダークエネルギーとダークマター
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-purple-400 font-bold">ダークエネルギー：</span>
                <br />
                <span className="text-gray-300">動的なメモリ増設（Scaling）</span>
              </div>
              <div>
                <span className="text-blue-400 font-bold">ダークマター：</span>
                <br />
                <span className="text-gray-300">裏方データ（インデックス）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
