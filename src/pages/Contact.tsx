import { Mail, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold mb-12">
          contact<span className="text-cyan-400">_</span>
        </h2>

        <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
               
              <Twitter className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm">twitter</p>
                <a
                  href="https://twitter.com/mresitcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  @mresitcom
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <Linkedin className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm">linkedin</p>
                <a
                  href="https://linkedin.com/in/mehmetresitgul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  mehmetresitgul
                </a>
              </div> 
            </div>

            <div className="flex items-center gap-4 group"> 
              <Mail className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm">email</p>
                <a
                  href="mailto:mehmetresitgul@outlook.com.tr"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  mehmetresitgul@outlook.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
