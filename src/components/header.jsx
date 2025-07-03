function Header({ streak, attempts }) {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://i.pinimg.com/474x/2d/cc/36/2dcc363a73f27511e51969ac8cc15b92.jpg"
          alt="League of Legends classic"
          className="lol"
        />
        <h1 className="title">Memory Game</h1>
      </div>
      <div className="stats">
        <p>Current Streak: {streak}</p>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
}

export default Header;
