import React, { useState } from 'react';
import { 
  MessageCircle, CheckCircle, MapPin, Star, Users, Briefcase, 
  ArrowRight, Rocket, X, Monitor, Home, RefreshCw, Globe, 
  Instagram, HelpCircle, Clock, Check, Target, BookOpen, Zap
} from 'lucide-react';

// Conexão com seu arquivo de teste
import QuizModal from './TesteNivel'; 

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="App">
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* 1. HEADER */}
      <header className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/logo.png" alt="Speak UP English School" className="logo-img" />
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
      <main className="container hero section" style={{ paddingTop: '10px', paddingBottom: '40px' }}>
        <div>
          <span style={{background: '#E5E7EB', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', color: '#1B2B4A', display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
            <MapPin size={16} /> Centro de Dois Irmãos - RS
          </span>
          <h1 style={{margin: '20px 0'}}>
            Pare de estudar.<br />
            Comece a <span className="text-red">falar.</span>
          </h1>
          <p style={{marginBottom: '30px', maxWidth: '500px'}}>
            Conheça a única escola de Dois Irmãos focada 100% em destravar sua conversação desde o primeiro dia.
          </p>
          <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
            <a href="https://wa.me/5551999309238" className="btn btn-primary">Agendar Aula Experimental</a>
            <button onClick={() => setIsQuizOpen(true)} className="btn btn-outline">Fazer Teste de Nível</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Speak UP" className="hero-img" />
      </main>

      {/* 3. NOSSO MÉTODO (OS PILARES) */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center">Por trás da aula: Nosso Método</h2>
          <p className="text-center" style={{maxWidth: '700px', margin: '0 auto 40px'}}>
            Nossa metodologia é baseada em três pilares fundamentais que garantem sua evolução real.
          </p>
          
          <div className="grid-3">
            <div className="card">
              <Zap color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>1. Constância</h3>
              <p>A evolução vem do contato frequente. Escolha seu ritmo:</p>
              <ul style={{listStyle: 'none', padding: '0', marginTop: '10px', fontSize: '0.95rem', color: '#555'}}>
                <li style={{marginBottom: '5px'}}>• <strong>Regular:</strong> 1x na semana</li>
                <li style={{marginBottom: '5px'}}>• <strong>Xpress:</strong> 2x na semana</li>
                <li>• <strong>VIP:</strong> A partir de 30 min/dia</li>
              </ul>
            </div>
            <div className="card">
              <Target color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>2. Personalização Real</h3>
              <p>Sua aula, Suas regras. Falamos sobre seus interesses pessoais e profissionais desde o primeiro dia.</p>
            </div>
            <div className="card">
              <MessageCircle color="#8B1E2F" size={40} style={{marginBottom: '20px'}}/>
              <h3>3. Foco em Comunicação</h3>
              <p>Aqui tudo que você aprende, você fala na mesma aula. Ao final de cada aula, você automaticamente percebe a evolução natural do seu aprendizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A PRÁTICA (Checklist da Aula + Ancoragem) - INTEGRADO APÓS O MÉTODO */}
      <section className="section container">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{ display: 'grid', gap: '15px', marginBottom: '50px' }}>
            {[
              "Conversação ativa sobre tópicos de seu interesse",
              "Correção imediata dos erros mais comuns",
              "Ampliação estratégica de vocabulário",
              "Ajustes finos de pronúncia",
              "Direcionamento personalizado para a próxima semana"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <CheckCircle size={24} color="#10B981" style={{minWidth: '24px'}} />
                <span style={{fontWeight: '500'}}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: '30px', borderTop: '1px solid #eee' }}>
            <h3 style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px', color: '#1B2B4A'}}>
              <BookOpen size={28} color="#9D2235"/> Preciso estudar fora da aula?
            </h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.7', color: '#444'}}>
              Não é obrigatório, mas é recomendado. A aula funciona como o seu <strong>ponto de ancoragem</strong>: ela corrige, direciona e mantém você em contato constante com o inglês, garantindo que você não saia do trilho.
            </p>
          </div>
        </div>
      </section>

      {/* 5. O COMPARATIVO */}
      <section className="section" style={{ backgroundColor: '#1B2B4A', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '40px' }}>Speak UP vs. Tradicionais</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #334155' }}>
                  <th style={{ padding: '20px' }}>Diferencial</th>
                  <th style={{ padding: '20px', color: '#9D2235' }}>Speak UP</th>
                  <th style={{ padding: '20px', color: '#94a3b8' }}>Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '20px' }}>Alunos/Turma</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Máx 8 (Foco Total)</td><td style={{ padding: '20px' }}>15 a 20 (Você mal fala)</td></tr>
                <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '20px' }}>Conteúdo</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Personalizado por Aluno</td><td style={{ padding: '20px' }}>Livro Rígido para todos</td></tr>
                <tr><td style={{ padding: '20px' }}>Foco</td><td style={{ padding: '20px', fontWeight: 'bold' }}>Conversação Prática</td><td style={{ padding: '20px' }}>Gramática de lousa</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. MODALIDADES */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center">Você Escolhe o Formato</h2>
          <div className="grid-3" style={{marginTop: '40px'}}>
            <div className="card text-center" style={{border: 'none'}}><Home color="#1B2B4A" size={48} style={{margin: '0 auto 20px'}} /><h3>Presencial</h3><p>Estudo no conforto de nossas salas.</p></div>
            <div className="card text-center" style={{border: 'none'}}><Monitor color="#8B1E2F" size={48} style={{margin: '0 auto 20px'}} /><h3>Online Ao Vivo</h3><p>Interação real, onde você estiver.</p></div>
            <div className="card text-center" style={{border: 'none'}}><RefreshCw color="#1B2B4A" size={48} style={{margin: '0 auto 20px'}} /><h3>Híbrido</h3><p>Alterne conforme sua necessidade.</p></div>
          </div>
        </div>
      </section>

      {/* 7. MAPA */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '10px' }}>Onde Estamos</h2>
          <p style={{marginBottom: '40px'}}>Av. 25 de Julho, Centro - Dois Irmãos/RS (Em cima do Açaí da Marli)</p>
          <div style={{ width: '100%', height: '400px', borderRadius: '20px 20px 0 0', overflow: 'hidden', boxShadow: '0 -10px 30px rgba(0,0,0,0.05)', lineHeight: '0' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8355455018127!2d-51.089904124769504!3d-29.579387909866455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194671b1ba50c7%3A0x1d24ce1de23b25df!2sSpeak%20Up*21%20English%20School!5e0!3m2!1spt-BR!2sbr!4v1770824753375!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Speak UP Maps"></iframe>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-navy section" style={{marginTop: '0'}}>
        <div className="container text-center">
          <h2 style={{color: 'white'}}>Pronto para destravar seu inglês?</h2>
          <a href="https://wa.me/5551999309238" className="btn btn-primary" style={{marginTop: '20px'}}>Chamar no WhatsApp Agora</a>
          <p style={{marginTop: '40px', color: '#64748b', fontSize: '0.8rem'}}>© 2026 Speak UP English School. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;