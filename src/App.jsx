import React, { useState } from 'react';
import { ThankyouPage, DatePage, FoodPage, DessertPage, ActivitiesPage, LastPage } from './pages';

function App() {
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noBlasted, setNoBlasted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: 0, left: 150 });
  const [questionStep, setQuestionStep] = useState(0);
  const [denyingPage, setDenyingPage] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  // begState controls the flow after the denying page: 'initial', 'confirm', 'soIsItYes', 'final'
  const [begState, setBegState] = useState('initial');
  // pageState controls the post-yes flow
  const [pageState, setPageState] = useState('thankyou');
  const [gifAnimating, setGifAnimating] = useState(false);

  const handleGetOffGifInteraction = () => {
    setGifAnimating(true);
    setTimeout(() => setGifAnimating(false), 3000);
  };

  const questions = [
    'Will you be my Valentine?',
    'Are you sure?',
    'Fr???',
    'Still sure??',
  ];

  const handleYes = () => {
    if (questionStep < questions.length - 1) {
      setQuestionStep(questionStep + 1);
    } else {
      setAnswered(true);
    }
  };

  const handleNo = () => {
    setNoBlasted(true);
    setYesScale(yesScale + 0.2);
    setTimeout(() => {
      setNoBlasted(false);
      if (noCount < 3) {
        // Random position for new No button, avoiding Yes button area
        let newTop, newLeft;
        do {
          newTop = Math.random() * 300 - 150;
          newLeft = Math.random() * 300 - 150;
        } while (
          Math.abs(newTop) < 60 && Math.abs(newLeft) < 120 // Avoid Yes button region
        );
        setNoButtonPos({ top: newTop, left: newLeft });
        setNoCount(noCount + 1);
      } else {
        setDenyingPage(true);
      }
    }, 500);
  };

  return (
    <div className="App" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#ffe4e1' }}>
      <style>{`
        @keyframes blast {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
      {!denyingPage ? (
        <>
          {questionStep === 0 && !answered && (
            <img src="/images/please.png" alt="please" style={{ height: '200px', marginBottom: '1rem' }} />
          )}
          {questionStep === 1 && !answered && (
            <img src="/images/are-you-sure.gif" alt="are you sure" style={{ height: '250px', marginBottom: '1rem' }} />
          )}
          {questionStep === 2 && !answered && (
            <img src="/images/fr.gif" alt="fr" style={{ height: '250px', marginBottom: '1rem' }} />
          )}
          {questionStep === 3 && !answered && (
            <img src="/images/sus-umm.gif" alt="sus umm" style={{ height: '250px', marginBottom: '1rem' }} />
          )}
          <h1 style={{ color: '#d7263d', marginBottom: '2rem' }}>{answered || questionStep === 1 ? '' : (questionStep === 0 ? questions[questionStep] : questions[questionStep])}</h1>
          {!answered && (
            <div style={{ display: 'flex', gap: '2rem', position: 'relative', minHeight: '100px', width: '360px', justifyContent: 'flex-start' }}>
              <button
                style={{
                  height: '52px',
                  padding: '0 24px',
                  fontSize: '1.3rem',
                  background: '#d7263d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '28px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #d7263d33',
                  transition: 'transform 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1',
                  transform: `scale(${yesScale})`
                }}
                onClick={handleYes}
              >
                Yes
              </button>
              {!noBlasted && noCount < 4 && (
                <button
                  style={{
                    height: '52px',
                    padding: '0 24px',
                    fontSize: '1.3rem',
                    background: '#1b1b1b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '28px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #1b1b1b33',
                    transition: 'transform 0.2s',
                    position: 'absolute',
                    top: `${noButtonPos.top}px`,
                    left: `${noButtonPos.left}px`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                  onClick={handleNo}
                >
                  No
                </button>
              )}
              {noBlasted && (
                <span style={{ fontSize: '2rem', color: '#d7263d', animation: 'blast 0.5s linear', position: 'absolute', top: `${noButtonPos.top}px`, left: `${noButtonPos.left}px` }}>💥</span>
              )}
            </div>
          )}
          {answered && (
            <div>
              {pageState === 'thankyou' && <ThankyouPage onContinue={() => setPageState('date')} />}
              {pageState === 'date' && <DatePage onContinue={() => setPageState('food')} />}
              {pageState === 'food' && <FoodPage onContinue={() => setPageState('dessert')} />}
              {pageState === 'dessert' && <DessertPage onContinue={() => setPageState('activities')} />}
              {pageState === 'activities' && <ActivitiesPage onContinue={() => setPageState('lastpage')} />}
              {pageState === 'lastpage' && <LastPage />}
            </div>
          )}
        </>
      ) : (
        <div style={{ fontSize: '2rem', color: '#1b1b1b', textAlign: 'center' }}>
          {begState === 'initial' && (
            <>
              <img src="/images/crying-please.gif" alt="crying please" style={{ height: '250px', marginBottom: '1rem' }} />
              <div>Are you still denying??</div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <button
                  style={{
                    height: '48px',
                    padding: '0 20px',
                    fontSize: '1.1rem',
                    background: '#d7263d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #d7263d33',
                    transition: 'transform 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                  onClick={() => setBegState('confirm')}
                >
                  Yes
                </button>
                <button
                  style={{
                    height: '48px',
                    padding: '0 20px',
                    fontSize: '1.1rem',
                    background: '#1b1b1b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #1b1b1b33',
                    transition: 'transform 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                  onClick={() => setBegState('iKnew')}
                >
                  No
                </button>
              </div>
            </>
          )}

          {begState === 'confirm' && (
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <img src="/images/wuaaaahhh.gif " alt="wuaaaahhh" style={{ height: '250px', marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.5rem' }}>So... it's a yes??</div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#d7263d', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => setBegState('final')}
                >
                  Yes
                </button>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#1b1b1b', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => setBegState('soIsItYes')}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {begState === 'soIsItYes' && (
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>So it's a yes????</div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#d7263d', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => setBegState('final')}
                >
                  Yes
                </button>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#1b1b1b', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => setBegState('initial')}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {begState === 'iKnew' && (
            <div style={{ marginTop: '2rem', color: '#d7263d', fontSize: '1.8rem', textAlign: 'center' }}>
              <img src="/images/hehe.gif" alt="hehe" style={{ height: '250px', marginBottom: '1rem' }} />
              <div>i knew it you wont say no, I love you❤️</div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#d7263d', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => { setDenyingPage(false); setAnswered(true); setPageState('date'); }}
                >
                  Me too
                </button>
                <button
                  style={{ height: '44px', padding: '0 18px', background: '#1b1b1b', color: 'white', border: 'none', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}
                  onClick={() => { setBegState('final'); setAnswered(false); }}
                >
                  Just kidding
                </button>
              </div>
            </div>
          )}

          {begState === 'final' && (
            <div 
              style={{ marginTop: '2rem', color: '#d7263d', fontSize: '1.8rem', textAlign: 'center', cursor: 'pointer' }}
              onClick={handleGetOffGifInteraction}
              onTouchStart={handleGetOffGifInteraction}
            >
              <img 
                src="/images/get-off.gif" 
                alt="get off" 
                className={gifAnimating ? 'gif-animating' : ''}
                style={{ height: '300px', marginBottom: '1rem' }} 
              />
              <div>Fine fine... you don't deserve my love (FAT PIGGGG!!)</div>
            </div>
          )}
        </div>
      )}
      <style>{`
        @keyframes blast {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(2); }
        }
        @keyframes gifShake {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.05); }
          75% { transform: rotate(5deg) scale(1.05); }
        }
        .gif-animating {
          animation: gifShake 0.5s !important;
        }
      `}</style>
    </div>
  );
}

export default App;
