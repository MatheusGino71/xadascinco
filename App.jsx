import React, { useState, useEffect } from 'react';

function App() {
  // State para Portfolio Filter
  const [filter, setFilter] = useState('all');

  // State para Briefing Form
  const [briefingForm, setBriefingForm] = useState({
    name: '',
    brand: '',
    budget: '',
    message: ''
  });

  // Re-trigger animation on filter change
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [filter]);

  const handleBriefingChange = (e) => {
    const { name, value } = e.target;
    setBriefingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#F4F3F2]/80 backdrop-blur-md border-b border-[#8C8A82]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-[#504D4B] tracking-wider font-playfair">XÁ DAS CINCO</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Expertise</a>
            <a href="#methodology" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Metodologia</a>
            <a href="#portfolio" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Cases</a>
            <a href="#contact" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Contato</a>
          </div>

          <a href="#briefing" className="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-[#504D4B] hover:bg-[#8C8A82] text-white inline-block">
            Falar com Especialista
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1554520521-d2c3201371e7?q=80&w=2070&auto=format&fit=crop" alt="Editorial Fashion Photography" className="w-full h-full object-cover object-center lg:object-right" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F2] via-[#F4F3F2]/95 to-transparent/10 md:bg-gradient-to-r md:from-[#F4F3F2] md:via-[#F4F3F2] md:to-transparent"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block uppercase text-xs font-semibold text-[#8C8A82] tracking-[0.2em] bg-white/50 border-[#8C8A82] border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Comunicação Estratégica & Branding</span>
            <h1 className="leading-[0.95] uppercase md:text-7xl lg:text-7xl text-4xl font-semibold text-[#504D4B] tracking-tighter mb-8 font-playfair">Elevando marcas ao status de ícone.</h1>

            <p className="leading-relaxed text-lg md:text-xl text-[#8C8A82] mb-10 max-w-xl font-lato">
              Criamos conexões autênticas entre marcas de beleza, moda e lifestyle de alto padrão e o seu público. Construímos histórias, posicionamento e estética editorial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#portfolio" className="inline-flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#8C8A82] font-medium text-white bg-[#504D4B] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg">Explorar Cases</a>
              <a href="#briefing" className="inline-flex items-center justify-center transition-all hover:bg-[#C4B09D]/10 font-medium text-[#504D4B] bg-white border-[#8C8A82] border rounded-full pt-4 pr-8 pb-4 pl-8">Solicitar Assessment</a>
            </div>

            <div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-[#8C8A82]/30">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <iconify-icon icon="solar:star-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl text-[#504D4B] fill-[#504D4B]"></iconify-icon>
                  <span className="text-2xl font-bold tracking-tight text-[#504D4B] font-playfair">4.9</span>
                </div>
                <p className="leading-tight text-sm font-medium text-[#8C8A82]">Avaliação de Clientes</p>
              </div>
              <div className="w-px h-12 bg-[#8C8A82]/30"></div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl font-bold tracking-tight text-[#504D4B] font-playfair">8+</span>
                </div>


                
                <p className="leading-tight text-sm font-medium text-[#8C8A82]">Anos de Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-[#F4F3F2] pt-24 pb-24 border-t border-[#8C8A82]/20" id="expertise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">O Que Fazemos</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-6 leading-tight text-[#504D4B] font-playfair">Nossas Expertises.</h2>
              <p className="leading-relaxed text-lg text-[#8C8A82] mb-8">
                Criamos conexões autênticas e posicionamento estratégico para marcas que desejam alcançar status de ícone nos mercados de beleza, moda e lifestyle de alto padrão.
              </p>
              <a href="#contact" className="inline-flex items-center text-base font-medium border-b pb-1 text-[#504D4B] hover:text-[#8C8A82] border-[#504D4B]">
                Conhecer Mais <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="w-4 h-4 text-lg ml-2"></iconify-icon>
              </a>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#EBE8E4] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="mb-8 text-[#8C8A82]"><iconify-icon icon="solar:video-linear" style={{ strokeWidth: '1.5' }} className="w-10 h-10 text-4xl"></iconify-icon></div>
                <h3 className="text-xl font-semibold tracking-tight mb-2 text-[#504D4B] font-playfair">Direção Criativa & Audiovisual</h3>
                <p className="text-sm font-medium text-[#8C8A82] mb-3 tracking-wide">Editorial & Produção</p>
                <p className="text-lg text-[#8C8A82]">Campanhas visuais de impacto, vídeos editoriais e conteúdo audiovisual que conta a história da sua marca.</p>
              </div>
              <div className="p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-white">
                <div className="mb-8 text-[#8C8A82]"><iconify-icon icon="solar:bookmark-outline-linear" style={{ strokeWidth: '1.5' }} className="w-10 h-10 text-4xl"></iconify-icon></div>
                <h3 className="text-xl font-semibold tracking-tight mb-2 text-[#504D4B] font-playfair">Branding & Posicionamento</h3>
                <p className="text-sm font-medium text-[#8C8A82] mb-3 tracking-wide">Identidade & Estratégia</p>
                <p className="text-lg text-[#8C8A82]">Construindo identidades visuais sofisticadas e posicionamento estratégico que diferenciam sua marca no mercado.</p>
              </div>
              <div className="p-8 rounded-xl border border-[#8C8A82]/20 hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-[#F4F3F2] md:col-span-2 lg:col-span-1">
                <div className="mb-8 text-[#8C8A82]"><iconify-icon icon="solar:people-outline-rounded-linear" style={{ strokeWidth: '1.5' }} className="w-10 h-10 text-4xl"></iconify-icon></div>
                <h3 className="text-xl font-semibold tracking-tight mb-2 text-[#504D4B] font-playfair">Assessoria & Relações Públicas</h3>
                <p className="text-sm font-medium text-[#8C8A82] mb-3 tracking-wide">Mídia & Influência</p>
                <p className="text-lg text-[#8C8A82]">Gerenciando narrativas de marca, relações com mídia e influenciadores de forma estratégica e elegante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 border-t bg-white border-[#8C8A82]/20" id="methodology">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-12 gap-8 border-[#8C8A82]/20">
            <div className="max-w-2xl">
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-2">Como Trabalhamos</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-4 text-[#504D4B] font-playfair">Nossa Metodologia</h2>
              <p className="text-lg text-[#8C8A82]">Um processo estratégico e refinado para elevar sua marca ao status de ícone.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 relative overflow-hidden group">
              <div className="text-6xl font-bold text-[#C4B09D]/30 absolute -top-4 -right-4 group-hover:scale-110 transition-transform font-playfair">1</div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#504D4B] mb-4 mt-4 font-playfair">Imersão & Diagnóstico</h3>
                <p className="leading-relaxed text-[#8C8A82]">Mergulhamos na essência de sua marca, analisando mercado, público e posicionamento atual.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 relative overflow-hidden group">
              <div className="text-6xl font-bold text-[#C4B09D]/30 absolute -top-4 -right-4 group-hover:scale-110 transition-transform font-playfair">2</div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#504D4B] mb-4 mt-4 font-playfair">Planejamento Estratégico</h3>
                <p className="leading-relaxed text-[#8C8A82]">Desenvolvemos estratégia de comunicação integrada, mapeando narrativas e touchpoints.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 relative overflow-hidden group">
              <div className="text-6xl font-bold text-[#C4B09D]/30 absolute -top-4 -right-4 group-hover:scale-110 transition-transform font-playfair">3</div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#504D4B] mb-4 mt-4 font-playfair">Direção de Arte & Produção</h3>
                <p className="leading-relaxed text-[#8C8A82]">Criamos identidade visual sofisticada e producoes audiovisuais de alto padrão.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 relative overflow-hidden group">
              <div className="text-6xl font-bold text-[#C4B09D]/30 absolute -top-4 -right-4 group-hover:scale-110 transition-transform font-playfair">4</div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#504D4B] mb-4 mt-4 font-playfair">Veiculação & Conexão</h3>
                <p className="leading-relaxed text-[#8C8A82]">Implementamos estratégia com gestão de relacionamentos e mídia especializada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#F4F3F2] border-[#8C8A82]/20 border-t pt-24 pb-24" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row mb-12 items-start md:items-end justify-between">
            <div>
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-2">Nossos Trabalhos</span>
              <h2 className="text-4xl font-semibold text-[#504D4B] text-left font-playfair">Cases & Campanhas</h2>
            </div>

            <div className="mt-6 md:mt-0 relative w-full md:w-auto">
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F4F3F2] to-transparent pointer-events-none md:hidden z-10"></div>
              <div className="flex gap-2 overflow-x-auto hide-scroll pb-2 md:pb-0 w-full md:w-auto pr-4 md:pr-0">
                <button onClick={() => setFilter('all')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${filter === 'all' ? 'bg-[#504D4B] text-white' : 'bg-[#8C8A82]/20 text-[#8C8A82] hover:bg-[#8C8A82]/30'}`}>Todos</button>
                <button onClick={() => setFilter('beauty')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${filter === 'beauty' ? 'bg-[#504D4B] text-white' : 'bg-[#8C8A82]/20 text-[#8C8A82] hover:bg-[#8C8A82]/30'}`}>Beleza</button>
                <button onClick={() => setFilter('fashion')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${filter === 'fashion' ? 'bg-[#504D4B] text-white' : 'bg-[#8C8A82]/20 text-[#8C8A82] hover:bg-[#8C8A82]/30'}`}>Moda</button>
                <button onClick={() => setFilter('personal')} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${filter === 'personal' ? 'bg-[#504D4B] text-white' : 'bg-[#8C8A82]/20 text-[#8C8A82] hover:bg-[#8C8A82]/30'}`}>Personal Branding</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6" id="portfolio-grid" key={animationKey}>
            {/* Portfolio Items */}
            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'beauty' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1570158268183-d296b2892375?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Maison Bazaar - Editorial" />
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">Maison Bazaar Editorial</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'fashion' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1549887534-7ef5d91f0ece?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Truss - Lançamento Coleção" />
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Moda</span>
                <h3 className="text-lg font-medium text-white font-playfair">Truss - Lançamento</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'personal' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sofia Laurent - Personal Branding" />
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Personal Branding</span>
                <h3 className="text-lg font-medium text-white font-playfair">Sofia Laurent Branding</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'beauty' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1596462502278-af0226e1bcc9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lux Cosmetics - Campanha" />
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">Lux Cosmetics Campanha</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'fashion' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1551028719-00167b16ebc5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Atelier Noir - Lançamento" />
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Moda</span>
                <h3 className="text-lg font-medium text-white font-playfair">Atelier Noir Lançamento</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'personal' ? 'block fade-in' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1508685096489-7aaad60bd8d6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Isabella Gold - Personal Brand" />
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Personal Branding</span>
                <h3 className="text-lg font-medium text-white font-playfair">Isabella Gold Influencer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Briefing Section */}
      <section id="briefing" className="py-24 bg-white border-t border-[#8C8A82]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 gap-x-16 gap-y-16 items-start">

            {/* Briefing Form */}
            <div className="w-full md:w-2/3">
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-2">Vamos Começar</span>
              <h2 className="text-4xl font-semibold text-[#504D4B] tracking-tight mb-8 font-playfair">Project Briefing</h2>

              <form id="briefingForm" className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold mb-4 text-[#504D4B]">Seu Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={briefingForm.name}
                    onChange={handleBriefingChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#504D4B] focus:border-transparent transition-all border-[#8C8A82]/20 bg-[#F4F3F2]" 
                    placeholder="Jane Doe" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4 text-[#504D4B]">Marca / Empresa</label>
                  <input 
                    type="text" 
                    name="brand"
                    value={briefingForm.brand}
                    onChange={handleBriefingChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#504D4B] focus:border-transparent transition-all border-[#8C8A82]/20 bg-[#F4F3F2]" 
                    placeholder="Nome da sua marca" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4 text-[#504D4B]">Orçamento Estimado</label>
                  <select 
                    name="budget"
                    value={briefingForm.budget}
                    onChange={handleBriefingChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#504D4B] focus:border-transparent transition-all border-[#8C8A82]/20 bg-[#F4F3F2]"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="10k-20k">$10k - $20k</option>
                    <option value="20k-50k">$20k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4 text-[#504D4B]">Fale sobre o momento da sua marca</label>
                  <textarea 
                    name="message"
                    value={briefingForm.message}
                    onChange={handleBriefingChange}
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#504D4B] focus:border-transparent transition-all border-[#8C8A82]/20 bg-[#F4F3F2]" 
                    placeholder="Descreva seu projeto, objetivos e visão..."
                  />
                </div>

                <button type="submit" className="w-full font-semibold py-4 rounded-lg transition-all shadow-md bg-[#504D4B] hover:bg-[#8C8A82] text-white">
                  Enviar Briefing
                </button>
              </form>
            </div>

            {/* Briefing Summary Card */}
            <div className="w-full md:w-1/3 sticky top-24">
              <div className="p-8 rounded-2xl shadow-xl relative overflow-hidden bg-white border border-[#8C8A82]/10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 -mr-10 -mt-10 bg-[#C4B09D]"></div>
                <h3 className="text-xl font-semibold tracking-tight mb-6 relative z-10 text-[#504D4B] font-playfair">Por Que Falar Conosco</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[#504D4B] flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C4B09D]"></iconify-icon> Expertise Comprovada</h5>
                    <p className="text-sm text-[#8C8A82] ml-6">8+ anos criando campanhas memoráveis para marcas de luxo.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[#504D4B] flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C4B09D]"></iconify-icon> Abordagem Estratégica</h5>
                    <p className="text-sm text-[#8C8A82] ml-6">Cada projeto é uma arquitetura de comunicação integrada.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[#504D4B] flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C4B09D]"></iconify-icon> Nicho Específico</h5>
                    <p className="text-sm text-[#8C8A82] ml-6">Especialistas em beleza, moda e estilo de vida premium.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-[#504D4B] flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C4B09D]"></iconify-icon> Qualidade Editorial</h5>
                    <p className="text-sm text-[#8C8A82] ml-6">Estética visual e narrativas de alto padrão em todos os projetos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F4F3F2] border-t border-[#8C8A82]/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-2">Dúvidas Frequentes</span>
            <h2 className="text-4xl font-semibold tracking-tight text-[#504D4B] font-playfair">FAQ</h2>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-[#504D4B]/5 bg-white border-[#8C8A82]/20 hover:border-[#8C8A82]/40">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-[#504D4B]">
                Como é o processo de trabalho da Xá das Cinco?
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#8C8A82]">
                Seguimos uma metodologia de 4 etapas: Imersão & Diagnóstico, Planejamento Estratégico, Direção de Arte & Produção, e Veiculação & Conexão. Cada etapa é pensada para máximo impacto e autenticidade.
              </div>
            </details>

            <details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-[#504D4B]/5 bg-white border-[#8C8A82]/20 hover:border-[#8C8A82]/40">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-[#504D4B]">
                Vocês trabalham com marcas pequenas ou apenas grandes?
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#8C8A82]">
                Nós trabalhamos com marcas que tenham potencial de crescimento e que estejam comprometidas com excelência no posicionamento. Tamanho importa menos que ambição e alinhamento estratégico.
              </div>
            </details>

            <details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-[#504D4B]/5 bg-white border-[#8C8A82]/20 hover:border-[#8C8A82]/40">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-[#504D4B]">
                Qual é o investimento mínimo para um projeto com vocês?
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#8C8A82]">
                Nossos projetos começam a partir de $10,000. Cada trabalho é customizado conforme a complexidade e escopo. Convidamos para um assessment inicial gratuito para entender melhor sua necessidade.
              </div>
            </details>

            <details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-[#504D4B]/5 bg-white border-[#8C8A82]/20 hover:border-[#8C8A82]/40">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-[#504D4B]">
                Vocês trabalham remotamente ou precisamos estar em São Paulo?
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#8C8A82]">
                Nós trabalhamos com clientes globalmente e oferecemos flexibilidade de trabalho remoto. Alguns projetos podem requerer sesões presenciais para produção ou fotografia de produto.
              </div>
            </details>

            <details className="group rounded-xl border overflow-hidden transition-all open:ring-1 open:ring-[#504D4B]/5 bg-white border-[#8C8A82]/20 hover:border-[#8C8A82]/40">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium select-none text-[#504D4B]">
                Como começo? Por onde a gente começa?
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-xl"></iconify-icon>
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#8C8A82]">
                Preencha o Project Briefing acima e converse com nosso time. Faremos um assessment inicial para entender sua marca, objetivos e expectativas antes de qualquer compromisso.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-[#8C8A82]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            <div className="flex flex-col justify-between">
              <div>
                <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-2">Entre em Contato</span>
                <h2 className="text-4xl font-semibold text-[#504D4B] tracking-tight mb-6 font-playfair">Vamos Conversar</h2>
                <p className="text-[#8C8A82] mb-8">Explore como a Xá das Cinco pode elevar sua marca ao próximo nível.</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#F4F3F2]">
                      <iconify-icon icon="solar:map-point-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg text-[#8C8A82]"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-[#504D4B]">Localização</h4>
                      <p className="text-sm text-[#8C8A82]">São Paulo, Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#F4F3F2]">
                      <iconify-icon icon="solar:phone-calling-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg text-[#8C8A82]"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-[#504D4B]">Telefone</h4>
                      <a href="tel:+5511999999999" className="text-sm transition-colors text-[#8C8A82] hover:text-[#504D4B]">+55 (11) 99999-9999</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#F4F3F2]">
                      <iconify-icon icon="solar:letter-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg text-[#8C8A82]"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-[#504D4B]">Email</h4>
                      <a href="mailto:hello@xadascinco.com" className="text-sm transition-colors text-[#8C8A82] hover:text-[#504D4B]">hello@xadascinco.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-[#8C8A82]/20">
                <h3 className="font-semibold text-[#504D4B] mb-4 font-playfair">Conecte Conosco</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-[#8C8A82] hover:text-[#504D4B] transition-colors"><iconify-icon icon="solar:instagram-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
                  <a href="#" className="text-[#8C8A82] hover:text-[#504D4B] transition-colors"><iconify-icon icon="solar:camera-minimalistic-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
                  <a href="#" className="text-[#8C8A82] hover:text-[#504D4B] transition-colors"><iconify-icon icon="solar:letter-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-2xl border shadow-sm flex flex-col justify-center h-full bg-[#F4F3F2] border-[#8C8A82]/20">
              <div className="mb-10">
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-6 bg-white shadow-sm">
                  <iconify-icon icon="solar:point-on-map-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl text-[#504D4B]"></iconify-icon>
                </div>
                <h3 className="text-2xl font-semibold text-[#504D4B] tracking-tight mb-2 font-playfair">Xá das Cinco</h3>
                <p className="text-lg text-[#8C8A82]">Agência de Comunicação Estratégica & Branding</p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[#8C8A82] mb-4 text-sm leading-relaxed">
                    Especialistas em criar conexões autênticas entre marcas de beleza, moda e lifestyle de alto padrão e seus públicos. Entregamos estratégia, criatividade e execução que eleva marcas ao status de ícone.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white shadow-sm">
                    <iconify-icon icon="solar:clock-circle-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg text-[#8C8A82]"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-[#504D4B]">Horário de Atendimento</h4>
                    <ul className="text-sm space-y-1 text-[#8C8A82]">
                      <li className="flex justify-between w-40"><span>Seg - Sex:</span> <span>09:00 AM - 6:00 PM</span></li>
                      <li className="flex justify-between w-40"><span>Sábado:</span> <span>10:00 AM - 2:00 PM</span></li>
                      <li className="flex justify-between w-40"><span>Domingo:</span> <span>Fechado</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-[#504D4B] py-16 text-center border-b border-[#8C8A82]/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-4 font-playfair">Sua Marca Merece Ser um Ícone.</h2>
          <p className="text-[#C4B09D] mb-8 text-lg">Comece sua jornada de transformação estratégica hoje.</p>
          <a href="#briefing" className="inline-flex items-center justify-center transition-all hover:bg-[#C4B09D] hover:text-[#504D4B] font-medium text-[#504D4B] bg-white rounded-full pt-4 pr-8 pb-4 pl-8">Solicitar Assessment</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2825] border-[#8C8A82]/20 border-t pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6 text-white">
                <span className="text-lg font-semibold tracking-tight font-playfair">XÁ DAS CINCO</span>
              </div>
              <p className="text-sm text-[#8C8A82]">Comunicação estratégica, branding e marketing criativo para marcas de alto padrão nos mercados de beleza, moda e lifestyle.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
              <div>
                <h4 className="font-semibold mb-4 text-sm text-white">Serviços</h4>
                <ul className="space-y-3 text-[#8C8A82] text-sm">
                  <li><a href="#expertise" className="transition-colors hover:text-white">Direção Criativa</a></li>
                  <li><a href="#expertise" className="transition-colors hover:text-white">Branding</a></li>
                  <li><a href="#expertise" className="transition-colors hover:text-white">Assessoria PR</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm text-white">Empresa</h4>
                <ul className="space-y-3 text-[#8C8A82] text-sm">
                  <li><a href="#methodology" className="transition-colors hover:text-white">Nossa Metodologia</a></li>
                  <li><a href="#portfolio" className="transition-colors hover:text-white">Cases</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-white">Contato</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm text-white">Conecte</h4>
                <ul className="space-y-3 text-[#8C8A82] text-sm">
                  <li><a href="tel:+5511999999999" className="transition-colors hover:text-white">+55 (11) 99999-9999</a></li>
                  <li><a href="mailto:hello@xadascinco.com" className="transition-colors hover:text-white">hello@xadascinco.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#8C8A82]/20 pt-8 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#8C8A82]">© 2026 Xá das Cinco. Todos os direitos reservados.</span>
              <span className="text-xs text-[#8C8A82]/70">Comunicação Estratégica & Branding | São Paulo, Brasil</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[#8C8A82] hover:text-white transition-colors"><iconify-icon icon="solar:camera-minimalistic-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
              <a href="#" className="text-[#8C8A82] hover:text-white transition-colors"><iconify-icon icon="solar:letter-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
              <a href="#" className="text-[#8C8A82] hover:text-white transition-colors"><iconify-icon icon="solar:users-group-rounded-linear" style={{ strokeWidth: '1.5' }} className="w-5 h-5 text-lg"></iconify-icon></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed group flex flex-col z-50 right-6 bottom-6 gap-x-3 gap-y-6 items-end">
        <div className="flex flex-col gap-3 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 translate-y-4 items-end">
          <a href="mailto:hello@xadascinco.com" className="flex items-center gap-3 transition-colors hover:bg-[#F4F3F2] text-[#504D4B] bg-white border-[#8C8A82]/20 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg">
            <span className="text-sm font-medium">Enviar Email</span>
            <div className="w-8 h-8 rounded-full bg-[#C4B09D] flex items-center justify-center text-white">
              <iconify-icon icon="solar:letter-linear" style={{ strokeWidth: '1.5' }} className="w-4 h-4"></iconify-icon>
            </div>
          </a>
          <a href="tel:+5511999999999" className="flex items-center gap-3 transition-colors hover:bg-[#F4F3F2] text-[#504D4B] bg-white border-[#8C8A82]/20 border rounded-full pt-2 pr-3 pb-2 pl-4 shadow-lg">
            <span className="text-sm font-medium">Ligar Agora</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#504D4B] text-white">
              <iconify-icon icon="solar:phone-calling-linear" style={{ strokeWidth: '1.5' }} className="w-4 h-4"></iconify-icon>
            </div>
          </a>
        </div>

        <button className="flex transition-transform duration-300 group-hover:scale-110 text-white bg-[#504D4B] w-14 h-14 rounded-full relative shadow-xl items-center justify-center ring-1 ring-[#8C8A82]/20">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#C4B09D] opacity-20 animate-ping"></span>
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:rotate-90">
            <iconify-icon icon="solar:phone-calling-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl"></iconify-icon>
          </div>
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 opacity-0 rotate-90">
            <iconify-icon icon="solar:alt-arrow-up-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl"></iconify-icon>
          </div>
        </button>
      </div>
    </>
  );
}

export default App;
