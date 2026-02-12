export default function ConsciousnessSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-4xl font-bold text-white mb-4">意識というGUI</h3>
        <div className="text-gray-500 text-lg mb-10">アンチエイリアス処理</div>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300 text-lg">
              デジタルの「ドット絵」のような実態を隠し、<br />
              滑らかな現実を見せてくれるローパスフィルタ。<br />
              それが意識。
            </div>
          </div>

          <div className="bg-gray-950 rounded-lg p-5 border border-gray-800 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-400">
              consciousness = <span className="text-gray-300">antialiasing</span>(rawReality);
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
