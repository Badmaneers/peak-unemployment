import React, { useState } from 'react';

function App() {
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noBlasted, setNoBlasted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: 0, left: 150 });
  const [questionStep, setQuestionStep] = useState(0);
  const [denyingPage, setDenyingPage] = useState(false);
  // begState controls the flow after the denying page: 'initial', 'confirm', 'soIsItYes', 'final'
  const [begState, setBegState] = useState('initial');

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
      {!denyingPage ? (
        <>
          <h1 style={{ color: '#d7263d', marginBottom: '2rem' }}>{answered ? '' : questions[questionStep]}</h1>
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
                  lineHeight: '1'
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
            <div style={{ marginTop: '2rem', fontSize: '2rem', color: '#d7263d', textAlign: 'center' }}>
              Yayayayay I love you lets gooo!!!! ❤️
            </div>
          )}
        </>
      ) : (
        <div style={{ fontSize: '2rem', color: '#1b1b1b', textAlign: 'center' }}>
          {begState === 'initial' && (
            <>
              <div>Are you still denying 😭??</div>
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
              i knew it you wont say no, I love you❤️
            </div>
          )}

          {begState === 'final' && (
            <div style={{ marginTop: '2rem', color: '#d7263d', fontSize: '1.8rem' }}>
              Fine fine... you don't deserve my love (just kidding!) ❤️
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
      `}</style>
    </div>
  );
}

export default App;
