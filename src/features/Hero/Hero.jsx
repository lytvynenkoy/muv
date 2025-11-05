import "./Hero.css";
import Button from "@shared/ui/Button";

export default function Hero() {
  const src = `${import.meta.env.BASE_URL}images/muv-hero.png`;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-left">
            <div className="subtitle">
              Національна програма мобільності молоді
            </div>
            <h1 className="title">Мандруй! Уявляй! Відкривай!</h1>
            <p className="description">
              Найбільша в Центральній та Східній Європі 7-денна програма
              внутрішніх обмінів для молоді віком від 14 до 21 року. Її
              ініціатором є Міністерство культури, молоді та спорту України, в
              основу діяльності якого покладені демократичні цінності та
              принципи всебічного розвитку особистості.
            </p>

            <Button />
          </div>

          <div className="hero-right">
            <picture>
              <img src={src} alt="Hero" className="hero__image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
