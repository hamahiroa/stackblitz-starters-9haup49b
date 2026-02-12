export default function BlackHoleSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">03 / DEBUG</div>
        <h3 className="text-4xl font-bold text-white mb-10">
          ブラックホール = <span className="font-mono text-gray-400">Loading...</span>
        </h3>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300">
              情報の消去（ランダウアーの原理）が追いつかないほどの高負荷
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-300">
              システムはクロックを極限まで落とし、処理を先送りにする
            </div>
            <div className="text-gray-500 text-sm mt-2">
              これが事象の地平面
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
