import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-tag">★ 5-Star Luxury Experience</div>
        <h1 className="hero-title">
          Where Luxury<br /><em>Meets Serenity</em>
        </h1>
        <p className="hero-sub">AN UNPARALLELED STAY · TIMELESS ELEGANCE · WORLD-CLASS SERVICE</p>
        <div className="hero-ctas">
          <a href="#rooms" className="btn-primary">Explore Rooms</a>
          <a href="#about" className="btn-outline">Our Story</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
