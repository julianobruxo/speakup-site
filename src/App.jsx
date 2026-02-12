import React, { useState } from 'react';
import { 
  MessageCircle, CheckCircle, MapPin, Instagram, Facebook, Monitor, Home, RefreshCw, Zap, Target, BookOpen, Star, X
} from 'lucide-react';

import QuizModal from './TesteNivel'; 

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="App">
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* JANELA MODAL QUEM SOMOS */}
      {isAboutOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000 }}>
          <div style={{ background: 'white', padding: '40px', borderRadius: '20px', maxWidth: '600px', width: '95%', position: 'relative' }}>
            <button onClick={() => setIsAboutOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer', color: '#1B2B4A' }}>
              <X size={28} />
            </button>
            <h2 style={{ marginBottom: '20px', textAlign: 'left', color: '#1B2B4A' }}>Quem Somos</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem' }}>
              A <strong>Speak UP English School</strong> nasceu em Dois Irmãos com o propósito de transformar o ensino de idiomas. 
              Diferente das escolas tradicionais, focamos 100% na conversação ativa desde a primeira aula.
              <br /><br />
              Nossa missão é destravar o inglês de quem busca resultados reais, 
              usando um método prático, personalizado e humano. Aqui, você não estuda inglês; você fala inglês.
            </p>
          </div>
        </div>
      )}

      {/* 1. HEADER - COM REDES SOCIAIS COLORIDAS */}
      <header className="container" style={{ padding: '20px 1.5rem' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/logo.png" alt="Speak UP" style={{ height: '220px', width: 'auto', objectFit: 'contain' }} />
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span 
              onClick={() => setIsAboutOpen(true)} 
              style={{ 
                color: '#1B2B4A', 
                fontWeight: '800', 
                cursor: 'pointer', 
                fontSize: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginRight: '80px' 
              }}
            >
              Quem Somos
            </span>

            {/* FACEBOOK COLORIDO */}
            <a href="https://www.facebook.com/profile.php?id=61586608800880" target="_blank" rel="noopener noreferrer" style={{ color: '#011c3e', marginRight: '15px', display: 'flex' }}>
              <Facebook size={32} fill="#01152f" color="white" />
            </a>

            {/* INSTAGRAM COLORIDO */}
            <a href="https://www.instagram.com/speakupdoisirmaos/" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', marginRight: '25px', display: 'flex' }}>
              <Instagram size={32} />
            </a>

            <button onClick={() => setIsQuizOpen(true)} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
              Teste de Nível Grátis
            </button>
          </div>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <main className="container hero section">
        <div>
          <span style={{background: '#E5E7EB', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '800', color: '#1B2B4A', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem'}}>
            <MapPin size={18} /> Centro de Dois Irmãos - RS
          </span>
          <h1 style={{marginBottom: '1.5rem'}}>Pare de estudar.<br />Comece a <span className="text-red">falar.</span></h1>
          <p style={{marginBottom: '2rem', maxWidth: '550px', fontSize: '1.2rem'}}>Conheça a única escola de Dois Irmãos focada 100% em destravar sua conversação desde o primeiro dia.</p>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <a href="https://wa.me/5551999309238" className="btn btn-primary">Agendar Aula Experimental</a>
            <button onClick={() => setIsQuizOpen(true)} className="btn btn-outline">Fazer Teste de Nível</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" alt="Speak UP" className="hero-img" />
      </main>

      {/* 3. ESTATÍSTICAS - ESTRELAS BRANCAS */}
      <section className="bg-navy section">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', textAlign: 'center' }}>
          <div><h2 style={{ color: 'white', margin: '0', fontSize: '3rem' }}>+2000</h2><p style={{ color: '#F3F4F6' }}>alunos atendidos</p></div>
          <div><h2 style={{ color: 'white', margin: '0', fontSize: '3rem' }}>+94%</h2><p style={{ color: '#F3F4F6' }}>taxa de sucesso</p></div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}>
              <Star fill="white" color="white" size={30} />
              <Star fill="white" color="white" size={30} />
              <Star fill="white" color="white" size={30} />
              <Star fill="white" color="white" size={30} />
              <Star fill="white" color="white" size={30} />
            </div>
            <p style={{ color: '#F3F4F6', margin: '0' }}>Avaliação no Google</p>
          </div>
        </div>
      </section>

      {/* 4. MODALIDADES */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center">Você Escolhe o Formato</h2>
          <div className="grid-3">
            <div className="card text-center" style={{ border: 'none' }}>
              <Home color="#1B2B4A" size={60} style={{margin: '0 auto 20px'}} />
              <h3>Presencial</h3>
              <p>Estude no conforto de nossas salas com teachers altamente qualificados.</p>
            </div>
            <div className="card text-center" style={{ border: 'none' }}>
              <Monitor color="#8B1E2F" size={60} style={{margin: '0 auto 20px'}} />
              <h3>Online Ao Vivo</h3>
              <p>Interação real e humana, onde você estiver.</p>
            </div>
            <div className="card text-center" style={{ border: 'none' }}>
              <RefreshCw color="#1B2B4A" size={60} style={{margin: '0 auto 20px'}} />
              <h3>Híbrido</h3>
              <p>Alterne conforme sua necessidade entre presencial e online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOSSO MÉTODO */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Por trás de nossa aula</h2>
          <div className="grid-3">
            <div className="card">
              <Zap color="#8B1E2F" size={48} style={{marginBottom: '20px'}}/>
              <h3>1. Constância</h3>
              <p>A evolução vem do contato frequente com o idioma.</p>
            </div>
            <div className="card">
              <Target color="#8B1E2F" size={48} style={{marginBottom: '20px'}}/>
              <h3>2. Personalização</h3>
              <p>Sua aula, Suas regras. Focamos no seu objetivo pessoal.</p>
            </div>
            <div className="card">
              <MessageCircle color="#8B1E2F" size={48} style={{marginBottom: '20px'}}/>
              <h3>3. Comunicação</h3>
              <p>Aqui tudo que você aprende, você fala na hora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVO */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '3rem'}}>Speak UP vs. Tradicionais</h2>
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '25px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #F3F4F6' }}>
                  <th style={{ padding: '30px', color: '#1B2B4A', fontSize: '1.1rem' }}>Diferencial</th>
                  <th style={{ padding: '30px', color: '#8B1E2F', fontSize: '1.1rem' }}>Speak UP</th>
                  <th style={{ padding: '30px', color: '#94a3b8', fontSize: '1.1rem' }}>Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}><td style={{ padding: '30px' }}>Alunos/Turma</td><td style={{ padding: '30px', fontWeight: '800' }}>Máx 8</td><td style={{ padding: '30px' }}>15 a 20</td></tr>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}><td style={{ padding: '30px' }}>Conteúdo</td><td style={{ padding: '30px', fontWeight: '800' }}>Situações REAIS do dia-a-dia</td><td style={{ padding: '30px' }}>Gramática e Livro apenas</td></tr>
                <tr><td style={{ padding: '30px' }}>Foco</td><td style={{ padding: '30px', fontWeight: '800' }}>Prática Real e Conversação</td><td style={{ padding: '30px' }}>Gramática, regras e nada de prática</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. MAPA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>Onde Estamos</h2>
          <p style={{marginBottom: '3rem', fontSize: '1.2rem'}}>Av. 25 de Julho, Centro - Dois Irmãos/RS</p>
          <div style={{ width: '100%', height: '500px', borderRadius: '35px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.585507026046!2d-51.1511!3d-29.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM1JzA3LjgiUyA1McKwMDknMDMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* 8. EMPRESAS PARCEIRAS */}
      <section className="bg-gray" style={{ padding: '70px 0', overflow: 'hidden' }}>
        <div className="container text-center" style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '10px' }}>Empresas Parceiras</h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Empresas que confiam na Speak UP
          </p>
        </div>
        <div className="marquee-container">
          {["Grupo Herval", "GG10", "Henrich", "Getti Química", "Cobrasil", "Mahindra", "Zazmic Inc."].map((p, i) => (
            <span key={i} style={{ fontSize: '2rem', fontWeight: '800', color: '#cbd5e1', padding: '0 80px' }}>{p}</span>
          ))}
          {["Grupo Herval", "GG10", "Henrich", "Getti Química", "Cobrasil", "Mahindra", "Zazmic Inc."].map((p, i) => (
            <span key={i + 10} style={{ fontSize: '2rem', fontWeight: '800', color: '#cbd5e1', padding: '0 80px' }}>{p}</span>
          ))}
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-navy section">
        <div className="container text-center">
          <h2 style={{color: 'white', marginBottom: '2rem', fontSize: '2.5rem'}}>Pronto para destravar seu inglês?</h2>
          <a href="https://wa.me/5551999309238" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>Tire suas dúvidas</a>
          <p style={{marginTop: '5rem', color: '#64748b', fontSize: '1rem'}}>© 2026 Speak UP English School. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;