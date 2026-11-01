import Link from "next/link";
import { profileQuestions } from "@/lib/site";

export default function ProfileAnswers({
  questions = profileQuestions,
  showBiographyLink = true,
}: {
  questions?: ReadonlyArray<{ question: string; answer: string }>;
  showBiographyLink?: boolean;
}) {
  return (
    <section
      id="questions"
      className="section profile-answers"
      aria-labelledby="profile-answers-heading"
    >
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">THE SHORT ANSWERS</span>
          <span className="section-aside">PEOPLE, PRODUCTS & PURPOSE</span>
        </div>
        <div className="section-header">
          <h2 id="profile-answers-heading">
            A little more
            <br />
            context<span className="blue">.</span>
          </h2>
          <p>
            A few useful details about my work, the products I build, and the
            companies I’m part of.
          </p>
        </div>
        <div className="profile-answer-grid">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="profile-answer-links">
          {showBiographyLink && (
            <Link href="/about" className="text-link">
              Read my full biography ↗
            </Link>
          )}
          <Link href="/projects/fixyt" className="text-link">
            The story behind Fixyt ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
