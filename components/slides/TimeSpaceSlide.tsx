export default function TimeSpaceSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">01 / SYSTEM SPEC</div>
        <h3 className="text-4xl font-bold text-white mb-10">時間と空間</h3>

        <div className="space-y-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-baseline gap-4">
              <span className="text-gray-600 font-mono text-sm w-16 shrink-0">過去</span>
              <div>
                <span className="text-gray-300 text-lg">確定済みのログ</span>
                <span className="text-gray-600 font-mono text-sm ml-4">Read Only</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800"></div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4">
              <span className="text-gray-600 font-mono text-sm w-16 shrink-0">未来</span>
              <div>
                <span className="text-gray-300 text-lg">未計算の領域</span>
                <span className="text-gray-600 font-mono text-sm ml-4">Null</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800"></div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-baseline gap-4">
              <span className="text-gray-600 font-mono text-sm w-16 shrink-0">現在</span>
              <div>
                <span className="text-white text-lg font-bold">CPUがまさに演算中の行</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
