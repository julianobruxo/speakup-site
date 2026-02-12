import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- BANCO DE 60 QUESTÕES (COMPLETO E ATUALIZADO) ---
const questionsData = [
  // 🟢 INTRO (A1)
  { id: 1, level: 'A1', question: "My name ___ Lucas.", options: ["am", "is", "are"], answer: "is" },
  { id: 2, level: 'A1', question: "Jane ___ from Argentina.", options: ["is", "are", "am"], answer: "is" },
  { id: 3, level: 'A1', question: "___ Charlie and Robert students here?", options: ["Are", "Do", "Is"], answer: "Are" },
  { id: 4, level: 'A1', question: "My sister works as a ___. She helps passengers on airplanes.", options: ["flight attendant", "surgeon", "architect"], answer: "flight attendant" },
  { id: 5, level: 'A1', question: "___ a drugstore near my house.", options: ["There is", "There are", "Have"], answer: "There is" },
  { id: 6, level: 'A1', question: "We ___ watch TV during dinner.", options: ["don’t", "doesn’t", "aren’t"], answer: "don’t" },
  { id: 7, level: 'A1', question: "He ___ English on Tuesdays and Thursdays.", options: ["study", "studies", "is studying"], answer: "studies" },
  { id: 8, level: 'A1', question: "I live ___ an apartment downtown.", options: ["in", "on", "at"], answer: "in" },
  { id: 9, level: 'A1', question: "There aren’t ___ restaurants open late at night.", options: ["some", "any", "much"], answer: "any" },
  { id: 10, level: 'A1', question: "My boots are wet. Please help me with_____.", options: ["them", "they", "their"], answer: "them" },
  { id: 11, level: 'A1', question: "What time ___ she get home?", options: ["do", "does", "is"], answer: "does" },
  { id: 12, level: 'A1', question: "The downtown area has many small ___ and cafés.", options: ["stores", "laboratories", "warehouses"], answer: "stores" },
  { id: 13, level: 'A1', question: "She is wearing ___ new glasses.", options: ["her", "she", "hers"], answer: "her" },
  { id: 14, level: 'A1', question: "Josh ___ celebrate his birthday tomorrow.", options: ["are going to", "will", "is going to"], answer: "is going to" },
  { id: 15, level: 'A1', question: "There isn’t ___ traffic late at night.", options: ["many", "much", "a few"], answer: "much" },

  // 🟡 LEVEL 1 (A2)
  { id: 16, level: 'A2', question: "I ___ to Quebec’s Winter Carnival last year.", options: ["go", "went", "have gone"], answer: "went" },
  { id: 17, level: 'A2', question: "She _____ at her current job for 3 years.", options: ["has worked", "worked", "is working"], answer: "has worked" },
  { id: 18, level: 'A2', question: "We were exhausted, ___ we left the festival early.", options: ["but", "so", "although"], answer: "so" },
  { id: 19, level: 'A2', question: "___ been to an international conference?", options: ["Did you ever", "Have you ever", "Do you ever"], answer: "Have you ever" },
  { id: 20, level: 'A2', question: "He didn’t ___ the invitation.", options: ["receive", "received", "receives"], answer: "receive" },
  { id: 21, level: 'A2', question: "She’s interested ___ environmental issues.", options: ["in", "on", "at"], answer: "in" },
  { id: 22, level: 'A2', question: "The new subway system is ___ than the old one.", options: ["efficient", "more efficient", "most efficient"], answer: "more efficient" },
  { id: 23, level: 'A2', question: "There are ___ tourists in the city during winter.", options: ["too much", "too many", "very"], answer: "too many" },
  { id: 24, level: 'A2', question: "He told me he ___ preparing a report.", options: ["is", "was", "were"], answer: "was" },
  { id: 25, level: 'A2', question: "If it rains tomorrow, we ___ cancel the parade.", options: ["will", "would", "are going to"], answer: "will" },
  { id: 26, level: 'A2', question: "That’s the museum ___ you can see ancient sculptures.", options: ["where", "which", "who"], answer: "where" },
  { id: 27, level: 'A2', question: "We didn’t have ___ time to visit the exhibition.", options: ["enough", "too", "very"], answer: "enough" },
  { id: 28, level: 'A2', question: "She asked me ___ I had finished the project.", options: ["what", "if", "how"], answer: "if" },
  { id: 29, level: 'A2', question: "He speaks more confidently ___ before.", options: ["than", "then", "that"], answer: "than" },
  { id: 30, level: 'A2', question: "This is the ___ restaurant in the neighborhood.", options: ["better", "best", "most good"], answer: "best" },

  // 🟠 LEVEL 2 (B1)
  { id: 31, level: 'B1', question: "If I ___ more experience, I’d apply for that position.", options: ["have", "had", "will have"], answer: "had" },
  { id: 32, level: 'B1', question: "She suggested ___ the deadline.", options: ["extending", "extend", "to extend"], answer: "extending" },
  { id: 33, level: 'B1', question: "I’m not used to ___ in such a competitive environment.", options: ["work", "working", "to work"], answer: "working" },
  { id: 34, level: 'B1', question: "He wishes he ___ more reliable colleagues.", options: ["has", "had", "will have"], answer: "had" },
  { id: 35, level: 'B1', question: "By the time the CEO arrived, the meeting ___.", options: ["started", "has started", "had started"], answer: "had started" },
  { id: 36, level: 'B1', question: "The company is responsible ___ the environmental damage.", options: ["for", "of", "with"], answer: "for" },
  { id: 37, level: 'B1', question: "Our house _____ by my grandfather 70 years ago.", options: ["built", "is built", "was built"], answer: "was built" },
  { id: 38, level: 'B1', question: "I ________ taking a shower _____ the lights went out.", options: ["was taking / while", "were taking / when", "was taking / when"], answer: "was taking / when" },
  { id: 39, level: 'B1', question: "Where ______ you born?", options: ["did", "was", "were"], answer: "were" },
  { id: 40, level: 'B1', question: "I’d rather ___ an English course before traveling abroad.", options: ["take", "to take", "taking"], answer: "take" },
  { id: 41, level: 'B1', question: "He denied ___ the data.", options: ["manipulate", "manipulating", "to manipulate"], answer: "manipulating" },
  { id: 42, level: 'B1', question: "She had her presentation ___.", options: ["revise", "revising", "revised"], answer: "revised" },
  { id: 43, level: 'B1', question: "It’s not worth ___ about minor setbacks.", options: ["worry", "worrying", "to worry"], answer: "worrying" },
  { id: 44, level: 'B1', question: "She speaks as if she ___ the entire department.", options: ["manages", "managed", "manage"], answer: "managed" },
  { id: 45, level: 'B1', question: "The project was delayed ___ unexpected technical issues.", options: ["due to", "because", "although"], answer: "due to" },

  // 🔴 LEVEL 3 (B2)
  { id: 46, level: 'B2', question: "Please close the window. I can’t ______ all the noise on the street.", options: ["break up with", "put up with", "come up with"], answer: "put up with" },
  { id: 47, level: 'B2', question: "Brett didn’t call his grandmother on her birthday. His ______ was that he was out of town and forgot.", options: ["warning", "assumption", "excuse"], answer: "excuse" },
  { id: 48, level: 'B2', question: "A: That meal wasn’t very good. B: Really? I thought it was great. I ______ eaten more if they had cooked it!", options: ["should have", "would have", "must have"], answer: "would have" },
  { id: 49, level: 'B2', question: "A: Cassandra looks upset. B: She ______ gotten some bad news.", options: ["should have", "must have", "would have"], answer: "must have" },
  { id: 50, level: 'B2', question: "Despite ___ clear evidence, the board remained skeptical.", options: ["having", "have", "had"], answer: "having" },
  { id: 51, level: 'B2', question: "The report needs ___ before it’s presented to stakeholders.", options: ["reviewing", "review", "to review"], answer: "reviewing" },
  { id: 52, level: 'B2', question: "He was accused ___ breaching company policy.", options: ["of", "for", "with"], answer: "of" },
  { id: 53, level: 'B2', question: "Mia doesn’t like sharing her office supplies with her co-workers. She’s a very ______ person.", options: ["stingy", "easygoing", "moody"], answer: "stingy" },
  { id: 54, level: 'B2', question: "You can learn more about other people and cultures _______ a world literature course.", options: ["by taking", "by to take", "by taken"], answer: "by taking" },
  { id: 55, level: 'B2', question: "Is it OK if _____ the window?", options: ["I open", "I opened", "opening"], answer: "I open" },
  { id: 56, level: 'B2', question: "I was wondering if I ______ talk to you for a few minutes.", options: ["can", "could", "would"], answer: "could" },
  { id: 57, level: 'B2', question: "She insisted ___ full transparency during the investigation.", options: ["on", "in", "at"], answer: "on" },
  { id: 58, level: 'B2', question: "Could you ask Amelia ______ my plants?", options: ["water", "to water", "watering"], answer: "to water" },
  { id: 59, level: 'B2', question: "The contract, ___ was drafted last week, contains several loopholes.", options: ["which", "that", "what"], answer: "which" },
  { id: 60, level: 'B2', question: "He speaks English quite well and ______ you.", options: ["so do", "either do", "neither do"], answer: "so do" }
];

