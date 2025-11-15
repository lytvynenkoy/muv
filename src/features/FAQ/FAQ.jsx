import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FaqItem from "./components/FaqItem";
import "./FAQ.css"

export default function FAQ() {
  const faqs = [
    {
      q: "Хто може брати участь у програмі МУВ?",
      a: "До участі запрошуються молоді люди віком від 14 до 21 року.",
    },
    {
      q: "Скільки триває програма?",
      a: "Програма триває 7 днів і включає навчання, обмін досвідом та подорожі Україною.",
    },
    {
      q: "Чи потрібно сплачувати за участь?",
      a: "Участь безкоштовна. Всі витрати покриваються організаторами.",
    },
  ];

  const clipRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [ready, setReady] = useState(false);


  useLayoutEffect(() => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.scrollHeight);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const ro = new ResizeObserver(() => {
      if (!contentRef.current) return;
      setHeight(contentRef.current.scrollHeight);
    });
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="faq">
      <div className="container-small">
        <h2 className="faq__title">FAQ</h2>
        <p className="faq__subtitle">Найчастіші запитання</p>

        <div className="faq__list-outer">
          <div
            ref={clipRef}
            className={`faq__list-clip ${ready ? "is-ready" : ""}`}
            style={{ height: ready ? `${height}px` : 0 }}
          >
            <div ref={contentRef} className="faq__list">
              {faqs.map((it, i) => (
                <FaqItem key={i} question={it.q} answer={it.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
