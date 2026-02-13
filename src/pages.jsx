import React, { useState } from 'react';

// ThankyouPage - after saying yes
export function ThankyouPage({ onContinue }) {
  return (
    <div style={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffe4e1', padding: '2rem' }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d7263d', marginBottom: '2rem' }}>Thank you</div>
      <img src="/images/thanks.png" alt="thanks" style={{ height: '300px', width: 'auto', marginBottom: '2rem', borderRadius: '10px' }} />
      <audio autoPlay loop style={{ display: 'none' }}>
        <source src="/congratulations.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1 style={{ color: '#1b1b1b', marginBottom: '2rem' }}>Don't go yet!</h1>
      <button
        onClick={onContinue}
        style={{
          padding: '0.8rem 1.6rem',
          fontSize: '1rem',
          background: '#d7263d',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px #d7263d33'
        }}
      >
        Click me heheehe...
      </button>
    </div>
  );
}

// DatePage
export function DatePage({ onContinue }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div style={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffe4e1', padding: '2rem' }}>
      <img src="/images/when.gif" alt="when" style={{ height: '250px', marginBottom: '1rem' }} />
      <h1 style={{ color: '#d7263d', marginBottom: '2rem' }}>Are you free on ...</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ fontSize: '1rem', color: '#1b1b1b' }}>Which day: (select a date cuite.. )</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            padding: '0.8rem 1.6rem',
            fontSize: '1rem',
            background: '#d7263d',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #d7263d33'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// FoodPage
