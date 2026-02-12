export default function Chapter1Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

      <img
        src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"
        alt="Universe"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">
          第一章：システム要件定義
          <span className="block text-2xl text-cyan-400 mt-4 font-mono">
            （物理学の基礎）
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-yellow-400 font-mono text-lg mb-3">⏰ 時間と空間</div>
            <div className="text-gray-300 text-sm">
              過去 = Read Only ログ<br />
              未来 = Null 領域<br />
              現在 = <span className="text-green-400">CPU演算中</span>
            </div>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-pink-500/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-pink-400 font-mono text-lg mb-3">🌍 相対性理論</div>
            <div className="text-gray-300 text-sm">
              分散システムの時刻同期バグ<br />
              <span className="text-red-400">中央NTPサーバー不在</span><br />
              高速移動 = クロック遅延
            </div>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-purple-400 font-mono text-lg mb-3">⚛️ 量子力学</div>
            <div className="text-gray-300 text-sm">
              遅延評価（Lazy Evaluation）<br />
              観測まで状態未確定<br />
              <code className="text-cyan-400">console.log</code> で初めて確定
            </div>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-orange-400 font-mono text-lg mb-3">📈 統計力学</div>
            <div className="text-gray-300 text-sm">
              エントロピーと技術負債<br />
              低エントロピー → 高エントロピー<br />
              <span className="text-yellow-400">秩序の崩壊は不可避</span>
            </div>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 animate-fade-in-up col-span-2" style={{ animationDelay: '0.5s' }}>
            <div className="text-green-400 font-mono text-lg mb-3">🎻 超弦理論</div>
            <div className="text-gray-300 text-sm">
              11次元のヘッダー情報<br />
              万物は紐の振動 = <span className="text-blue-400">物理法則メソッドの引数が11次元配列</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
