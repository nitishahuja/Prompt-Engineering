export default function PresentationFormats() {
  return (
    <section id="presentation-formats" className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Presentation Formats
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Video Presentation</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/Ncr0pGPJ_N4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4">
            This video provides an in-depth explanation of the Chain of Thought
            prompt pattern and its applications in AI.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Medium Article</h3>
          <a
            href="https://medium.com/@nitishahuja971/unlocking-the-power-of-the-chain-of-thought-cot-prompt-pattern-in-ai-b25df0bfb04c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Unlocking the Power of the Chain of Thought (CoT) Prompt Pattern in
            AI
          </a>
          <p className="mt-2">
            This comprehensive article explores the Chain of Thought prompt
            pattern, providing practical examples, step-by-step breakdowns, and
            real-world use cases to help you understand and implement CoT in
            your AI applications.
          </p>
        </div>
      </div>
    </section>
  );
}
