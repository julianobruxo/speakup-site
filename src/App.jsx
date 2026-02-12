import React, { useState } from 'react';
import { 
  MessageCircle, CheckCircle, MapPin, Instagram, Monitor, Home, RefreshCw, Zap, Target, BookOpen, Star
} from 'lucide-react';

import QuizModal from './TesteNivel'; 

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="App">
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* 1. HEADER */}
      <header className="container">
        <nav>
          <img src="/logo.png" alt="Speak UP" className="logo-img" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="https://www.instagram.com/speakupdoisirmaos/" target="_blank" rel="noopener noreferrer" style={{ color: '#1B2B4A' }}>
              <Instagram size={28} />
            </a>
            <button onClick={() => setIsQuizOpen(true)} className="btn btn-primary">
              Teste de Nível Grátis
            </button>
          </div>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <main className="container hero section">
        <div>
          <span style={{background: '#E5E7EB', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', color: '#1B2B4A', display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
            <MapPin size={16} /> Centro de Dois Irmãos - RS
          </span>
          <h1 style={{margin: '20px 0'}}>Pare de estudar.<br />Comece a <span className="text-red">falar.</span></h1>
          <p style={{marginBottom: '30px', maxWidth: '500px'}}>Conheça a única escola de Dois Irmãos focada 100% em destravar sua conversação desde o primeiro dia.</p>
          <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
            <a href="https://wa.me/5551999309238" className="btn btn-primary">Agendar Aula Experimental</a>
            <button onClick={() => setIsQuizOpen(true)} className="btn btn-outline">Fazer Teste de Nível</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" alt="Speak UP" className="hero-img" />
      </main>

      {/* 3. ESTATÍSTICAS (COM AS 5 ESTRELAS) */}
      <section className="bg-navy section">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center' }}>
          <div>
            <h2 style={{ color: 'white', margin: '0' }}>+2000</h2>
            <p style={{ color: '#F3F4F6' }}>alunos atendidos</p>
          </div>
          <div>
            <h2 style={{ color: 'white', margin: '0' }}>+94%</h2>
            <p style={{ color: '#F3F4F6' }}>taxa de sucesso</p>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '5px' }}>
              <Star fill="white" color="white" size={24} />
              <Star fill="white" color="white" size={24} />
              <Star fill="white" color="white" size={24} />
              <Star fill="white" color="white" size={24} />
              <Star fill="white" color="white" size={24} />
            </div>
            <p style={{ color: '#F3F4F6', margin: '0' }}>Avaliação Google</p>
          </div>
        </div>
      </section>

      {/* 4. MODALIDADES (REORDENADO) */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center">Você Escolhe o Formato</h2>
          <div className="grid-3">
            <div className="card text-center">
              <Home color="#1B2B4A" size={48} style={{margin: '0 auto 20px'}} />
              <h3>Presencial</h3>
              <p>Estude em nossas salas com professores qualificados.</p>
            </div>
            <div className="card text-center">
              <Monitor color="#8B1E2F" size={48} style={{margin: '0 auto 20px'}} />
              <h3>Online Ao Vivo</h3>
              <p>Interação real e humana onde você estiver.</p>
            </div>
            <div className="card text-center">
              <RefreshCw color="#1B2B4A" size={48} style={{margin: '0 auto 20px'}} />
              <h3>Híbrido</h3>
              <p>Alterne conforme sua necessidade.</p>
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
              <Zap color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>1. Constância</h3>
              <p>Evolução vem do contato frequente com o idioma.</p>
            </div>
            <div className="card">
              <Target color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>2. Personalização</h3>
              <p>Sua aula, Suas regras. Foco no seu objetivo.</p>
            </div>
            <div className="card">
              <MessageCircle color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>3. Comunicação</h3>
              <p>Aqui tudo que você aprende, você fala na hora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVO (CINZA) */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '40px'}}>Speak UP vs. Tradicionais</h2>
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #F3F4F6' }}>
                  <th style={{ padding: '20px' }}>Diferencial</th>
                  <th style={{ padding: '20px', color: 'var(--red)' }}>Speak UP</th>
                  <th style={{ padding: '20px', color: '#94a3b8' }}>Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}><td style={{ padding: '20px' }}>Alunos/Turma</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Máx 8</td><td style={{ padding: '20px' }}>15 a 20</td></tr>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}><td style={{ padding: '20px' }}>Conteúdo</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Personalizado</td><td style={{ padding: '20px' }}>Livro Rígido</td></tr>
                <tr><td style={{ padding: '20px' }}>Foco</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Conversação</td><td style={{ padding: '20px' }}>Gramática</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. MAPA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: '10px' }}>Onde Estamos</h2>
          <p style={{marginBottom: '40px'}}>Av. 25 de Julho, Centro - Dois Irmãos/RS</p>
          <div style={{ width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.3456789!2d-51.1511!3d-29.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM1JzA3LjgiUyA1McKwMDknMDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v123456789" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* 8. PARCEIROS */}
      <section className="bg-gray" style={{ padding: '50px 0', overflow: 'hidden' }}>
        <div className="container text-center" style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: '0.6' }}>Empresas que confiam na Speak UP</h3>
        </div>
        <div className="marquee-container">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Grupo Herval</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>GG10</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Calçados Henrich</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Getti Química</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Curtume Cobrasil</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Mahindra</span>
          {/* Loop das mesmas empresas */}
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Grupo Herval</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>GG10</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Calçados Henrich</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Getti Química</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Curtume Cobrasil</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', padding: '0 60px' }}>Mahindra</span>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-navy section">
        <div className="container text-center">
          <h2 style={{color: 'white'}}>Pronto para destravar seu inglês?</h2>
          <a href="https://wa.me/5551999309238" className="btn btn-primary" style={{marginTop: '20px'}}>WhatsApp Agora</a>
          <p style={{marginTop: '40px', color: '#64748b', fontSize: '0.8rem'}}>© 2026 Speak UP English School. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;