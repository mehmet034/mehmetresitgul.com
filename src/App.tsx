import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function AppContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();

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

      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl mx-auto px-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-3 shadow-2xl flex items-center justify-between hover:bg-white/15 transition-colors duration-300">
          <button
            onClick={() => navigateTo('home')}
            className="text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            Mehmet Resit Gul
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigateTo('about')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'about' ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              about me
            </button>
            <button
              onClick={() => navigateTo('experience')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'experience' ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              experience
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'contact' ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              contact
            </button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; 2025 jakub.works</p>
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
