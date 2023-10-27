import airbnbLogo from "/assets/airbnb-logo.png";

export default function MainContent() {
  return (
    <nav>
      <div className="logo-container">
        <img src={airbnbLogo} className="logo" alt="AirBnb logo" />
      </div>
    </nav>
  );
}
