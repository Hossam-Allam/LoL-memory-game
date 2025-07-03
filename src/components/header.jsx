function Header({ streak, attempts }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <p>Current Streak: {streak}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default Header;
