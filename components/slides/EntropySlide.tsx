export default function EntropySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-4xl font-bold text-white mb-4">宇宙OSの真のKPI</h3>
        <div className="text-gray-500 text-lg mb-10">エントロピーのRTA（最速攻略）</div>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">ミッション</div>
            <div className="text-gray-300">
              いかに早く、いかに徹底的に、<br />
              宇宙の全エネルギーを「意味のある計算」に変えて使い切るか
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">知性の役割</div>
            <div className="text-gray-300">
              私たちは、ただのチリよりも数万倍効率よくエネルギーを消費し、<br />
              宇宙全体の目的関数を更新する高性能アクセラレータ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
