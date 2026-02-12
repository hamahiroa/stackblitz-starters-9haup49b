export default function StorageSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">02 / STORAGE</div>
        <h3 className="text-4xl font-bold text-white mb-10">ストレージ仕様</h3>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">ホログラフィー原理</div>
            <div className="text-gray-300">
              3Dの宇宙は、宇宙の果てという2Dストレージに刻まれた<br />
              バイナリデータのプロジェクション（投影）に過ぎない
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-500 font-mono text-xs mb-3">ダークエネルギー</div>
              <div className="text-gray-300">動的なメモリ増設</div>
              <div className="text-gray-500 text-sm mt-1">Auto Scaling</div>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-gray-500 font-mono text-xs mb-3">ダークマター</div>
              <div className="text-gray-300">画面には映らない裏方データ</div>
              <div className="text-gray-500 text-sm mt-1">Index</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
