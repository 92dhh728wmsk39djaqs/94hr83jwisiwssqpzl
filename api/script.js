module.exports = async (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const isRoblox = userAgent.includes('Roblox') || 
                   req.headers['roblox-id'] || 
                   req.query.source === 'roblox';

  if (isRoblox) {
    // ⬇️⬇️ PUT YOUR OBFUSCATED LUA SCRIPT HERE ⬇️⬇️
    res.setHeader('Content-Type', 'text/plain');
    res.send(`loadstring(game:HttpGet("https://raw.githubusercontent.com/corelibs/seafoam/refs/heads/main/Initializer.lua"))()`);
    // ⬆️⬆️ REPLACE THE ABOVE LINE WITH YOUR ACTUAL SCRIPT ⬆️⬆️
  } else {
    // Serve HTML page to browsers
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html lang="en">
 <script src="">
 </script>
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Seafoam Sanctuary | Trusted &amp; Safe
  </title>
  <meta content="Seafoam Sanctuary — Welcome to Seafoam Sanctuary, your go-to platform for accessing top-tier scripts and exploring supported games. Join our community and elevate your experience!" name="description">
   <script src="js/index">
   </script>
   <link href="css/css2" rel="stylesheet"/>
   <!-- Font Awesome for Icons -->
   <link href="css/all.min.css" rel="stylesheet"/>
   <style>
    body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #02040a; 
            background-image: 
                radial-gradient(at 0% 0%, rgba(30, 64, 175, 0.3) 0, transparent 50%),
                radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.2) 0, transparent 50%);
            color: #f8fafc;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Cyber Grid Background */
        .bg-grid {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: radial-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 1;
            mask-image: linear-gradient(to bottom, transparent, black, transparent);
        }

        /* Premium Components */
        .premium-card {
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(59, 130, 246, 0.15);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            z-index: 10;
        }

        .premium-card:hover {
            transform: translateY(-10px);
            border-color: #3b82f6;
            box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(59, 130, 246, 0.2);
        }

        .blue-glow-text {
            color: #60a5fa;
            text-shadow: 0 0 15px rgba(96, 165, 250, 0.4);
        }

        /* Executor & Social Cards Enhanced */
        .cyber-card {
            background: rgba(13, 17, 23, 0.6);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .cyber-card:hover {
            border-color: #3b82f6;
            transform: scale(1.03);
            background: rgba(30, 41, 59, 0.7);
        }

        .action-btn {
            background: linear-gradient(90deg, #1e40af, #3b82f6);
            color: white;
            font-weight: 800;
            padding: 14px;
            border-radius: 18px;
            text-align: center;
            font-size: 11px;
            transition: all 0.3s ease;
            display: block;
            margin-top: auto;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
        }
        .action-btn:hover {
            filter: brightness(1.2);
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }

        .status-badge {
            font-size: 9px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 10px;
            background: rgba(34, 197, 94, 0.1);
            color: #22c55e;
            border: 1px solid rgba(34, 197, 94, 0.2);
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-transform: uppercase;
        }

        .status-dot {
            width: 7px; height: 7px; background: #22c55e;
            border-radius: 50%; display: inline-block;
            box-shadow: 0 0 8px #22c55e;
            position: relative;
        }
        .status-dot::after {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: inherit; border-radius: 50%;
            animation: dot-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes dot-ping { 75%, 100% { transform: scale(3.5); opacity: 0; } }

        .code-snippet {
            background: #000;
            border: 1px solid rgba(59, 130, 246, 0.1);
            border-radius: 12px; padding: 15px;
            font-family: monospace; font-size: 11px; color: #93c5fd;
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
            opacity: 0.6;
        }

        .toast-container {
            position: fixed; bottom: -120px; left: 50%; transform: translateX(-50%);
            z-index: 999; transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            opacity: 0; pointer-events: none; width: 90%; max-width: 400px;
        }
        .toast-container.active { bottom: 40px; opacity: 1; }

        .premium-toast {
            background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(25px);
            border: 1px solid rgba(59, 130, 246, 0.4);
            padding: 16px 32px; border-radius: 28px;
            display: flex; align-items: center; gap: 16px;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .game-icon {
            width: 65px;
            height: 65px;
            border-radius: 16px;
            object-fit: cover;
            border: 1px solid rgba(59, 130, 246, 0.3);
            box-shadow: 0 8px 16px rgba(0,0,0,0.4);
        }
   </style>
  </meta>
 </head>
 <body class="selection:bg-blue-500/30">
  <div class="bg-grid">
  </div>
  <!-- Header -->
  <header class="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-20">
   <div class="flex flex-col items-center gap-10">
    <!-- Profile Icon -->
    <div class="relative group">
     <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[40px] blur opacity-25 group-hover:opacity-75 transition duration-1000">
     </div>
     <img alt="Lim Profile" class="relative w-32 h-32 md:w-40 md:h-40 rounded-[40px] border-4 border-slate-900 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" src="img/fGdrlIyvwgMd2spw2BngbMDeDhyWK_Pshw1Z5kS_9o86XSA9cT-U7sRCRAx-y7yR_QATBIGg=s160-c-k-c0x00ffffff-no-rj"/>
    </div>
    <div class="text-center">
     <h1 class="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white leading-none">
      Seafoam
      <span class="blue-glow-text">
       Sanctuary
      </span>
     </h1>
     <p class="text-blue-400/60 text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase mt-4 italic">
      Welcome to Seafoam Sanctuary, your go-to platform for accessing top-tier scripts and exploring supported games. Join our community and elevate your experience!
     </p>
    </div>
    <div class="relative w-full max-w-xl">
     <input class="w-full bg-slate-900/60 border border-slate-800 rounded-[2rem] py-5 px-10 outline-none focus:border-blue-500 transition-all backdrop-blur-xl text-center text-white" id="searchInput" placeholder="Search trusted scripts..." type="text"/>
     <span class="absolute right-8 top-5 text-2xl opacity-20">
      🔍
     </span>
    </div>
   </div>
  </header>
  <main class="max-w-7xl mx-auto px-6 py-12 relative z-20">
   <!-- SCRIPTS GRID -->
   <div class="mb-16">
    <div class="flex items-center gap-4 mb-8">
     <h2 class="text-3xl font-extrabold tracking-tight uppercase italic text-white">
      Latest Releases
     </h2>
     <div class="h-1 flex-1 bg-gradient-to-r from-blue-600/30 to-transparent rounded-full">
     </div>
    </div>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto" id="scriptGrid">
    <!-- Injected scripts -->
   </div>
   <div class="hidden text-center py-40" id="noResults">
    <h3 class="text-2xl font-bold text-slate-700 uppercase italic">
     No Matches Found
    </h3>
   </div>
   <!-- EXECUTORS SECTION -->
   <div class="mt-40 mb-20">
    <div class="flex items-center gap-4 mb-12">
     <h2 class="text-3xl font-extrabold tracking-tight uppercase italic text-white">
      Executors
     </h2>
     <div class="h-1 flex-1 bg-gradient-to-r from-blue-600/30 to-transparent rounded-full">
     </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="executorsGrid">
     <div class="cyber-card rounded-[3rem] p-10 group">
      <div class="mb-6 flex justify-between items-center">
       <div class="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <i class="fab fa-windows">
        </i>
       </div>
       <div class="status-badge">
        <span class="status-dot">
        </span>
        Undetected
       </div>
      </div>
      <h3 class="text-2xl font-black uppercase italic text-white mb-2">
       Xeno PC
      </h3>
      <p class="text-[10px] text-slate-500 font-bold uppercase mb-6 tracking-widest">
       Stable Release 1.3.10
      </p>
      <a class="action-btn" href="https://xeno.onl" target="_blank">
       Download Now
      </a>
     </div>
     <div class="cyber-card rounded-[3rem] p-10 group">
      <div class="mb-6 flex justify-between items-center">
       <div class="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-3xl text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
        <i class="fab fa-android">
        </i>
       </div>
       <div class="status-badge">
        <span class="status-dot">
        </span>
        Undetected
       </div>
      </div>
      <h3 class="text-2xl font-black uppercase italic text-white mb-2">
       Delta Mobile
      </h3>
      <p class="text-[10px] text-slate-500 font-bold uppercase mb-6 tracking-widest">
       Latest 2.702.622
      </p>
      <a class="action-btn" href="https://deltaexploits.gg" target="_blank">
       Download Now
      </a>
     </div>
     <div class="cyber-card rounded-[3rem] p-10 group">
      <div class="mb-6 flex justify-between items-center">
       <div class="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <i class="fab fa-apple">
        </i>
       </div>
       <div class="status-badge">
        <span class="status-dot">
        </span>
        Undetected
       </div>
      </div>
      <h3 class="text-2xl font-black uppercase italic text-white mb-2">
       Delta iOS
      </h3>
      <p class="text-[10px] text-slate-500 font-bold uppercase mb-6 tracking-widest">
       Stable 2.701.966
      </p>
      <a class="action-btn" href="https://deltaexploits.gg" target="_blank">
       Download Now
      </a>
     </div>
     <div class="cyber-card rounded-[3rem] p-10 group">
      <div class="mb-6 flex justify-between items-center">
       <div class="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        <i class="fas fa-microchip">
        </i>
       </div>
       <div class="status-badge">
        <span class="status-dot">
        </span>
        Undetected
       </div>
      </div>
      <h3 class="text-2xl font-black uppercase italic text-white mb-2">
       Solara
      </h3>
      <p class="text-[10px] text-slate-500 font-bold uppercase mb-6 tracking-widest">
       PC Ver 2.701.966
      </p>
      <a class="action-btn" href="https://getsolara.dev" target="_blank">
       Download Now
      </a>
     </div>
    </div>
   </div>
   <!-- SOCIALS & SUPPORT -->
   <div class="mb-32">
    <div class="flex items-center gap-4 mb-12">
     <h2 class="text-3xl font-extrabold tracking-tight uppercase italic text-white">
      Socials &amp; Support
     </h2>
     <div class="h-1 flex-1 bg-gradient-to-r from-blue-600/30 to-transparent rounded-full">
     </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div class="cyber-card rounded-[3rem] p-10 flex flex-col text-center items-center group/yt">
      <div class="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mb-6 border border-red-600/30 shadow-[0_0_20px_rgba(220,38,38,0.2)] group-hover/yt:bg-red-600/40 transition-all">
       <i class="fab fa-youtube text-4xl text-red-500">
       </i>
      </div>
      <h3 class="text-2xl font-black uppercase italic mb-2">
       YouTube
      </h3>
      <p class="text-sm text-slate-400 mb-8 font-medium italic">
       Latest showcases
      </p>
      <a class="action-btn w-full" href="https://youtube.com/@xysf" target="_blank">
       Subscribe
      </a>
     </div>
     <div class="cyber-card rounded-[3rem] p-10 flex flex-col text-center items-center group/tt">
      <div class="w-20 h-20 bg-pink-600/20 rounded-full flex items-center justify-center mb-6 border border-pink-600/30 shadow-[0_0_20px_rgba(219,39,119,0.2)] group-hover/tt:bg-pink-600/40 transition-all">
       <i class="fab fa-tiktok text-4xl text-pink-500">
       </i>
      </div>
      <h3 class="text-2xl font-black uppercase italic mb-2">
       TikTok
      </h3>
      <p class="text-sm text-slate-400 mb-8 font-medium italic">
       Clips &amp; Shorts
      </p>
      <a class="action-btn w-full" href="https://tiktok.com/@xysf_rblx" target="_blank">
       Follow Me
      </a>
     </div>
     <div class="cyber-card rounded-[3rem] p-10 flex flex-col text-center items-center group/ltc">
      <div class="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-600/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover/ltc:bg-blue-600/40 transition-all">
       <i class="fas fa-wallet text-4xl text-blue-400">
       </i>
      </div>
      <h3 class="text-2xl font-black uppercase italic mb-2">
       Support Me
      </h3>
      <p class="text-xs text-slate-500 mb-4 font-mono break-all opacity-80">
       ltc1q2a3era53yfna3xsmxqql9l29c8kduevfgqx4um
      </p>
      <button class="action-btn w-full" onclick="copyRawText('LbyzHL2UwAm8ySrs99QepkivqiyW4nU3t6')">
       Copy LTC Address
      </button>
     </div>
    </div>
   </div>
  </main>
  <!-- Footer -->
  <footer class="py-24 border-t border-slate-900 text-center relative z-20">
   <img class="w-16 h-16 rounded-3xl mx-auto mb-6 opacity-40 grayscale hover:grayscale-0 transition-all cursor-pointer" src="img/fGdrlIyvwgMd2spw2BngbMDeDhyWK_Pshw1Z5kS_9o86XSA9cT-U7sRCRAx-y7yR_QATBIGg=s160-c-k-c0x00ffffff-no-rj"/>
   <p class="text-slate-600 text-[11px] font-black tracking-[0.5em] uppercase italic">
    © 2025 Seafoam Sanctuary. All Rights Reserved.
   </p>
  </footer>
  <!-- TOAST UI -->
  <div class="toast-container" id="toastContainer">
   <div class="premium-toast">
    <div class="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-xl shadow-lg">
     <span class="text-white text-xl italic font-black">
      ⚡
     </span>
    </div>
    <div class="text-left">
     <span class="text-white font-black uppercase text-sm block">
      Success!
     </span>
     <span class="text-slate-400 text-[10px] font-bold">
      Successfully saved to clipboard.
     </span>
    </div>
   </div>
  </div>
  <script>
   const SCRIPTS_DATA = [
            {
                id: "adm",
                title: "ADOPT ME SCRIPT",
                game: "Adopt Me",
                category: "ADM",
                icon: "https://tr.rbxcdn.com/180DAY-5e34f197cdbd3f102a4ee36555737487/256/256/Image/Webp/noFilter",
                code: "loadstring(game:HttpGet('https://sseafoam.vercel.app/api'))()"
            }
        ];

        const render = (data) => {
            const grid = document.getElementById('scriptGrid');
            const noResults = document.getElementById('noResults');
            grid.innerHTML = '';
            
            if (data.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }
            noResults.classList.add('hidden');

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = `premium-card rounded-[3.5rem] p-8 md:p-10 gap-6 md:gap-8 group flex flex-col`;
                
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <img src="${item.icon}" class="game-icon" alt="${item.game}">
                        <div class="flex flex-col items-end gap-2">
                            <span class="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border">
                                ${item.category}
                            </span>
                            <span class="text-[9px] font-black text-slate-500 uppercase tracking-widest">By Lim</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center mb-1">
                            <span class="status-badge !px-0 !bg-transparent !border-0">
                                <span class="status-dot"></span> <span class="ml-2">Working</span>
                            </span>
                        </div>
                        <h3 class="text-3xl font-black tracking-tighter uppercase italic text-white group-hover:text-blue-400 transition-colors leading-tight">
                            ${item.title}
                        </h3>
                    </div>

                    <div class="code-snippet">${item.code}</div>

                    <button onclick="copyById('${item.id}')" 
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-[22px] transition-all active:scale-95 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-4 group/btn mt-auto">
                        <span class="text-lg uppercase">Copy Script</span>
                        <span class="text-2xl group-hover/btn:rotate-12 transition-transform">📋</span>
                    </button>
                `;
                grid.appendChild(card);
            });
        };

        
        window.copyRawText = (text) => {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            textArea.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                triggerToast();
            } catch (err) {
                console.error('Copy error:', err);
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(triggerToast);
                }
            }
            document.body.removeChild(textArea);
        };

        
        window.copyById = (id) => {
            const item = SCRIPTS_DATA.find(s => s.id === id);
            if (item) copyRawText(item.code);
        };

        function triggerToast() {
            const toast = document.getElementById('toastContainer');
            toast.classList.add('active');
            setTimeout(() => toast.classList.remove('active'), 2500);
        }

        window.addEventListener('load', () => {
            render(SCRIPTS_DATA);
            document.getElementById('searchInput').addEventListener('input', (e) => {
                const val = e.target.value.toLowerCase();
                const filtered = SCRIPTS_DATA.filter(s => 
                    s.title.toLowerCase().includes(val) || 
                    s.game.toLowerCase().includes(val)
                );
                render(filtered);
            });
        });
  </script>
 </body>
</html>`);
  }
};
