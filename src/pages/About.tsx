import { Briefcase, Code, Sparkles } from 'lucide-react';

function About() {
  return (
    <section className="min-h-screen py-20 relative z-10">
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
  );
}

export default About;
