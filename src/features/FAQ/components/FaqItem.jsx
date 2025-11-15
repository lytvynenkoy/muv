import { useId, useState } from "react";

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <div
        className="faq-item__toggle"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && setOpen((v) => !v)
        }
      >
        <div className="faq-item__question">{question}</div>

        <div className="faq-item__icon" aria-hidden="true">
          <div className="faq-item__icon-line faq-item__icon-line--vert"></div>
          <div className="faq-item__icon-line faq-item__icon-line--horiz"></div>
        </div>
      </div>

      <div
        id={contentId}
        className="faq-item__panel"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="faq-item__panel-inner">{answer}</div>
      </div>
    </div>
  );
}
