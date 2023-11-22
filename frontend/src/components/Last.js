import React from 'react';
import '../styles/Last.css';

function Last() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="team-members">
            <p>Team Members:</p>
            <ul>
              <li>Member 1</li>
              <li>Member 2</li>
              <li>Member 3</li>
              {/* Add more team members as needed */}
            </ul>
          </div>
          <div className="copyright">
            <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Last;
