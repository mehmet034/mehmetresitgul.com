import { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

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

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
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
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            Mehmet Resit Gul
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              about me
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              contact
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">hi, i'm mehmet!</h1>
          <p className="text-xl text-gray-400">
            17 y.o. startup founder & AI automation builder
          </p>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">
            about me<span className="text-cyan-400">_</span>
          </h2>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="text-cyan-400 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-bold mb-4">professional bio</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  17 yaşında bir startup kurucusu ve AI otomasyon geliştiricisiyim.
                  Takazade'yi — Türkiye'nin ilk ve tek yetenek takas platformunu —
                  tamamen bireysel olarak, sıfır yatırım ile hayata geçirdim.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Şu anda 11. sınıf öğrencisiyim; okulun yanında aktif şekilde ürün
                  geliştiriyor, otomasyon projeleri üretiyor ve e-ticaret tarafında
                  markaların satış süreçlerini büyüten, operasyon yükünü azaltan ve
                  günlük akışlarını otomatikleştiren sistemler tasarlıyorum.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Çalışmalarım; yapay zekâ, no-code prototipleme ve bilişsel
                  nörobilim alanlarını birleştiriyor. Kimi zaman kendi mağazalarım,
                  kimi zaman birlikte çalıştığım markalar için; sipariş akışını,
                  müşteri iletişimini, veri işleme adımlarını ve backend süreçlerini
                  hızlandıran küçük ama etkili mikro sistemler geliştiriyorum.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Büyük vizyon anlatmak yerine çalışan ürün üretmeyi tercih ediyorum.
                  Felsefem net:{' '}
                  <span className="text-cyan-400 font-semibold">
                    üret, test et, geliştir, güçlendir.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <Code className="text-cyan-400 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-bold mb-6">key skills & expertise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Sparkles size={16} /> AI & Otomasyon
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Yapay zekâ destekli sistemler ve süreç otomasyonları
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Sparkles size={16} /> E-ticaret Sistemleri
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Satış akışı, müşteri yönetimi ve operasyonel optimizasyon
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Sparkles size={16} /> No-code Prototipleme
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Hızlı ürün geliştirme ve MVP oluşturma
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Sparkles size={16} /> Ürün Geliştirme
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Sıfırdan ürün tasarımı ve ölçeklendirme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">
            experience<span className="text-cyan-400">_</span>
          </h2>

          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-2">Takazade</h3>
              <p className="text-cyan-400 mb-4">Kurucu & Geliştirici</p>
              <p className="text-gray-300 leading-relaxed">
                Türkiye'nin ilk ve tek yetenek takas platformu. Sıfır yatırımla,
                tamamen bireysel olarak geliştirdim ve hayata geçirdim. Platform,
                kullanıcıların yeteneklerini takas etmelerine olanak tanıyor.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-2">AI Otomasyon Projeleri</h3>
              <p className="text-cyan-400 mb-4">Bağımsız Geliştirici</p>
              <p className="text-gray-300 leading-relaxed">
                E-ticaret markaları için sipariş yönetimi, müşteri iletişimi ve
                backend süreçlerini otomatikleştiren mikro sistemler geliştiriyorum.
                Her proje, operasyonel verimliliği artırmak ve iş yükünü azaltmak
                üzerine odaklanıyor.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-2">Ürün Geliştirme</h3>
              <p className="text-cyan-400 mb-4">Çok Disiplinli Yaklaşım</p>
              <p className="text-gray-300 leading-relaxed">
                Yapay zekâ, no-code araçlar ve bilişsel nörobilim bilgilerimi
                birleştirerek, kullanıcı deneyimini merkeze alan ürünler
                tasarlıyorum. Test odaklı geliştirme ve sürekli iyileştirme
                prensipleriyle çalışıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-8 w-full">
          <h2 className="text-5xl font-bold mb-12">
            contact<span className="text-cyan-400">_</span>
          </h2>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <Twitter className="text-cyan-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">twitter</p>
                  <a
                    href="https://twitter.com/jakub_works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-lg"
                  >
                    @jakub_works
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Linkedin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">linkedin</p>
                  <a
                    href="https://linkedin.com/in/jakubkrzypczak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-lg"
                  >
                    jakubkrzypczak
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">email</p>
                  <a
                    href="mailto:me@jakub.works"
                    className="text-cyan-400 hover:underline text-lg"
                  >
                    me@jakub.works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; 2025 jakub.works</p>
      </footer>
    </div>
  );
}

export default App;
