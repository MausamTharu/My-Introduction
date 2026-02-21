export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white py-10 px-4 transition-colors duration-300">
      <div className="container mx-auto flex flex-col gap-y-6">
        <div className="relative overflow-hidden border border-black/5 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <aside className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Wel Come To You 💗
              </h3>
              <p className="text-slate-600 pl-10 dark:text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed">
                hi , I am Mausam
              </p>
              <p className="text-slate-300 italic">I am Waiting for You</p>
              <button className="mt-4 px-6 py-2 bg-black dark:bg-white dark:text-black text-white rounded-full font-medium hover:opacity-80 transition">
                start
              </button>
            </aside>
            <div className="flex justify-center md:justify-end">
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <code className="relative block rounded-lg p-6 bg-black dark:bg-neutral-900 border border-white/10 text-sm md:text-base shadow-2xl">
                  <span className="text-blue-400">&lt;h3&gt;</span>
                  <span className="text-white font-mono font-bold mx-2">Developed by Mausam</span>
                  <span className="text-blue-400">&lt;/h3&gt;</span>
                </code>
              </div>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 
                        [&>div]:h-48 [&>div]:rounded-xl [&>div]:border [&>div]:border-black/10 
                        [&>div]:dark:border-white/10 [&>div]:flex [&>div]:items-center 
                        [&>div]:justify-center [&>div]:bg-white/50 [&>div]:dark:bg-white/5 
                        [&>div]:backdrop-blur-sm [&>div]:font-medium [&>div]:shadow-sm">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </div>

      </div>
    </main>
  );
} 