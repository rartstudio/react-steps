import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps/>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handlePrevious(): void {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext(): void {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active": ""}></div>
            <div className={step >= 2 ? "active": ""}></div>
            <div className={step >= 3 ? "active": ""}></div>
          </div>

          <StepMessage step={step}>
            <p style={{marginTop: '0px'}}>
              {messages[step - 1]}
            </p>
            <div className='buttons'>
              <Button
                bgColor='#e7e7e7'
                textColor='#333'
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({step, children}: {step: number, children: any}) {
  return (
    <div className="message">
      <h3 style={{marginBottom: '16px'}}>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({textColor, bgColor, onClick, children}: {textColor: string, bgColor: string, onClick: any, children: any}) {
  return (
    <button
      style={{backgroundColor: bgColor, color: textColor}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}