// --- COMPONENTE PRINCIPAL ---
const QuizModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('intro'); // Inicia na INTRO
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersLog, setAnswersLog] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);

  // Inicializa o EmailJS e reseta o teste
  useEffect(() => {
    if (isOpen) {
      emailjs.init("Hry79iMrM6wfAL8ND"); // <--- CONFIRA SE SUA KEY ESTÁ AQUI
      setStep('intro');
      setCurrentQuestion(0);
      setAnswersLog([]);
      setUserData({ name: '', phone: '' });
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Lógica de resposta
  const handleAnswer = (option) => {
    const currentQ = questionsData[currentQuestion];
    const isCorrect = option === currentQ.answer;
    const log = {
      nivel: currentQ.level,
      pergunta: currentQ.question,
      escolha: option,
      correto: isCorrect ? 1 : 0
    };
    const newLog = [...answersLog, log];
    setAnswersLog(newLog);

    if (currentQuestion + 1 >= questionsData.length) {
      setStep('capture'); 
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Lógica de cálculo
  const calculateRobustLevel = (fullLog) => {
    let scores = { A1: 0, A2: 0, B1: 0, B2: 0 };
    fullLog.forEach(entry => { if (entry.correto === 1) scores[entry.nivel] += 1; });
    const PASS_MARK = 12; 
    const PARTIAL_MARK = 9; 
    const details = `A1: ${scores.A1}/15 | A2: ${scores.A2}/15 | B1: ${scores.B1}/15 | B2: ${scores.B2}/15`;
    let finalLevel = "Iniciante (Pré-A1)";

    if (scores.A1 >= PASS_MARK) {
      if (scores.A2 < PARTIAL_MARK) finalLevel = "A1 (Básico)";
      else if (scores.A2 < PASS_MARK) finalLevel = "A1 (com A2 em andamento)";
      else {
        if (scores.B1 < PARTIAL_MARK) finalLevel = "A2 (Básico Consolidado)";
        else if (scores.B1 < PASS_MARK) finalLevel = "A2 (com B1 em andamento)";
        else {
          if (scores.B2 < PARTIAL_MARK) finalLevel = "B1 (Intermediário)";
          else if (scores.B2 < PASS_MARK) finalLevel = "B1 (com B2 em andamento)";
          else finalLevel = "B2 (Avançado)";
        }
      }
    }
    return { level: finalLevel, stats: details };
  };

  // Envio do formulário
  const handleCaptureSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.phone) {
        finishQuiz(); 
    } else {
        alert("Por favor, preencha os dados para salvar seu resultado.");
    }
  };

  // Envio do Email
  // 4. ENVIAR EMAIL (EmailJS) - COM O RELATÓRIO CORRIGIDO
  const finishQuiz = () => {
    setLoading(true);
    const result = calculateRobustLevel(answersLog);
    const rawPhone = userData.phone.replace(/\D/g, ''); 

    // --- [A PARTE QUE FALTAVA] GERA O TEXTO DE ACERTOS E ERROS ---
    const relatorioTexto = answersLog.map((item, index) => {
      const status = item.correto ? '✅' : '❌';
      // Corta perguntas muito longas para caber no email
      const perguntaResumo = item.pergunta.length > 50 ? item.pergunta.substring(0, 50) + '...' : item.pergunta;
      
      return `${index + 1}. [${item.nivel}] ${status} ${perguntaResumo} \n   (Sua resposta: ${item.escolha})`;
    }).join('\n\n');

    // --- SEUS DADOS (Já preenchi com os que vi na sua imagem) ---
    const serviceID = "service_placementTest";
    const templateID = "template_kuvp0q4";
    const publicKey = "Hry79iMrM6wfAL8ND";

    const templateParams = {
      nome: userData.name,
      whatsapp: rawPhone,
      nivel: result.level,
      detalhes: result.stats,
      relatorio_completo: relatorioTexto // <--- O INGREDIENTE SECRETO
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStep('result');
        setLoading(false);
      }, (err) => {
        console.error('Erro envio:', err);
        setStep('result'); 
        setLoading(false);
      });
  }; 
    
    // --- SUBSTITUA PELOS SEUS DADOS ---
    const serviceID = "service_placementTest"; 
    const templateID = "template_kuvp0q4"; 
    const publicKey = "Hry79iMrM6wfAL8ND"; 

    const templateParams = {
      nome: userData.name,
      whatsapp: rawPhone,
      nivel: result.level,
      detalhes: result.stats
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStep('result');
        setLoading(false);
      }, (err) => {
        console.error('Erro envio:', err);
        setStep('result'); 
        setLoading(false);
      });
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999,
      backgroundColor: 'rgba(20, 33, 61, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'white', padding: '2.5rem', borderRadius: '20px', width: '90%', maxWidth: '600px', 
        position: 'relative', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}>
        <button onClick={onClose} style={{position: 'absolute', top: 15, right: 15, border: 'none', background: 'transparent', cursor: 'pointer'}}>
          <X size={24} color="#666" />
        </button>

        {/* TELA 0: INTRODUÇÃO */}
        {step === 'intro' && (
          <div style={{textAlign: 'center'}}>
             <div style={{marginBottom: '20px'}}>
                <span style={{fontSize: '4rem'}}>🚀</span>
             </div>
             <h2 style={{color: '#1B2B4A', marginBottom: '1.5rem', fontSize: '1.8rem'}}>
               Bem-vindo ao Teste de Nível!
             </h2>
             <div style={{textAlign: 'left', background: '#F3F4F6', padding: '20px', borderRadius: '15px', marginBottom: '25px'}}>
               <p style={{color: '#4b5563', marginBottom: '10px'}}>
                 ✅ <strong>Escolha única:</strong> Todas as questões possuem apenas uma alternativa correta.
               </p>
               <p style={{color: '#4b5563', marginBottom: '10px'}}>
                 ⚠️ <strong>Sem volta:</strong> Ao clicar, você seleciona a resposta imediatamente. Escolha com cuidado!
               </p>
               <p style={{color: '#4b5563'}}>
                 🤖 <strong>Resultado I.A.:</strong> Ao final, nossa inteligência artificial analisará seu desempenho.
               </p>
             </div>
             <button onClick={() => setStep('quiz')} className="btn btn-primary" style={{width: '100%', padding: '15px'}}>
               Ok, let's begin! 👉
             </button>
          </div>
        )}

        {/* TELA 1: O QUIZ */}
        {step === 'quiz' && (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#888', fontSize: '0.8rem'}}>
              <span>Questão {currentQuestion + 1} de {questionsData.length}</span>
              <span style={{fontWeight: 'bold', color: '#8B1E2F'}}>{questionsData[currentQuestion].level}</span>
            </div>
            <div style={{width: '100%', height: '8px', background: '#eee', borderRadius: '4px', marginBottom: '25px'}}>
              <div style={{width: `${((currentQuestion + 1) / questionsData.length) * 100}%`, height: '100%', background: '#9D2235', borderRadius: '4px', transition: 'width 0.3s'}}></div>
            </div>
            <h3 style={{color: '#1B2B4A', marginBottom: '30px', fontSize: '1.3rem', lineHeight: '1.5'}}>
              {questionsData[currentQuestion].question}
            </h3>
            <div style={{display: 'grid', gap: '12px'}}>
              {questionsData[currentQuestion].options.map((opt, index) => (
                <button 
                  key={index} 
                  onClick={() => handleAnswer(opt)}
                  style={{
                    padding: '18px', textAlign: 'left', borderRadius: '12px', border: '2px solid #f3f4f6',
                    background: 'white', cursor: 'pointer', fontSize: '1rem', transition: '0.2s', color: '#374151', fontWeight: '500'
                  }}
                  onMouseOver={(e) => { e.target.style.borderColor = '#9D2235'; e.target.style.background = '#FFF5F5'; }}
                  onMouseOut={(e) => { e.target.style.borderColor = '#f3f4f6'; e.target.style.background = 'white'; }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TELA 2: CAPTURA */}
        {step === 'capture' && (
          <div className="text-center">
            <Lock size={50} color="#9D2235" style={{margin: '0 auto 20px'}} />
            <h2 style={{color: '#1B2B4A', marginBottom: '10px'}}>Teste Finalizado! 🔒</h2>
            <p style={{marginBottom: '20px', color: '#666'}}>Informe seus dados para gerar seu relatório.</p>
            <form onSubmit={handleCaptureSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              <input type="text" placeholder="Nome Completo" required value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} style={{padding: '15px', borderRadius: '8px', border: '1px solid #ddd'}} />
              <input type="tel" placeholder="WhatsApp com DDD" required value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})} style={{padding: '15px', borderRadius: '8px', border: '1px solid #ddd'}} />
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>{loading ? "Calculando..." : "Ver Meu Resultado 🚀"}</button>
            </form>
          </div>
        )}

        {/* TELA 3: RESULTADO */}
        {step === 'result' && (
          <div style={{textAlign: 'center'}}>
            <CheckCircle size={60} color="#10B981" style={{margin: '0 auto 20px'}} />
            <h2 style={{color: '#1B2B4A'}}>Recebido! 🚀</h2>
            <div style={{backgroundColor: '#F3F4F6', padding: '20px', borderRadius: '10px', margin: '20px 0'}}>
              <p style={{fontSize: '1rem', color: '#555'}}>Análise concluída.</p>
              <p style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#1B2B4A', marginTop: '10px'}}>Um professor entrará em contato em breve.</p>
            </div>
            <button onClick={onClose} className="btn btn-primary">Fechar</button>
          </div>
        )}
      </div>
    </div>
  );


export default QuizModal;