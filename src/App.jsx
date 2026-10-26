import React, { useState, useEffect } from 'react';

function App() {
  // State para Portfolio Filter
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);

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
      <nav aria-label="Navegação principal" className="fixed top-0 w-full z-40 bg-[#F4F3F2]/90 backdrop-blur-md border-b border-[#8C8A82]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/XD5_SIMBOLO_VERSAO_COLORIDO.png" alt="Xá das Cinco Logo" className="h-10 w-10" />
            <span className="text-lg font-semibold text-[#504D4B] tracking-wider font-playfair">XÁ DAS CINCO</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Expertise</a>
            <a href="#methodology" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Metodologia</a>
            <a href="#portfolio" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Cases</a>
            <a href="#contact" className="text-sm font-medium transition-colors text-[#8C8A82] hover:text-[#504D4B]">Contato</a>
          </div>

          <a href="#briefing" className="hidden md:inline-flex text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-[#504D4B] hover:bg-[#8C8A82] text-white">
            Falar com Especialista
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#8C8A82]/30 text-[#504D4B]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
            </span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#8C8A82]/20 bg-[#F4F3F2] shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {[
                ['#expertise', 'Expertise'],
                ['#methodology', 'Metodologia'],
                ['#portfolio', 'Cases'],
                ['#contact', 'Contato'],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-[#504D4B] transition-colors hover:bg-white">
                  {label}
                </a>
              ))}
              <a href="#briefing" onClick={() => setMobileMenuOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#504D4B] px-5 py-3 text-sm font-medium text-white">
                Falar com Especialista
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">          <img src="/logos/XD5_SIMBOLO_VERSAO_COLORIDO.png" alt="Background" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-5 z-0" />          <video autoPlay muted loop playsInline className="w-full h-full object-cover object-center lg:object-right">
            <source src="/media/VINHETA_XD5.mp4" type="video/mp4" />
            <source src="/media/VINHETA_XD5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F2] via-[#F4F3F2]/95 to-transparent/10 md:bg-gradient-to-r md:from-[#F4F3F2] md:via-[#F4F3F2] md:to-transparent"></div>
        </div>

        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block uppercase text-xs font-semibold text-[#8C8A82] tracking-[0.2em] bg-white/50 border-[#8C8A82] border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Comunicação Estratégica & Branding</span>
            <h1 className="leading-[0.95] uppercase md:text-7xl lg:text-7xl text-4xl font-semibold text-[#504D4B] tracking-tighter mb-8 font-playfair">Elevando marcas ao status de ícone.</h1>

            <p className="leading-relaxed text-lg md:text-xl text-[#8C8A82] mb-10 max-w-xl font-lato">
              Criamos conexões autênticas entre marcas de beleza, moda e lifestyle de alto padrão e o seu público. Construímos histórias, posicionamento e estética editorial.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
              <a href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#8C8A82] font-medium text-white bg-[#504D4B] rounded-full px-6 sm:px-8 py-3.5 sm:py-4 shadow-lg">Explorar Cases</a>
              <a href="#briefing" className="w-full sm:w-auto inline-flex items-center justify-center transition-all hover:bg-[#C4B09D]/10 font-medium text-[#504D4B] bg-white border-[#8C8A82] border rounded-full px-6 sm:px-8 py-3.5 sm:py-4">Solicitar Assessment</a>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 md:gap-12 pt-6 sm:pt-8 border-t border-[#8C8A82]/30">
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

      {/* SOBRE NÓS Section */}
      <section className="bg-white pt-24 pb-24 border-t border-[#8C8A82]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">Nossa História</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-8 text-[#504D4B] font-playfair">Sobre Nós</h2>
              <p className="text-sm font-semibold text-[#504D4B] mb-4 uppercase tracking-wider">Somos Mais Do Que Apenas Uma Agência De Marketing</p>
              <p className="text-lg text-[#8C8A82] mb-6 leading-relaxed">
                A Xá das Cinco é uma agência de marketing 360° que conecta o clássico e o moderno, o tradicional e o disruptivo. Fundada por Guilherme Gino, cuja experiência consolidada no mercado de luxo e beleza premium trouxe a visão diferenciada que permeia nossa atuação.
              </p>
              <p className="text-lg text-[#8C8A82] mb-6 leading-relaxed">
                Com o "X" representando o "X da questão" — nosso diferencial —, cada projeto é desenvolvido para alcançar resultados que elevam o posicionamento de marcas que desejam inovar e deixar sua marca no mundo.
              </p>
              <div className="pt-4 border-t border-[#8C8A82]/20">
                <p className="text-base text-[#8C8A82] italic mt-4">Encontrando Excelência em Cada Detalhe</p>
              </div>
            </div>
            <div className="relative h-[380px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group" style={{ perspective: '1200px' }}>
              <img src="/apresentacao/C.R Hair 0871.jpg" alt="Sobre Nós" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{ transformStyle: 'preserve-3d' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#504D4B]/40 to-transparent group-hover:from-[#504D4B]/20 transition-all duration-300"></div>
              <style>{`
                @media (hover: hover) {
                  .group:hover {
                    transform: rotateY(2deg) rotateX(-2deg);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE NOS MOVE Section */}
      <section className="relative min-h-[680px] sm:min-h-[760px] lg:h-screen flex items-center justify-center overflow-hidden border-t border-[#8C8A82]/20">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/apresentacao/EVENTO TOP 10 CORRETORES SH PRIME.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#504D4B]/50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase block text-xs font-semibold text-[#C4B09D] tracking-[0.2em] mb-6">Nossos Valores</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 text-white font-playfair">O Que Nos Move</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F4F3F2]/90 max-w-3xl mx-auto mb-8 sm:mb-12">
            Somos o ponto de convergência para marcas que buscam autenticidade e inovação em seu posicionamento. Assim como o ritual britânico do chá das cinco une tradição e modernidade, a Xá das Cinco alia o espírito icônico e atemporal ao atendimento aos mais altos padrões de excelência.
          </p>
          <p className="text-xl font-semibold text-[#C4B09D] font-playfair mb-12">Onde o Moderno e o Clássico se Encontram.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-semibold text-[#C4B09D] mb-3 font-playfair">Inovação</h3>
              <p className="text-[#F4F3F2]/80">Criamos soluções estratégicas que transformam marcas em referências do mercado.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-semibold text-[#C4B09D] mb-3 font-playfair">Excelência</h3>
              <p className="text-[#F4F3F2]/80">Cada projeto é executado com máximo rigor e atenção aos detalhes mais sutis.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-semibold text-[#C4B09D] mb-3 font-playfair">Autenticidade</h3>
              <p className="text-[#F4F3F2]/80">Desenvolvemos narrativas que refletem a essência verdadeira de cada marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F4F3F2] pt-24 pb-24 border-t border-[#8C8A82]/20" id="expertise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">O Que Fazemos</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-8 leading-tight text-[#504D4B] font-playfair">Nossas Expertises.</h2>
              <p className="leading-relaxed text-lg text-[#8C8A82] mb-12">
                Criamos conexões autênticas e posicionamento estratégico para marcas que desejam alcançar status de ícone nos mercados de beleza, moda e lifestyle de alto padrão.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4B09D] transition-colors">
                    <iconify-icon icon="solar:video-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl text-[#504D4B] group-hover:text-white transition-colors"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#504D4B] mb-1 font-playfair">Direção Criativa & Audiovisual</h3>
                    <p className="text-sm text-[#8C8A82]">Editorial & Produção</p>
                    <p className="text-base text-[#8C8A82] mt-1">Campanhas visuais de impacto, vídeos editoriais e conteúdo audiovisual.</p>
                  </div>
                </div>

                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4B09D] transition-colors">
                    <iconify-icon icon="solar:bookmark-outline-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl text-[#504D4B] group-hover:text-white transition-colors"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#504D4B] mb-1 font-playfair">Branding & Posicionamento</h3>
                    <p className="text-sm text-[#8C8A82]">Identidade & Estratégia</p>
                    <p className="text-base text-[#8C8A82] mt-1">Identidades visuais sofisticadas e posicionamento estratégico.</p>
                  </div>
                </div>

                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4B09D] transition-colors">
                    <iconify-icon icon="solar:people-outline-rounded-linear" style={{ strokeWidth: '1.5' }} className="w-6 h-6 text-2xl text-[#504D4B] group-hover:text-white transition-colors"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#504D4B] mb-1 font-playfair">Assessoria & Relações Públicas</h3>
                    <p className="text-sm text-[#8C8A82]">Mídia & Influência</p>
                    <p className="text-base text-[#8C8A82] mt-1">Narrativas de marca e relações com mídia especializada.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center text-base font-medium border-b pb-1 text-[#504D4B] hover:text-[#8C8A82] border-[#504D4B] mt-8">
                Conhecer Mais <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="w-4 h-4 text-lg ml-2"></iconify-icon>
              </a>
            </div>

            <div className="relative h-[380px] sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#504D4B] via-[#8C8A82] to-[#504D4B] shadow-2xl group" style={{ perspective: '1200px' }}>
              <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                <source src="/media/video_01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#504D4B]/20 to-transparent group-hover:from-[#504D4B]/10 transition-all duration-300"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute bottom-4 right-4 w-16 h-16 opacity-60 group-hover:opacity-100 transition-opacity" />
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
            <div className="rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-[#C4B09D]" style={{ perspective: '1000px' }}>
              <div className="h-48 bg-gradient-to-br from-[#C4B09D]/20 to-[#8C8A82]/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl font-bold text-[#C4B09D]/40 group-hover:scale-110 transition-transform duration-300 font-playfair">01</div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#504D4B] mb-3 font-playfair">Imersão & Diagnóstico</h3>
                  <p className="leading-relaxed text-[#8C8A82]">Mergulhamos na essência de sua marca, analisando mercado, público e posicionamento atual.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-[#C4B09D]" style={{ perspective: '1000px' }}>
              <div className="h-48 bg-gradient-to-br from-[#C4B09D]/20 to-[#8C8A82]/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl font-bold text-[#C4B09D]/40 group-hover:scale-110 transition-transform duration-300 font-playfair">02</div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#504D4B] mb-3 font-playfair">Planejamento Estratégico</h3>
                  <p className="leading-relaxed text-[#8C8A82]">Desenvolvemos estratégia de comunicação integrada, mapeando narrativas e touchpoints.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-[#C4B09D]" style={{ perspective: '1000px' }}>
              <div className="h-48 bg-gradient-to-br from-[#C4B09D]/20 to-[#8C8A82]/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl font-bold text-[#C4B09D]/40 group-hover:scale-110 transition-transform duration-300 font-playfair">03</div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#504D4B] mb-3 font-playfair">Direção de Arte & Produção</h3>
                  <p className="leading-relaxed text-[#8C8A82]">Criamos identidade visual sofisticada e producoes audiovisuais de alto padrão.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-[#F4F3F2] border-[#8C8A82]/20 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-[#C4B09D]" style={{ perspective: '1000px' }}>
              <div className="h-48 bg-gradient-to-br from-[#C4B09D]/20 to-[#8C8A82]/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl font-bold text-[#C4B09D]/40 group-hover:scale-110 transition-transform duration-300 font-playfair">04</div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#504D4B] mb-3 font-playfair">Veiculação & Conexão</h3>
                  <p className="leading-relaxed text-[#8C8A82]">Implementamos estratégia com gestão de relacionamentos e mídia especializada.</p>
                </div>
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
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/media/video_portfolio_1.mp4" type="video/mp4" />
              </video>
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">Maison Bazaar Editorial</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'fashion' ? 'block fade-in' : 'hidden'}`}>
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/media/video_portfolio_2.mp4" type="video/mp4" />
              </video>
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Moda</span>
                <h3 className="text-lg font-medium text-white font-playfair">Truss - Lançamento</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'personal' ? 'block fade-in' : 'hidden'}`}>
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/media/video_portfolio_3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Personal Branding</span>
                <h3 className="text-lg font-medium text-white font-playfair">Sofia Laurent Branding</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'beauty' ? 'block fade-in' : 'hidden'}`}>
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/media/video_portfolio_4.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">Lux Cosmetics Campanha</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'fashion' ? 'block fade-in' : 'hidden'}`}>
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/apresentacao_comercial/VÍDEO PRINCIPAL CACHOS VEGAN.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">Cachos Vegan Campaign</h3>
              </div>
            </div>

            <div className={`portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer ${filter === 'all' || filter === 'personal' ? 'block fade-in' : 'hidden'}`}>
              <video autoPlay muted loop className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/apresentacao_comercial/SLOW MOTION CR HAIR.mp4" type="video/mp4" />
              </video>
              <div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute inset-0"></div>
              <img src="/logos/XD5_SIMBOLO_VERSAO_NEGATIVO.png" alt="Brand" className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider mb-1 block text-white/80">Beleza</span>
                <h3 className="text-lg font-medium text-white font-playfair">CR Hair - Slow Motion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados - Branding & Comunicação */}
      <section className="bg-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative h-[380px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img src="/apresentacao/SORTEIO VIRGÍNIA BRAÉ.jpeg" alt="Branding" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">Serviços</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-8 text-[#504D4B] font-playfair">Branding & Comunicação</h2>
              <p className="text-lg text-[#8C8A82] mb-8">Fortalecemos a identidade de marcas com histórias marcantes e uma comunicação eficaz que ressoe com o público-alvo.</p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Storytelling Personalizado</h4>
                    <p className="text-[#8C8A82]">Desenvolvemos narrativas que capturam a essência da marca, conectando emocionalmente com o público.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Estratégia de Marketing</h4>
                    <p className="text-[#8C8A82]">Criamos estratégias personalizadas para posicionamento e expansão da presença de marca no mercado.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Identidade Visual e Brandbook</h4>
                    <p className="text-[#8C8A82]">Definimos cores, fontes e elementos visuais que traduzem a personalidade e valores da marca.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mídias Sociais */}
      <section className="bg-[#F4F3F2] pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">Serviços</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-8 text-[#504D4B] font-playfair">Mídias Sociais</h2>
              <p className="text-lg text-[#8C8A82] mb-8">Conectamos marcas a suas audiências em plataformas sociais por meio de conteúdo estratégico e gestão de engajamento.</p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Planejamento Estratégico e Conteúdo Criativo</h4>
                    <p className="text-[#8C8A82]">Desenvolvemos calendários de conteúdo alinhados à identidade da marca e objetivos de negócio.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Gestão de Mídias Sociais</h4>
                    <p className="text-[#8C8A82]">Executamos e monitoramos campanhas e interações em plataformas como Instagram, TikTok e LinkedIn.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Análise de Métricas e KPIs</h4>
                    <p className="text-[#8C8A82]">Mensuramos o impacto e ajustamos as estratégias com base em resultados e métricas específicas.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[380px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/apresentacao/MOTION LONDRES ESSENDY.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#504D4B]/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing B2B & Trade Marketing */}
      <section className="relative pt-24 pb-24 overflow-hidden bg-[#504D4B]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4B09D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C8A82] rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="uppercase block text-xs font-semibold text-[#C4B09D] tracking-[0.2em] mb-4">Serviços</span>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8 leading-[1.1] font-playfair">
              Marketing B2B & <span className="text-[#C4B09D]">Trade Marketing</span>
            </h1>
            <p className="text-xl text-[#F4F3F2] mb-8 leading-relaxed max-w-lg">
              Criamos soluções estratégicas para aproximar marcas e consumidores no ponto de venda, incentivando uma experiência completa e imersiva que gera resultados reais.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#C4B09D] text-xl">•</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Materiais de PDV</h4>
                  <p className="text-[#F4F3F2]/80">Desenvolvemos materiais de comunicação visual de alto impacto para posicionamento em lojas e pontos de venda.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C4B09D] text-xl">•</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Brindes Personalizados e Catálogos</h4>
                  <p className="text-[#F4F3F2]/80">Oferecemos opções personalizadas para presentes e catálogos que enriquecem a experiência de marca.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C4B09D] text-xl">•</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Ações de Marketing em PDV e Eventos</h4>
                  <p className="text-[#F4F3F2]/80">Realizamos ações promocionais que destacam a marca e incentivam a interação direta com o público.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-12">
              <button className="text-white px-6 py-3 font-medium hover:text-[#C4B09D] flex items-center gap-2 group transition-colors">
                Explorar Serviços <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="w-4 h-4 text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </button>
            </div>
          </div>

          {/* Right Section with Overlapping Cards */}
          <div className="relative hidden lg:block h-[600px]" style={{ perspective: '1000px' }}>
            {/* Front Card with Image */}
            <div className="absolute top-12 right-0 z-20 border-8 bg-white w-[320px] border-[#F4F3F2] rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'float 3s ease-in-out infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateX(5deg) rotateY(-10deg) translateZ(20px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
              }}>
              <div className="overflow-hidden rounded-2xl h-72">
                <img src="/apresentacao_comercial/IMPRENSA DANILO HERBERT.png" alt="B2B Marketing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-[#504D4B] font-semibold text-lg mb-1 font-playfair">Criatividade em PDV</h3>
                <p className="text-[#8C8A82] text-sm">Soluções inovadoras para o ponto de venda</p>
              </div>
              <style>{`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
                  }
                  50% {
                    transform: translateY(-8px) rotateX(2deg) rotateY(-3deg);
                  }
                }
              `}</style>
            </div>

            {/* Back Card with Stats */}
            <div className="absolute bottom-12 left-0 w-[360px] bg-white rounded-2xl shadow-xl border border-[#F4F3F2] p-8 z-10 opacity-95">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-[#8C8A82] font-medium mb-2">Materiais</div>
                  <div className="text-3xl font-bold text-[#504D4B]">100+</div>
                  <p className="text-xs text-[#8C8A82] mt-1">designs criativos</p>
                </div>
                <div>
                  <div className="text-sm text-[#8C8A82] font-medium mb-2">Clientes</div>
                  <div className="text-3xl font-bold text-[#504D4B]">50+</div>
                  <p className="text-xs text-[#8C8A82] mt-1">marcas satisfeitas</p>
                </div>
              </div>
              <div className="border-t border-[#8C8A82]/20 pt-6">
                <p className="text-[#504D4B] font-semibold mb-3">Nossas especialidades:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#8C8A82]">
                    <span className="w-2 h-2 bg-[#C4B09D] rounded-full"></span>Displays e Totens
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#8C8A82]">
                    <span className="w-2 h-2 bg-[#C4B09D] rounded-full"></span>Embalagens Premium
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#8C8A82]">
                    <span className="w-2 h-2 bg-[#C4B09D] rounded-full"></span>Experiências Imersivas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section className="bg-[#F4F3F2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Elevated Card Container */}
          <div className="p-[1px] rounded-3xl bg-gradient-to-b from-[#8C8A82]/30 via-[#8C8A82]/10 to-transparent">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl">
              
              {/* Header Section */}
              <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#8C8A82]/20 pb-8 mb-12 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-[#8C8A82]/20 flex items-center justify-center shrink-0">
                    <img src="/logo/XD5_SIMBOLO_VERSAO_MONO.png" alt="Xá das Cinco" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#504D4B] tracking-tight font-playfair">Eventos Xá das Cinco</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] mt-1">Experiências Memoráveis</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] flex items-center gap-2">
                    <iconify-icon icon="solar:calendar-linear" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    2024+
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C4B09D]"></span>
                    Ativo
                  </span>
                </div>
              </header>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-w-0">
                
                {/* Left Column - Details */}
                <div className="lg:col-span-4 min-w-0 flex flex-col gap-10">
                  {/* Description */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] mb-3 flex items-center gap-2 font-semibold">
                      <iconify-icon icon="solar:star-linear" style={{ strokeWidth: '1.5' }}></iconify-icon> Conceito
                    </h4>
                    <p className="text-sm font-light text-[#504D4B] leading-relaxed">
                      Projetamos eventos memoráveis e envolventes, pensados para fortalecer a relação entre marca e público através de experiências imersivas.
                    </p>
                  </div>
                  
                  {/* Specialties */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] mb-4 font-semibold">Especialidades</h4>
                    <div className="event-specialties flex w-full min-w-0 flex-col gap-4">
                      <div className="flex w-full min-w-0 items-end justify-between gap-3 border-b border-[#8C8A82]/20 pb-2 group cursor-pointer">
                        <span className="text-xs text-[#8C8A82] group-hover:text-[#504D4B] transition-colors">Criação & Execução</span>
                        <span className="text-sm font-medium text-[#504D4B]">100%</span>
                      </div>
                      <div className="flex w-full min-w-0 items-end justify-between gap-3 border-b border-[#8C8A82]/20 pb-2 group cursor-pointer">
                        <span className="text-xs text-[#8C8A82] group-hover:text-[#504D4B] transition-colors">Experiência</span>
                        <span className="text-sm font-medium text-[#504D4B]">Premium</span>
                      </div>
                      <div className="flex w-full min-w-0 items-end justify-between gap-3 border-b border-[#8C8A82]/20 pb-2 group cursor-pointer">
                        <span className="text-xs text-[#8C8A82] group-hover:text-[#504D4B] transition-colors">Personalizadas</span>
                        <span className="text-sm font-medium text-[#504D4B]">Sim</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="hidden lg:block">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] mb-4 font-semibold">Diferenciais</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-xs text-[#504D4B]">
                        <span className="w-1.5 h-1.5 bg-[#C4B09D] rounded-full"></span>
                        Criação e Execução Completa
                      </li>
                      <li className="flex items-center gap-2 text-xs text-[#504D4B]">
                        <span className="w-1.5 h-1.5 bg-[#C4B09D] rounded-full"></span>
                        Backdrop e Ativações
                      </li>
                      <li className="flex items-center gap-2 text-xs text-[#504D4B]">
                        <span className="w-1.5 h-1.5 bg-[#C4B09D] rounded-full"></span>
                        Experiências Imersivas
                      </li>
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="mt-auto pt-4 hidden lg:block">
                    <a href="#contact" className="inline-flex items-center gap-2 text-xs font-medium text-[#504D4B] border-b border-[#504D4B] pb-1 hover:text-[#8C8A82] hover:border-[#8C8A82] transition-colors">
                      Saiba Mais <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </a>
                  </div>
                </div>

                {/* Right Column - Video */}
                <div className="lg:col-span-8 min-w-0 relative">
                  {/* Thin border wrapper */}
                  <div className="p-[1px] bg-gradient-to-b from-[#8C8A82]/40 to-transparent rounded-2xl w-full">
                    <div className="aspect-[4/3] lg:aspect-[16/9] w-full bg-[#F4F3F2] rounded-[15px] overflow-hidden relative group">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out">
                        <source src="/apresentacao/BACKSTAGEM SHOOTING ACHIEVO.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#504D4B]/20"></div>
                      
                      {/* Floating Overlay Status */}
                      <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] md:bottom-8 md:left-8 p-[1px] rounded-xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-md">
                        <div className="bg-white/95 p-4 sm:p-5 md:p-6 rounded-[11px] shadow-xl flex items-center gap-3 sm:gap-4 min-w-0 max-w-full">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4B09D] to-[#8C8A82] flex items-center justify-center shrink-0">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white text-lg"></iconify-icon>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-[#8C8A82] font-semibold mb-0.5">Status</div>
                            <div className="text-sm font-semibold text-[#504D4B] tracking-tight font-playfair">Experiência Premium</div>
                          </div>
                          <div className="ml-2 w-2 h-2 rounded-full bg-[#C4B09D] relative">
                            <div className="absolute inset-0 rounded-full bg-[#C4B09D] animate-ping opacity-30"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisa & Desenvolvimento */}
      {/* Pesquisa & Desenvolvimento (P&D) */}
      <section className="bg-[#F4F3F2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">Serviços</span>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-[#504D4B] font-playfair leading-[1.1]">
              Pesquisa & <span className="text-[#C4B09D]">Desenvolvimento</span>
            </h2>
            <p className="text-lg text-[#8C8A82] max-w-2xl font-light">
              Desenvolvemos produtos de beleza e cosméticos, alinhando formulações, embalagens e lançamento de mercado com excelência.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            
            {/* Column 1: Info Cards (Left) */}
            <div className="md:col-span-4 flex flex-col gap-6 h-full">

              {/* Card 1 - Fórmulas */}
              <article className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/40 via-[#8C8A82]/20 to-[#504D4B]/30 flex-1 overflow-hidden min-h-[160px] shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/95 to-[#F4F3F2] shadow-[inset_0_1px_2px_rgba(194,176,157,0.2)] rounded-[calc(2rem-1px)] z-0"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#504D4B] font-playfair mb-2">Fórmulas Personalizadas</h3>
                  <p className="text-sm text-[#8C8A82] mb-6 font-light">Criamos e testamos fórmulas exclusivas para atender às necessidades específicas de cada marca.</p>
                  <button className="flex items-center justify-between bg-white hover:bg-[#F4F3F2] border border-[#8C8A82]/20 rounded-full px-4 py-2.5 shadow-sm transition-all duration-300 group-hover:border-[#C4B09D] w-full">
                    <span className="text-xs font-medium text-[#504D4B]">Explorar</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="text-[#8C8A82] text-lg"></iconify-icon>
                  </button>
                </div>
              </article>

              {/* Card 2 - Naming */}
              <article className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/40 via-[#8C8A82]/20 to-[#504D4B]/30 flex-1 overflow-hidden min-h-[160px] shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/95 to-[#F4F3F2] shadow-[inset_0_1px_2px_rgba(194,176,157,0.2)] rounded-[calc(2rem-1px)] z-0"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#504D4B] font-playfair mb-2">Naming & Embalagens</h3>
                  <p className="text-sm text-[#8C8A82] mb-6 font-light">Definimos os melhores elementos de apresentação e conectamos com fornecedores qualificados.</p>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#8C8A82]/20 flex items-center justify-center group-hover:bg-[#C4B09D] group-hover:border-[#C4B09D] group-hover:text-white transition-all duration-300">
                      <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-[#8C8A82] text-lg"></iconify-icon>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 3 - Planejamento */}
              <article className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/40 via-[#8C8A82]/20 to-[#504D4B]/30 flex-1 overflow-hidden min-h-[160px] shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/95 to-[#F4F3F2] shadow-[inset_0_1px_2px_rgba(194,176,157,0.2)] rounded-[calc(2rem-1px)] z-0"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#504D4B] font-playfair mb-2">Planejamento Lançamento</h3>
                  <p className="text-sm text-[#8C8A82] mb-6 font-light">Estruturamos estratégias completas para o lançamento de novos produtos no mercado.</p>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#8C8A82]/20 flex items-center justify-center group-hover:bg-[#C4B09D] group-hover:border-[#C4B09D] group-hover:text-white transition-all duration-300">
                      <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-[#8C8A82] text-lg"></iconify-icon>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Column 2: Tall Card (Center) */}
            <article className="md:col-span-4 h-[400px] md:h-full relative rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/50 via-[#8C8A82]/30 to-[#504D4B]/40 overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="absolute inset-[1px] overflow-hidden z-0 rounded-[calc(2rem-1px)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                  <source src="/apresentacao_comercial/BELEZA BRASILEIRA.MP4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F2]/95 via-[#F4F3F2]/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #504D4B, transparent 50%)'}}></div>
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#8C8A82]/20 w-max shadow-md">
                  <iconify-icon icon="solar:flask-linear" style={{ strokeWidth: '1.5' }} className="text-[#8C8A82] text-lg"></iconify-icon>
                  <span className="text-xs font-semibold text-[#504D4B]">Inovação Premium</span>
                </div>
                <div className="flex justify-between items-end gap-4">
                  <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#504D4B] leading-tight font-playfair">
                    Produtos de <br />Excelência
                  </h3>
                  <button className="w-12 h-12 rounded-full bg-white hover:bg-[#C4B09D] border border-[#8C8A82]/30 text-[#504D4B] hover:text-white flex flex-shrink-0 items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
                  </button>
                </div>
              </div>
            </article>

            {/* Column 3: Stacked Cards (Right) */}
            <div className="md:col-span-4 flex flex-col gap-6 h-full">

              {/* Card 3.1 - Formulação */}
              <article className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/40 via-[#8C8A82]/20 to-[#504D4B]/30 flex-1 overflow-hidden min-h-[280px] group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-[1px] overflow-hidden z-0 rounded-[calc(2rem-1px)]">
                  <img src="/apresentacao_comercial/IMG_0137.JPG" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ciência e Efetividade" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F2]/95 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#C4B09D]/40 w-max shadow-sm">
                    <iconify-icon icon="solar:beaker-linear" style={{ strokeWidth: '1.5' }} className="text-[#C4B09D] text-sm"></iconify-icon>
                    <span className="text-xs font-semibold text-[#8C8A82]">Formulação</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-[#504D4B] leading-tight font-playfair">
                      Ciência & <br />Efetividade
                    </h3>
                    <button className="w-10 h-10 rounded-full bg-white hover:bg-[#C4B09D] border border-[#8C8A82]/20 text-[#504D4B] hover:text-white flex flex-shrink-0 items-center justify-center shadow-md group-hover:scale-105 active:scale-95 transition-all duration-300">
                      <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="text-lg"></iconify-icon>
                    </button>
                  </div>
                </div>
              </article>

              {/* Card 3.2 - Mercado */}
              <article className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#C4B09D]/40 via-[#8C8A82]/20 to-[#504D4B]/30 flex-1 overflow-hidden min-h-[280px] group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-[1px] overflow-hidden z-0 rounded-[calc(2rem-1px)]">
                  <img src="/apresentacao_comercial/IMG_5201.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Estratégia de Posicionamento" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3F2]/95 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#C4B09D]/40 w-max shadow-sm">
                    <iconify-icon icon="solar:graph-linear" style={{ strokeWidth: '1.5' }} className="text-[#8C8A82] text-sm"></iconify-icon>
                    <span className="text-xs font-semibold text-[#8C8A82]">Mercado</span>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-[#504D4B] leading-tight font-playfair">
                      Estratégia de <br />Posicionamento
                    </h3>
                    <button className="w-10 h-10 rounded-full bg-white hover:bg-[#C4B09D] border border-[#8C8A82]/20 text-[#504D4B] hover:text-white flex flex-shrink-0 items-center justify-center shadow-md group-hover:scale-105 active:scale-95 transition-all duration-300">
                      <iconify-icon icon="solar:arrow-right-up-linear" style={{ strokeWidth: '1.5' }} className="text-lg"></iconify-icon>
                    </button>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* Marketing de Influência */}
      <section className="bg-[#F4F3F2] pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="uppercase block text-xs font-semibold text-[#8C8A82] tracking-[0.2em] mb-4">Serviços</span>
              <h2 className="text-4xl font-semibold tracking-tight mb-8 text-[#504D4B] font-playfair">Marketing de Influência</h2>
              <p className="text-lg text-[#8C8A82] mb-8">Alavancamos a visibilidade da marca através de parcerias estratégicas com influenciadores relevantes.</p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Contratação e Negociação de Influenciadores</h4>
                    <p className="text-[#8C8A82]">Identificamos e contratamos influenciadores que se alinham com a marca.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Desenvolvimento de Estratégia e Briefing</h4>
                    <p className="text-[#8C8A82]">Planejamos e orientamos campanhas de influência, maximizando o engajamento.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C4B09D] text-xl">•</span>
                  <div>
                    <h4 className="font-semibold text-[#504D4B] mb-1">Relacionamento e Gestão de Influencers</h4>
                    <p className="text-[#8C8A82]">Mantemos uma relação contínua com influenciadores afiliados e criadores de conteúdo UGC.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/apresentacao/04_Isabelle Drummond.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#504D4B]/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="overflow-hidden bg-[#F4F3F2] border-[#8C8A82]/20 border-t pt-28 pb-28 relative" id="clientes">
        <style>{`
          @keyframes wallScrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes wallScrollDown {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .clientes-wall-track {
            display: flex;
            flex-direction: column;
            gap: 20px;
            will-change: transform;
          }

          .wall-up {
            animation: wallScrollUp 28s linear infinite;
          }

          .wall-down {
            animation: wallScrollDown 28s linear infinite;
          }

          .clientes-wall-column:hover .clientes-wall-track {
            animation-play-state: paused;
          }

          .clientes-wall-card {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            border: 1px solid rgba(80, 77, 75, 0.15);
            background: rgba(255, 255, 255, 0.6);
            box-shadow: 0 4px 16px rgba(80, 77, 75, 0.08);
            isolation: isolate;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
          }

          .clientes-wall-card:hover {
            background: rgba(196, 176, 157, 0.08);
            box-shadow: 0 8px 28px rgba(80, 77, 75, 0.12);
            transform: translateY(-4px);
          }

          .clientes-wall-card img {
            max-width: 85%;
            max-height: 85%;
            object-fit: contain;
            transition: transform 0.4s ease, filter 0.4s ease;
          }

          .clientes-wall-card:hover img {
            transform: scale(1.08);
            filter: brightness(0.95);
          }

          .clientes-wall-card-text {
            font-weight: 600;
            font-size: 0.95rem;
            color: #504D4B;
            text-align: center;
            letter-spacing: -0.01em;
            transition: color 0.4s ease;
          }

          .clientes-wall-card:hover .clientes-wall-card-text {
            color: #8C8A82;
          }

          @media (max-width: 767px) {
            .clientes-wall-mobile-scroll {
              overflow-x: auto;
              overflow-y: hidden;
              padding-bottom: 6px;
            }

            .clientes-wall-mobile-scroll::-webkit-scrollbar {
              height: 6px;
            }

            .clientes-wall-mobile-scroll::-webkit-scrollbar-thumb {
              background: rgba(80, 77, 75, 0.2);
              border-radius: 999px;
            }
          }
        `}</style>

        {/* Background decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,176,157,0.05),transparent_35%)]"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(rgba(80,77,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(80,77,75,0.04) 1px, transparent 1px)', backgroundSize: '72px 72px'}}></div>
        </div>

        <div className="z-10 max-w-[1400px] mx-auto px-6 relative">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8C8A82]/20 bg-white/40 text-[11px] uppercase tracking-[0.24em] text-[#8C8A82] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4B09D]"></span>
              Parceiros
            </div>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#504D4B] mb-4 font-playfair">
              Confiados por marcas de
              <span className="block text-[#C4B09D]">excelência</span>
            </h2>

            <p className="text-[#8C8A82] text-sm md:text-[15px] font-light leading-relaxed max-w-2xl mx-auto">
              Parcerias estratégicas com as principais marcas de beleza e lifestyle do Brasil e mundo.
            </p>
          </div>

          {/* Desktop wall */}
          <div className="hidden md:block clientes-wall-stage" style={{maskImage: 'linear-gradient(180deg, transparent, black 40%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 40%, black 60%, transparent)'}}>
            <div className="clientes-wall-3d grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden h-[820px] gap-x-5 gap-y-5 items-start">
              
              {/* Column 1 */}
              <div className="clientes-wall-column relative h-full overflow-hidden">
                <div className="clientes-wall-track wall-up">
                  <div className="clientes-wall-card h-[280px]">
                    <img src="/clientes/leveb.png" alt="LEV&B" />
                  </div>
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/katia_senna.png" alt="KATIA SENNA" />
                  </div>
                  <div className="clientes-wall-card h-[320px]">
                    <img src="/clientes/cr_hair.png" alt="CR HAIR" />
                  </div>
                  <div className="clientes-wall-card h-[280px]">
                    <img src="/clientes/leveb.png" alt="LEV&B" />
                  </div>
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/katia_senna.png" alt="KATIA SENNA" />
                  </div>
                  <div className="clientes-wall-card h-[320px]">
                    <img src="/clientes/cr_hair.png" alt="CR HAIR" />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="clientes-wall-column relative h-full overflow-hidden">
                <div className="clientes-wall-track wall-down">
                  <div className="clientes-wall-card h-[340px]">
                    <img src="/clientes/hidratei.png" alt="HIDRATEI" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/gloss.png" alt="GLOSS" />
                  </div>
                  <div className="clientes-wall-card h-[380px]">
                    <img src="/clientes/danilo.png" alt="DANILO HERBERT" />
                  </div>
                  <div className="clientes-wall-card h-[340px]">
                    <img src="/clientes/hidratei.png" alt="HIDRATEI" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/gloss.png" alt="GLOSS" />
                  </div>
                  <div className="clientes-wall-card h-[380px]">
                    <img src="/clientes/danilo.png" alt="DANILO HERBERT" />
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="clientes-wall-column relative h-full overflow-hidden">
                <div className="clientes-wall-track wall-up">
                  <div className="clientes-wall-card h-[320px]">
                    <img src="/clientes/iguatemi.png" alt="IGUATEMI" />
                  </div>
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/braé.png" alt="BRAÉ" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/casa_decor.png" alt="CASA DECOR" />
                  </div>
                  <div className="clientes-wall-card h-[320px]">
                    <img src="/clientes/iguatemi.png" alt="IGUATEMI" />
                  </div>
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/braé.png" alt="BRAÉ" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/casa_decor.png" alt="CASA DECOR" />
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="clientes-wall-column relative h-full overflow-hidden">
                <div className="clientes-wall-track wall-down">
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/essendy.png" alt="ESSENDY" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/beleza_brasileira.png" alt="BELEZA BRASILEIRA" />
                  </div>
                  <div className="clientes-wall-card h-[340px]">
                    <img src="/clientes/achievo.png" alt="ACHIEVO" />
                  </div>
                  <div className="clientes-wall-card h-[360px]">
                    <img src="/clientes/essendy.png" alt="ESSENDY" />
                  </div>
                  <div className="clientes-wall-card h-[300px]">
                    <img src="/clientes/beleza_brasileira.png" alt="BELEZA BRASILEIRA" />
                  </div>
                  <div className="clientes-wall-card h-[340px]">
                    <img src="/clientes/achievo.png" alt="ACHIEVO" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden clientes-wall-mobile-scroll">
            <div className="flex gap-4 w-max">
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/leveb.png" alt="LEV&B" />
              </div>
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/hidratei.png" alt="HIDRATEI" />
              </div>
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/braé.png" alt="BRAÉ" />
              </div>
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/essendy.png" alt="ESSENDY" />
              </div>
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/beleza_brasileira.png" alt="BELEZA BRASILEIRA" />
              </div>
              <div className="clientes-wall-card w-[220px] h-[220px] shrink-0 flex-shrink-0">
                <img src="/clientes/katia_senna.png" alt="KATIA SENNA" />
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
            <div className="w-full md:w-1/3 md:sticky md:top-24">
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
              <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer text-base sm:text-lg font-medium select-none text-[#504D4B]">
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

            <div className="p-6 sm:p-8 md:p-12 rounded-2xl border shadow-sm flex flex-col justify-center h-full bg-[#F4F3F2] border-[#8C8A82]/20">
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
              <div className="flex items-center gap-3 mb-6">
                <img src="/logos/XD5_LOGO_VERSAO_VERTICAL_POSITIVO.png" alt="Xá das Cinco" className="h-16" />
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
      <div className="fixed group flex flex-col z-50 right-4 sm:right-6 bottom-4 sm:bottom-6 gap-x-3 gap-y-6 items-end">
        <div className={`flex flex-col gap-3 transition-all duration-300 items-end ${quickActionsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:pointer-events-auto'}`}>
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

        <button type="button" aria-label="Abrir contatos rápidos" aria-expanded={quickActionsOpen} onClick={() => setQuickActionsOpen((open) => !open)} className="flex transition-transform duration-300 group-hover:scale-110 text-white bg-[#504D4B] w-12 h-12 sm:w-14 sm:h-14 rounded-full relative shadow-xl items-center justify-center ring-1 ring-[#8C8A82]/20">
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
