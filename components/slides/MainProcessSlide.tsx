export default function MainProcessSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-3xl font-bold text-white mb-10">メインプロセス</h3>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300 text-lg leading-relaxed">
              私たちが思考し、行動し、文明を築くことは、<br />
              宇宙OSがその生涯で最も「熱く」燃え上がるためのメインプロセス
            </div>
          </div>

          <div className="bg-gray-950 rounded-lg p-5 border border-gray-800 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500">{'// 宇宙全体の目的関数'}</div>
            <div className="text-gray-400 mt-2">
              J(theta) += <span className="text-gray-300">intelligence.compute()</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
