import photos from "/assets/photo-grid.png";

export default function MainContent() {
  return (
    <section className="hero-container">
      <img src={photos} className="hero-photos" alt="Photos" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
