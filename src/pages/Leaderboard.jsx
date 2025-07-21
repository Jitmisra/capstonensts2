import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase/config';
import '../styles/Leaderboard.css';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('global');
  const { currentUser, getUserData } = useAuth();

  useEffect(() => {
    fetchLeaderboardData();
    if (currentUser) {
      fetchUserStats();
    }
  }, [currentUser]);

  const fetchLeaderboardData = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, orderBy('totalScore', 'desc'), limit(50));
      const querySnapshot = await getDocs(q);
      
      const leaderboard = [];
      querySnapshot.forEach((doc) => {
        leaderboard.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setLeaderboardData(leaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserStats = async () => {
    try {
      const userData = await getUserData(currentUser.uid);
      setUserStats(userData);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  const getUserRank = () => {
    if (!currentUser || !userStats) return null;
    const userIndex = leaderboardData.findIndex(user => user.uid === currentUser.uid);
    return userIndex !== -1 ? userIndex + 1 : null;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRecentScores = () => {
    if (!userStats || !userStats.scores) return [];
    return userStats.scores
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);
  };

  if (loading) {
    return (
      <div className="leaderboard-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>🏆 Leaderboard</h1>
        <p>See how you rank among quiz masters!</p>
      </div>

      {currentUser && userStats && (
        <div className="user-stats-card">
          <div className="user-info">
            <h3>Your Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">{userStats.totalScore || 0}</span>
                <span className="stat-label">Total Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{userStats.quizzesCompleted || 0}</span>
                <span className="stat-label">Quizzes Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">#{getUserRank() || 'N/A'}</span>
                <span className="stat-label">Global Rank</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {userStats.quizzesCompleted > 0 
                    ? Math.round(userStats.totalScore / userStats.quizzesCompleted) 
                    : 0}
                </span>
                <span className="stat-label">Avg Score</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="leaderboard-tabs">
        <button 
          className={`tab ${activeTab === 'global' ? 'active' : ''}`}
          onClick={() => setActiveTab('global')}
        >
          Global Leaderboard
        </button>
        {currentUser && (
          <button 
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Your Recent Scores
          </button>
        )}
      </div>

      <div className="leaderboard-content">
        {activeTab === 'global' && (
          <div className="global-leaderboard">
            {leaderboardData.length === 0 ? (
              <div className="empty-state">
                <p>No players yet. Be the first to complete a quiz!</p>
              </div>
            ) : (
              <div className="leaderboard-list">
                {leaderboardData.map((user, index) => (
                  <div 
                    key={user.id} 
                    className={`leaderboard-item ${
                      currentUser && user.uid === currentUser.uid ? 'current-user' : ''
                    }`}
                  >
                    <div className="rank">
                      <span className={`rank-number ${index < 3 ? `rank-${index + 1}` : ''}`}>
                        {index < 3 ? ['🥇', '🥈', '🥉'][index] : `#${index + 1}`}
                      </span>
                    </div>
                    
                    <div className="user-details">
                      <h4>{user.displayName || 'Anonymous'}</h4>
                      <p>{user.quizzesCompleted || 0} quizzes completed</p>
                    </div>
                    
                    <div className="user-score">
                      <span className="score">{user.totalScore || 0}</span>
                      <span className="score-label">points</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'personal' && currentUser && (
          <div className="personal-scores">
            {getRecentScores().length === 0 ? (
              <div className="empty-state">
                <p>No quiz history yet. Start taking quizzes to see your scores here!</p>
              </div>
            ) : (
              <div className="scores-list">
                {getRecentScores().map((score, index) => (
                  <div key={index} className="score-item">
                    <div className="score-info">
                      <h4>Quiz #{userStats.scores.length - index}</h4>
                      <p className="score-date">{formatDate(score.date)}</p>
                      <p className="score-details">
                        {score.correctAnswers || 0}/{score.totalQuestions || 0} correct
                      </p>
                    </div>
                    
                    <div className="score-value">
                      <span className="points">{score.score || 0}</span>
                      <span className="points-label">pts</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {!currentUser && (
        <div className="auth-prompt">
          <p>Sign in to track your scores and appear on the leaderboard!</p>
          <a href="/auth" className="auth-link">Sign In / Sign Up</a>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;