import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  
  const categories = [
    { id: 1, name: 'General Knowledge', description: 'A mix of everything!', image: '../../assets/images/quiz/quizimage1.png' },
    { id: 2, name: 'Science & Nature', description: 'Facts about physics, chemistry, biology, and more.', image: '../../assets/images/quiz/quizimage2.png' },
    { id: 3, name: 'History', description: 'Travel back in time with historical facts.', image: '../../assets/images/quiz/quizimage3.png' },
    { id: 4, name: 'Movies & TV Shows', description: 'For film buffs and binge-watchers.', image: '../../assets/images/quiz/quizimage4.png' },
    { id: 5, name: 'Sports', description: 'From football to F1.', image: '../../assets/images/quiz/quizimage5.png' },
    { id: 6, name: 'Geography', description: 'Explore the world!', image: '../../assets/images/quiz/quizimage6.png' },
    { id: 7, name: 'Art & Literature', description: 'Questions on books, paintings, and famous authors.', image: '../../assets/images/quiz/quizimage7.png' },
    { id: 8, name: 'Technology', description: 'Computers, the internet, and inventions.', image: '../../assets/images/quiz/quizimage8.png' },
    { id: 9, name: 'Music', description: 'From classical to pop culture.', image: '../../assets/images/quiz/quizimage9.png' },
  ];

  const handleStartQuiz = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };
  
  const handleStartRandomQuiz = () => {
    const randomCategoryId = Math.floor(Math.random() * 9) + 1;
    navigate(`/quiz/${randomCategoryId}`);
  };

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to QuizQuest – Test Your Knowledge & Have Fun!</h1>
        <p className="welcome-subtext">Choose a category below and challenge yourself with exciting trivia questions from around the world.</p>
      </section>
      
      <section className="categories-section">
        <h2>Quiz Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button 
                className="play-button"
                onClick={() => handleStartQuiz(category.id)}
              >
                Play {category.name}
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="cta-section">
        <button className="cta-button" onClick={handleStartRandomQuiz}>
          Start Random Quiz Now!
        </button>
      </section>
      
      <section className="taglines-section">
        <div className="tagline-container">
          <div className="tagline">✨ New questions every time you play!</div>
          <div className="tagline">⏱️ Beat the clock and your own high score.</div>
          <div className="tagline">👥 Perfect for solo or group play!</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
