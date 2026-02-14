export default function MultiverseCodeSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-5xl w-full flex gap-10 items-start animate-fade-in">
        <div className="flex-1 min-w-0">
          <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">02 / DEPLOY</div>
          <h3 className="text-3xl font-bold text-white mb-10">
            マルチバース = 膨大な数の <span className="font-mono text-gray-400">.env</span>
          </h3>

          <div className="space-y-6">
            <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-gray-300">
                宇宙の「外側」には、物理定数が微妙に違う無数の設定ファイルが存在する
              </div>
              <div className="text-gray-500 text-sm mt-3">
                ほとんどはデタラメな設定で、デプロイした瞬間に Kernel Panic を起こしている
              </div>
            </div>

            <div className="bg-gray-950 rounded-lg p-5 border border-gray-800 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-500">{'// ほとんどの宇宙'}</div>
              <div className="text-gray-400 mt-1">
                <span className="text-gray-500">c=</span>1.0 <span className="text-gray-500">G=</span>999
              </div>
              <div className="text-gray-500 mt-1">{'// Status: Kernel Panic'}</div>
              <div className="mt-4 text-gray-500">{'// 我々の宇宙'}</div>
              <div className="text-gray-300 mt-1">
                <span className="text-gray-500">c=</span>299792458 <span className="text-gray-500">G=</span>6.674e-11
              </div>
              <div className="text-white mt-1">{'// Status: Running (13.8B years)'}</div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-[360px] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
            <img
              src="/image copy copy copy.png"
              alt="Multiverse planets"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
