import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import profileImg from './Adsız tasarım (14).png';

function AppContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();

  // Sayfa geçişi animasyonu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];
    const spacing = 20;
    const maxDistance = 150;

    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({ x, y, baseX: x, baseY: y });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = mousePos.current.x - dot.baseX;
        const dy = mousePos.current.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const waveEffect = Math.sin(force * Math.PI) * force;
          dot.x = dot.baseX + dx * waveEffect * 0.5;
          dot.y = dot.baseY + dy * waveEffect * 0.5;
        } else {
          dot.x += (dot.baseX - dot.x) * 0.08;
          dot.y += (dot.baseY - dot.y) * 0.08;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 100, 100, 0.3)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigationPaths: { [key: string]: string } = {
    home: '/',
    about: '/about',
    experience: '/experience',
    contact: '/contact',
  };

  const currentPath = location.pathname;
  const activeSection = Object.keys(navigationPaths).find(
    key => navigationPaths[key] === currentPath
  ) || 'home';

  const navigateTo = (section: string) => {
    navigate(navigationPaths[section]);
  };

  return (
    <div className="text-white relative overflow-x-hidden" style={{ backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto mx-auto px-4">
        <div className="backdrop-blur-xl bg-black/15 border border-white/20 rounded-full px-12 py-3 shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.35),inset_0_0_10px_4px_rgba(255,255,255,0.15),0_4px_16px_rgba(17,17,26,0.05),0_8px_24px_rgba(17,17,26,0.05),0_16px_56px_rgba(17,17,26,0.05)] hover:bg-black/35 hover:border-white/30 transition-all duration-300 flex items-center justify-between min-w-[800px]">
          <div className="flex items-center gap-2">
            <img 
  src={profileImg} 
  alt="Mehmet Resit Gul" 
  className="w-8 h-8 rounded-full border border-white/20 object-cover"
/>
            <button
              onClick={() => navigateTo('home')}
              className="text-xl font-medium hover:text-cyan-400 transition-colors"
            >
              Mehmet
            </button>
          </div>
          <div className="flex items-center gap-10">
            <button
              onClick={() => navigateTo('about')}
              className={`text-sm font-normal transition-colors relative ${
                activeSection === 'about' ? 'text-cyan-400' : 'hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">about me</span>
              {activeSection === 'about' && (
                <span className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => navigateTo('experience')}
              className={`text-sm font-normal transition-colors relative ${
                activeSection === 'experience' ? 'text-cyan-400' : 'hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">experience</span>
              {activeSection === 'experience' && (
                <span className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`text-sm font-normal transition-colors relative ${
                activeSection === 'contact' ? 'text-cyan-400' : 'hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">contact</span>
              {activeSection === 'contact' && (
                <span className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full"></span>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      <div key={location.pathname} className="animate-fadeIn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; 2025 Mehmet Reşit Gül</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;