import { Briefcase, Code, Sparkles } from 'lucide-react';

function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-12">
          about me<span className="text-cyan-400">_</span>
        </h2>

        <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <Briefcase className="text-cyan-400 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-bold mb-4">professional bio</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Hi, I'm Mehmet Reşit Gül. I'm a 17-year-old startup founder and AI automation developer.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I built Turkey's first and only talent exchange platform. I live in Istanbul, and I'm currently an 11th-grade student with three years of hands-on industry experience through continuous internships. Besides that, I build products, create n8n-based automation systems, and design workflows that help e-commerce brands grow their sales, reduce operational load, and automate their daily processes.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My work sits at the intersection of artificial intelligence, no-code prototyping, and cognitive neuroscience. For my own projects and for the brands I work with, I build small but powerful micro-systems that speed up order flow, customer communication, data processing, and backend operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I don't care about talking big. I care about building things that work.
                My philosophy is simple: {' '}
                <span className="text-cyan-400 font-semibold">
                  build, test, provide value, improve, repeat.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-8 shadow-2xl">
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
  );
} 

export default About;