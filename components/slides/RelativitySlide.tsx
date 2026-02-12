export default function RelativitySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">01 / SYSTEM SPEC</div>
        <h3 className="text-4xl font-bold text-white mb-4">相対性理論</h3>
        <div className="text-gray-500 text-lg mb-10">分散システムの時刻同期バグ</div>

        <div className="space-y-8">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">仕様</div>
            <div className="text-gray-300 text-lg">
              宇宙には中央のNTPサーバーが存在しない
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">実例</div>
            <div className="text-gray-300 text-lg">
              高速移動するサーバーほどクロックが遅れる
            </div>
            <div className="text-gray-500 text-sm mt-2">
              分散システムにおけるジレンマそのもの
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
