import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '📚',
      title: 'Wide Range of Quiz Categories',
      description: 'Choose from categories like General Knowledge, Science, History, Sports, Movies, and more. Our database is powered by trusted trivia APIs, ensuring a fresh and diverse set of questions every time.'
    },
    {
      id: 2,
      icon: '⏱',
      title: 'Timer-Based Questions',
      description: 'Each question comes with a countdown timer to test your quick thinking and prevent cheating. Sharpen your reflexes while learning something new!'
    },
    {
      id: 3,
      icon: '🧮',
      title: 'Real-Time Score Tracking',
      description: 'Instantly see your score update as you answer questions. Your final score helps you compare, improve, and challenge friends.'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Smart Difficulty Levels',
      description: 'Play quizzes in Easy, Medium, or Hard mode. The app adapts to your comfort level, helping beginners and pros alike.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Final Performance Report',
      description: 'At the end of each quiz, we show you:\n• Total score\n• Correct vs. wrong answers\n• Time taken\n\nGreat for self-assessment or competing with others!'
    },
    {
      id: 6,
      icon: '📱',
      title: 'Fully Responsive Design',
      description: 'Whether you\'re on a phone, tablet, or desktop — enjoy a smooth and seamless quiz experience anytime, anywhere.'
    }
  ];

  return (
    <div className="services-container">
      <h2>🎯 Our Services</h2>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <div className="service-description">
              {service.description.includes('\n') 
                ? service.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                : <p>{service.description}</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
