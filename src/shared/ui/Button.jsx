import "./Button.css";

/**
 * Універсальна кнопка / посилання
 *
 * @param {string} text
 * @param {string} href — посилання (опціонально)
 * @param {function} onClick — функція кліку (опціонально)
 * @param {string} variant — стиль ("primary" | "secondary" | "outline")
 * @param {string} className — додаткові класи
 */
export default function Button({
  text = "Стати учасником програми МУВ",
  href = "{offer-link}",
  onClick,
  variant = "primary",
  className = "",
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {text}
    </button>
  );
}
