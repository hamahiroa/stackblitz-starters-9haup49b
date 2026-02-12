export default function StringTheorySlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">01 / SYSTEM SPEC</div>
        <h3 className="text-4xl font-bold text-white mb-4">超弦理論</h3>
        <div className="text-gray-500 text-lg mb-10">11次元のヘッダー情報</div>

        <div className="space-y-8">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">仕様</div>
            <div className="text-gray-300 text-lg">
              万物は紐の振動
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">エンジニア的解釈</div>
            <div className="text-gray-300">
              物理法則メソッドに渡される引数が、<br />
              実は11次元の多次元配列である
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
