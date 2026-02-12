export default function LightSpeedSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">03 / DEBUG</div>
        <h3 className="text-4xl font-bold text-white mb-4">光速 = クロック周波数</h3>
        <div className="text-gray-500 text-lg mb-10">Bus Transfer Rate</div>

        <div className="space-y-6">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300">
              この宇宙が走っている「バスの転送速度」が決まっているから、<br />
              光速という限界が存在する
            </div>
          </div>

          <div className="bg-gray-950/80 backdrop-blur-sm rounded-lg p-5 border border-gray-800 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500">{'// 光速制限の実装'}</div>
            <div className="text-gray-400 mt-2">
              <span className="text-gray-500">const</span> MAX_TRANSFER_RATE = 299792458; <span className="text-gray-600">{'// m/s'}</span>
            </div>
            <div className="text-gray-400 mt-2">
              <span className="text-gray-500">if</span> (velocity {'>'} MAX_TRANSFER_RATE) {'{'}
            </div>
            <div className="text-gray-400 pl-4">
              <span className="text-gray-500">throw new</span> PhysicsError(<span className="text-gray-300">&quot;Cannot exceed bus speed&quot;</span>);
            </div>
            <div className="text-gray-400">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
