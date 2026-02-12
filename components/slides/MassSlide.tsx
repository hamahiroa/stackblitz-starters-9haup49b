export default function MassSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">03 / DEBUG</div>
        <h3 className="text-4xl font-bold text-white mb-4">質量 = 計算の複雑性</h3>
        <div className="text-gray-500 text-lg mb-10">Computational Complexity</div>

        <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="text-gray-300 text-lg">
            何もない真空（空メモリ）に比べ、<br />
            物質がある場所は計算リクエストが爆増するホットスポット
          </div>
        </div>
      </div>
    </div>
  );
}
