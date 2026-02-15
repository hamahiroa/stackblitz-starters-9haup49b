export default function DarkEnergySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-3 tracking-widest">02 / INFRASTRUCTURE</div>
        <h3 className="text-2xl font-bold text-white mb-1">
          宇宙システム構成図：未知なる95%のインフラ
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          現在の宇宙（138億光年）における全エネルギーの割合とエンジニア的解釈
        </p>

        <div className="flex gap-8 items-start">
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="/image copy copy copy copy.png"
                alt="Universe energy composition pie chart"
                className="w-[480px] object-contain"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0 space-y-3">
            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-800 border-l-4 border-l-blue-600 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-blue-400 font-bold text-lg">69%</span>
                <span className="text-white font-semibold text-sm">Dark Energy</span>
                <span className="text-gray-600 font-mono text-xs ml-auto">Auto Scaling</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                宇宙の膨張を加速させている正体不明のエネルギー。空間そのものが持つ性質とも考えられている。
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                システムの負荷に合わせて自動的にリソース（空間）を拡張し続ける、巨大なバックグラウンドプロセス。
              </p>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-800 border-l-4 border-l-gray-500 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-gray-300 font-bold text-lg">26%</span>
                <span className="text-white font-semibold text-sm">Dark Matter</span>
                <span className="text-gray-600 font-mono text-xs ml-auto">Index</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                光を出さず電磁波で観測できないが、重力の影響でのみ存在が確認される物質。銀河を繋ぎ止める役割。
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                ユーザーの目には触れないが、システムを効率的に維持・形成するために不可欠な、巨大なデータベースの索引。
              </p>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-800 border-l-4 border-l-green-600 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-green-400 font-bold text-lg">4.8%</span>
                <span className="text-white font-semibold text-sm">Matter</span>
                <span className="text-gray-600 font-mono text-xs">+</span>
                <span className="text-red-400 font-bold text-lg">0.005%</span>
                <span className="text-white font-semibold text-sm">Light</span>
                <span className="text-gray-600 font-mono text-xs ml-auto">UI / Signal</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                水素、ヘリウム、炭素など私たちが知っている元素と光子。星、惑星、そして私たち自身。
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                私たちが直接認識・操作できる、システム全体のほんの一部（約5%）のUIと通信信号。
              </p>
            </div>

            <div className="bg-gray-950/80 rounded-lg p-4 border border-gray-700 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <p className="text-gray-300 text-xs leading-relaxed">
                私たちが知覚している「世界」は、宇宙という巨大なシステムの<span className="text-white font-semibold">わずか5%の表層（UI）</span>に過ぎない。
                残りの95%は、目に見えない<span className="text-gray-400 font-semibold">Index</span>と<span className="text-blue-400 font-semibold">Auto Scaling</span>によって支えられている。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
