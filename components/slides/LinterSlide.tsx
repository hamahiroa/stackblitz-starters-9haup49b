export default function LinterSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-4xl font-bold text-white mb-10">理性というリンター（Linter）</h3>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300 text-lg">
              理性というリンターを通し、<br />
              価値あるデータをマージしよう
            </div>
          </div>

          <div className="bg-gray-950 rounded-lg p-5 border border-gray-800 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-400">
              <span className="text-gray-500">const</span> myLife = <span className="text-gray-500">new</span> PullRequest();
            </div>
            <div className="text-gray-400 mt-1">
              myLife.commit(<span className="text-gray-300">&quot;Add value to universe&quot;</span>);
            </div>
            <div className="text-gray-400 mt-1">
              myLife.push();
            </div>
            <div className="text-gray-400 mt-1">
              universe.merge(myLife);
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
