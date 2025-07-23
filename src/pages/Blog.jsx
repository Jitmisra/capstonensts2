import '../styles/Blog.css';
 function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Playing Trivia Games Makes You Smarter",
      date: "June 6, 2025",
      author: "Agnik Misra",
      content: "Trivia quizzes are more than just fun – they challenge your memory and boost brain power. Regularly playing trivia helps improve cognitive function, memory retention, and even decision-making skills. Whether it's sports, science, or history, testing your knowledge keeps your mind active!",
      image: "../../assets/images/blog/blogimage1.jpeg"
    },
    {
      id: 2,
      title: "Top 5 Trivia Categories You Should Try Today",
      date: "June 6, 2025",
      author: "Agnik Misra",
      content: "Bored of the same old questions? Try these popular categories:\n1. General Knowledge – A bit of everything!\n2. Science & Nature – Test your inner nerd.\n3. Movies & TV Shows – Perfect for binge-watchers.\n4. Sports – For the true fans.\n5. History – Learn while you play.\n\nTrivia lets you explore topics you love while learning something new every day!",
      image: "../../assets/images/blog/blogimage2.jpeg"
    },
    {
      id: 3,
      title: "How Our Quiz Timer Makes the Game More Exciting",
      date: "June 6, 2025",
      author: "Agnik Misra",
      content: "Our built-in timer gives you 30 seconds to answer each question — just enough to think, but not enough to Google! It adds pressure, improves quick thinking, and makes the game feel like a real challenge.",
      image: "../../assets/images/blog/blogimage3.jpegajjaja"
    },
    {
      id: 4,
      title: "Trivia Around the World: Fun Facts You Didn't Know",
      date: "June 6, 2025",
      author: "Agnik Misra",
      content: "Did you know?\n• The longest trivia game lasted over 30 hours!\n• In Japan, trivia shows are part of national culture.\n• In the US, bar trivia nights are a weekly tradition.\n\nPlay globally, learn globally!",
      image: "../../assets/images/blog/blogimage4.jpeg"
    }
  ];

  return (
    <div className="blog-container">
      <h2>Trivia Blog</h2>
      
      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="blog-post-content">
              <h3>{post.title}</h3>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-author">by {post.author}</span>
              </div>
              <div className="post-content">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
