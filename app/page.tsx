import Exploration from "./components/Exploration";
import Examples from "./components/Examples";
import PresentationFormats from "./components/PresentationFormats";
import QuizzesAndExercises from "./components/QuizzesAndExercises";

export default function Home() {
  return (
    <div className="space-y-16">
      <section id="exploration">
        <Exploration />
      </section>
      <section id="examples">
        <Examples />
      </section>
      <section id="presentation-formats">
        <PresentationFormats />
      </section>
      <section id="quizzes-and-exercises">
        <QuizzesAndExercises />
      </section>
    </div>
  );
}