export function FoodPage({ onContinue }) {
  const foods = [
    { name: 'Burgers and Fried Chicken', image: 'burgers.jpeg' },
    { name: 'Hotdog', image: 'dog.jpeg' },
    { name: 'Momos', image: 'momos.jpeg' },
    { name: 'Pasta', image: 'pasta.jpeg' },
    { name: 'Pizza', image: 'pizza.jpeg' },
    { name: 'Salad', image: 'salad.jpeg' },
    { name: 'Steak', image: 'steak.jpeg' },
    { name: 'Sushi', image: 'sushi.jpeg' },
  ];
  const [selected, setSelected] = useState([]);

  const toggleFood = (foodName) => {
    setSelected(prev => prev.includes(foodName) ? prev.filter(f => f !== foodName) : [...prev, foodName]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Courier', backgroundColor: '#ffe4e1', color: '#ff9494', minHeight: '100vh' }}>
      <div style={{ fontSize: '50px', marginBottom: '30px', fontWeight: 'bold' }}>What food would you like to eat?</div>
      <div style={{ marginBottom: '2rem' }}>
        {foods.map(food => (
          <div key={food.name} style={{ display: 'inline-block', margin: '10px', verticalAlign: 'top', color: '#ff9494' }}>
            <img 
              src={`/food/${food.image}`} 
              alt={food.name}
              style={{ height: '200px', width: '200px', borderRadius: '50%', border: '5px solid #ff9494', objectFit: 'cover', padding: '10px' }}
            />
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selected.includes(food.name)}
                onChange={() => toggleFood(food.name)}
              />
              {food.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={onContinue}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          margin: '10px',
          fontFamily: 'courier',
          marginBottom: '20px',
          backgroundColor: '#ff9494',
          color: 'white',
          borderRadius: '12px',
          border: '2px solid #ff9494'
        }}
      >
        Continue Hihihhh...
      </button>
    </div>
  );
}

// DessertPage
export function DessertPage({ onContinue }) {
  const desserts = [
    { name: 'Boba', image: 'boba.jpeg' },
    { name: 'Churro', image: 'churro.jpeg' },
    { name: 'Che', image: 'che.jpeg' },
    { name: 'Mochi', image: 'mochi.jpeg' },
    { name: 'Random Bun', image: 'randombun.jpeg' },
    { name: 'Taiyaki', image: 'taiyaki.jpeg' },
  ];
  const [selected, setSelected] = useState([]);

  const toggleDessert = (dessertName) => {
    setSelected(prev => prev.includes(dessertName) ? prev.filter(d => d !== dessertName) : [...prev, dessertName]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'courier', backgroundColor: '#ffe4e1', color: '#ff9494', minHeight: '100vh' }}>
      <div style={{ fontSize: '50px', marginBottom: '30px', fontWeight: 'bold' }}>Which dessert we eatin cuh</div>
      <div style={{ marginBottom: '2rem' }}>
        {desserts.map(dessert => (
          <div key={dessert.name} style={{ display: 'inline-block', margin: '10px', verticalAlign: 'top', color: '#ff9494' }}>
            <img 
              src={`/food/${dessert.image}`} 
              alt={dessert.name}
              style={{ height: '200px', width: '200px', borderRadius: '50%', border: '5px solid #ff9494', objectFit: 'cover', padding: '10px' }}
            />
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selected.includes(dessert.name)}
                onChange={() => toggleDessert(dessert.name)}
              />
              {dessert.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={onContinue}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          margin: '10px',
          fontFamily: 'courier',
          marginBottom: '20px',
          backgroundColor: '#ff9494',
          color: 'white',
          borderRadius: '12px',
          border: '2px solid #ff9494'
        }}
      >
        Continue UwU
      </button>
    </div>
  );
}

// ActivitiesPage
export function ActivitiesPage({ onContinue }) {
  const activities = [
    { name: 'Aquarium', image: 'aquarium.jpeg' },
    { name: 'Arcade', image: 'arcade.jpeg' },
    { name: 'Cinema', image: 'cinema.jpeg' },
    { name: 'Ceramics', image: 'keramika.jpeg' },
    { name: 'Exhibition', image: 'kunsthalle.jpeg' },
    { name: 'Park', image: 'park.jpeg' },
  ];
  const [selected, setSelected] = useState([]);

  const toggleActivity = (activityName) => {
    setSelected(prev => prev.includes(activityName) ? prev.filter(a => a !== activityName) : [...prev, activityName]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Courier', backgroundColor: '#ffe4e1', color: '#ff9494', minHeight: '100vh' }}>
      <div style={{ fontSize: '50px', marginBottom: '30px', fontWeight: 'bold' }}>What are we doing after?</div>
      <div style={{ marginBottom: '2rem' }}>
        {activities.map(activity => (
          <div key={activity.name} style={{ display: 'inline-block', margin: '10px', verticalAlign: 'top', color: '#ff9494' }}>
            <img 
              src={`/activities/${activity.image}`} 
              alt={activity.name}
              style={{ height: '200px', width: '200px', borderRadius: '50%', border: '5px solid #ff9494', objectFit: 'cover', padding: '10px' }}
            />
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selected.includes(activity.name)}
                onChange={() => toggleActivity(activity.name)}
              />
              {activity.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={onContinue}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          margin: '10px',
          fontFamily: 'courier',
          marginBottom: '20px',
          backgroundColor: '#ff9494',
          color: 'white',
          borderRadius: '12px',
          border: '2px solid #ff9494'
        }}
      >
        Last page ...
      </button>
    </div>
  );
}

// LastPage with animated flowers
export function LastPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden', backgroundColor: '#ffe4e1', color: '#FF9494', fontFamily: 'courier' }}>
      <style>{`
        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        #thankyou {
          width: 100%;
          text-align: center;
          margin-top: 20px;
          z-index: 1000;
          position: relative;
          margin-bottom: 400px;
          font-size: 50px;
        }

        .flower {
          position: relative;
        }

        .flower__glass {
          width: 20vmin;
          height: 30vmin;
          background-image: linear-gradient(to left, #142544, #1a9092);
          clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
          opacity: 0.8;
          position: relative;
        }

        .flower__glass::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #182843;
          width: 100%;
          height: 2vmin;
        }

        .flower__glass::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(to left, #142544, #1b6d6e);
          width: 100%;
          height: 15vmin;
        }

        .f-wrapper {
          position: absolute;
          left: 45%;
          bottom: 2vmin;
        }

        .f-wrapper--2 {
          left: 50%;
          bottom: 5%;
          transform-origin: 10% left;
          transform: rotate(20deg);
        }

        .f-wrapper--3 {
          left: 30%;
          bottom: 5%;
          transform-origin: 10% left;
          transform: rotate(-10deg);
        }

        .f-wrapper--3 .flower__line {
          height: 45vmin;
          position: relative;
        }

        .f-wrapper--3 .flower__line::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 6vmin;
          height: 6vmin;
          transform: translate(-69%, -30%) rotate(-5deg);
          border-radius: 10vmin 10vmin 0 0;
          border: 2vmin solid #104d4e;
          border-bottom: transparent;
          border-left: transparent;
        }

        .f-wrapper--3 .flower__line::before {
          content: '';
          position: absolute;
          left: -40%;
          top: -1%;
          width: 6vmin;
          height: 2vmin;
          transform-origin: right;
          transform: translate(-100%, -80%) rotate(-20deg);
          background-color: #104d4e;
          border-radius: 2vmin;
        }

        .f-wrapper--3 .flower__line {
          background-image: linear-gradient(to top, #142544, #104d4e);
        }

        .f-wrapper--2 .flower__line {
          height: 45vmin;
        }

        .f-wrapper--2 .f {
          transform: translateX(-50%) rotate(20deg);
        }

        .f-wrapper--3 .f {
          transform: translate(-350%, -50%) rotate(-120deg);
        }

        .f-wrapper--2 .flower__leaf:not(:first-child) {
          width: 3.8vmin;
          height: 10vmin;
          background-image: linear-gradient(to bottom, #ff43b6, #c22887, #1a233a 99%);
        }

        .f-wrapper--3 .flower__leaf:not(:first-child) {
          width: 3.8vmin;
          height: 10vmin;
          background-image: linear-gradient(to bottom, #ad2be0, #712291, #1a233a 99%);
        }

        .f-wrapper--3 .flower__leaf--1 {
          width: 8vmin;
          height: 10vmin;
          bottom: 2vmin;
          background-color: #ad2be0;
        }

        .f-wrapper--2 .flower__leaf--1 {
          width: 8vmin;
          height: 10vmin;
          bottom: 2vmin;
          background-color: #de118b;
        }

        .f-wrapper--2 .f .flower__leaf--8 {
          width: 10vmin;
          height: 9vmin;
          bottom: 3vmin;
          left: -30%;
          transform: rotate(-50deg);
          background-image: linear-gradient(to left bottom, #ff43b6, #4d1337);
        }

        .f-wrapper--3 .f .flower__leaf--8 {
          width: 10vmin;
          height: 9vmin;
          left: -10% !important;
          background-image: linear-gradient(to left bottom, #ad2be0, #712291);
        }

        .flower__line {
          width: 2vmin;
          height: 56vmin;
          background-image: linear-gradient(to left top, #82fdff 20%, #142544, #104d4e);
          border-radius: 4vmin;
        }

        .f {
          position: absolute;
          top: 1vmin;
          left: 50%;
          transform: translateX(-50%) rotate(-10deg);
          width: 2vmin;
          height: 2vmin;
        }

        .flower__leaf {
          position: absolute;
          left: 50%;
          bottom: 2vmin;
          transform: translateX(-50%);
          width: 5vmin;
          height: 14vmin;
          background-image: linear-gradient(to bottom, #ffa085, #fa7373, #1a233a 99%);
          clip-path: ellipse(50% 50% at 50% 50%);
          transform-origin: center bottom;
          animation: open-flower 2s 1s backwards;
        }

        .flower__leaf--1 {
          width: 10vmin;
          height: 12vmin;
          bottom: 3vmin;
          border-radius: 50% 50% 50% 50% / 80% 80% 20% 20%;
          background-color: #e24f5f;
          background-image: none;
          animation: open-flowe--middle 1.4s 1s backwards;
        }

        .flower__leaf--2 {
          transform: translateX(-50%) rotate(-30deg);
        }
        .flower__leaf--3 {
          transform: translateX(-50%) rotate(-50deg);
        }
        .flower__leaf--4 {
          transform: translateX(-50%) rotate(-70deg);
        }
        .flower__leaf--5 {
          transform: translateX(-50%) rotate(30deg);
        }
        .flower__leaf--6 {
          transform: translateX(-50%) rotate(50deg);
        }
        .flower__leaf--7 {
          transform: translateX(-50%) rotate(70deg);
        }
        .flower__leaf--8 {
          width: 13vmin;
          height: 11vmin;
          bottom: 6vmin;
          left: -30%;
          border-radius: none;
          clip-path: none;
          border-radius: 10vmin 2vmin 10vmin 2vmin;
          transform: rotate(-55deg);
          background-image: linear-gradient(to left bottom, #ffa085, #eb8b8b, #492f2f 98%);
        }

        .flower__fall-down--yellow {
          animation: flower-fall-down-yellow 8s 1.2s linear forwards;
        }

        .flower__fall-down--pink {
          animation: flower-fall-down-pink 5s 1.2s linear forwards;
        }

        .flower__fall-down--purple {
          bottom: 4vmin;
          animation: flower-fall-down-purple 6s 1.2s linear forwards, flower-falling 6s 7.2s linear infinite;
        }

        @keyframes open-flower {
          0% {
            transform: translateX(-50%) rotate(0);
          }
        }

        @keyframes open-flowe--middle {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0);
          }
        }

        @keyframes flower-fall-down-pink {
          0% {
            transform: rotate(-55deg);
          }
          50% {
            transform: rotateX(-100deg);
          }
          100% {
            transform: translate(2vmin, 28vmin);
          }
        }

        @keyframes flower-fall-down-yellow {
          0% {
            transform: rotate(-55deg);
          }
          50% {
            bottom: 3vmin;
            transform: rotateX(-100deg);
          }
          100% {
            transform: translate(2vmin, 70vmin) rotate(150deg);
          }
        }

        @keyframes flower-fall-down-purple {
          0% {
            transform: rotate(-50deg);
          }
          25% {
            bottom: 1vmin;
            transform: rotateX(-100deg);
            perspective: 0px;
          }
          50% {
            perspective: 0px;
            transform: translate(-30vmin, 2vmin) rotate(90deg);
          }
          75% {
            perspective: 0px;
            transform: translate(-34vmin, -2vmin);
          }
          100% {
            transform-origin: center;
            transform: translate(-34vmin, -2vmin) rotateY(-80deg) rotateX(35deg);
          }
        }

        @keyframes flower-falling {
          0%, 100% {
            transform-origin: center;
            transform: translate(-34vmin, -2vmin) rotateY(-80deg) rotateX(35deg);
          }
          25% {
            transform-origin: center;
            transform: translate(-34.4vmin, -2vmin) rotateY(-84deg) rotateX(35deg);
          }
          50% {
            transform-origin: center;
            transform: translate(-32vmin, -4.2vmin) rotateY(-80deg) rotateX(35deg);
          }
          75% {
            transform-origin: center;
            transform: translate(-36vmin, 1.1vmin) rotateY(-80deg) rotateX(35deg);
          }
        }
      `}</style>
      
      <div id="thankyou"><b>Thank you for being my Girlfriend</b></div>
      
      <div className="flower">
        <div className="f-wrapper">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--2">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--3">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
          </div>
        </div>
        <div className="flower__glass"></div>
      </div>
    </div>
  );
}
