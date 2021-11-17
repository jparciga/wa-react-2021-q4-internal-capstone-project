export default function HeroContent({
  title,
  subtitle,
  text,
  buttonText = "Go",
}) {
  return (
    <div className="hero_content">
      <h2 className="hero_subtitle">{subtitle}</h2>
      <h1 className="hero_title">{title}</h1>
      <p className="hero_text">{text}</p>
      <button className="hero_button">
        {buttonText} <img src="images/arrow.svg" alt="Arrow Button" />
      </button>
    </div>
  );
}
