export default function Examples() {
  return (
    <section id="examples" className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Examples</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Prompt 1 (Without CoT)</h3>
          <div className="space-y-4">
            <p className="font-semibold">Prompt:</p>
            <p className="bg-white p-2 rounded">What is the capital of France?</p>
            <p className="font-semibold">Response:</p>
            <p className="bg-white p-2 rounded">The capital of France is Paris.</p>
            <p className="font-semibold">Effectiveness:</p>
            <p>Direct and concise, but lacks explanation or context.</p>
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Prompt 2 (With CoT)</h3>
          <div className="space-y-4">
            <p className="font-semibold">Prompt:</p>
            <p className="bg-white p-2 rounded">What is the capital of France? Explain your reasoning step by step.</p>
            <p className="font-semibold">Response:</p>
            <ol className="list-decimal list-inside bg-white p-2 rounded">
              <li>France is a country in Western Europe.</li>
              <li>Every country has a capital city, which is typically the seat of government.</li>
              <li>For France, the capital city is Paris.</li>
              <li>Paris has been the capital of France since the Middle Ages.</li>
              <li>
                It is the largest city in France and serves as the country's political, economic, and cultural center.
              </li>
            </ol>
            <p className="font-semibold">Teaching Effectiveness:</p>
            <p>Provides context, historical information, and reasoning, enhancing understanding and retention.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

