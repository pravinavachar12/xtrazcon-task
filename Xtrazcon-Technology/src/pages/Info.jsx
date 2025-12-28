import profilePic from "../assets/profile.jpeg";

function Info() {
  return (
    <div className="page info-page">
      <h1 className="center-text">Info</h1>

      <div className="info-container">
        <div className="profile-pic">
          <img src={profilePic} alt="Pravin Avachar" />
        </div>

        <div className="profile-details">
          <h2>Pravin Avachar</h2>
          <p><strong>College:</strong> Mauli College of Engineering & Technology, Shegaon</p>
          <p><strong>Branch:</strong> Computer Science & Engineering</p>
          <p><strong>Domain:</strong> Software Developer</p>
          
          <div className="social-links">
            <a
              href="https://github.com/pravinavachar12"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pravin-avachar-aab999320/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
