export default function BigBangSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">02 / DEPLOY</div>
        <h3 className="text-4xl font-bold text-white mb-10">
          ビッグバン = <span className="font-mono text-gray-400">docker-compose up</span>
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">Provisioning</div>
            <div className="text-gray-300">
              インフレーション<br />
              空間リソースの爆速確保
            </div>
            <div className="text-gray-500 text-sm mt-2">
              数秒で全メモリ領域を確保
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">Env Loading</div>
            <div className="text-gray-300">
              <span className="font-mono">c</span>（光速）、<span className="font-mono">G</span>（重力定数）を .env からロード
            </div>
            <div className="text-gray-500 text-sm mt-2">
              1ビットのミスで即クラッシュする微調整バリデーション
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
