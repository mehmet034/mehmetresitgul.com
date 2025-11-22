function Experience() {
  return (
    <section className="min-h-screen py-20 relative z-10">
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
  );
}

export default Experience;
