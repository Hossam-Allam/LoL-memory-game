function Header({ streak, attempts }) {
  return (
    <div className="header">
      <h1 className="title">LoL Memory Game</h1>
      <div className="stats">
        <p>Current Streak: {streak}</p>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
}

export default Header;
