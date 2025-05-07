import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-content">
        <section className="about-section">
          <h3 className="section-title">🧠 Welcome to QuizQuest!</h3>
          <p>
            QuizQuest is a fun and interactive trivia quiz app where you can challenge 
            your knowledge across a variety of topics — from general knowledge and 
            science to movies and sports!
          </p>
        </section>
        
        <div className="section-divider"></div>
        
        <section className="about-section">
          <h3 className="section-title">💡 Our Mission</h3>
          <p>
            To make learning exciting and effortless through engaging quiz games. 
            We believe in the power of curiosity and gamification to help people 
            grow smarter, faster.
          </p>
        </section>
        
        <div className="section-divider"></div>
        
        <section className="about-section">
          <h3 className="section-title">🚀 What Makes Us Unique?</h3>
          <ul className="features-list">
            <li>Uses real-time trivia from top APIs like Open Trivia DB, JService, and The Trivia API</li>
            <li>Multiple categories and difficulty levels</li>
            <li>Instant scoring and result summary</li>
            <li>Timer-based challenges for excitement</li>
            <li>Mobile-friendly and fully responsive</li>
          </ul>
        </section>
        
        <div className="section-divider"></div>
        
        <section className="about-section">
          <h3 className="section-title">👥 Who Is It For?</h3>
          <p>
            Students, trivia lovers, competitive friends, and anyone looking to have 
            fun while learning!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
