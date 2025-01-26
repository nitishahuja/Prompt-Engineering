import Image from "next/image";

export default function Exploration() {
  return (
    <section
      id="exploration"
      className="space-y-12 bg-gray-50 py-16 px-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Exploration
      </h2>

      {/* Definition Section */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Definition
        </h3>
        <p className="text-lg text-gray-600">
          Chain of Thought (CoT) is a prompt engineering technique that
          encourages AI models to break down complex problems into step-by-step
          solutions, improving reasoning and interpretability.
        </p>
      </div>

      {/* Core Concepts Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-gray-700">
          Core Concepts
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-3 text-gray-700">
              Stepwise Reasoning
            </h4>
            <p className="text-gray-600">
              Breaking down complex problems into smaller, manageable steps for
              clearer problem-solving.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-3 text-gray-700">
              Error Localization
            </h4>
            <p className="text-gray-600">
              Identifying and correcting mistakes in the reasoning process by
              examining each step.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Purpose
        </h3>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Purpose List */}
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
            <li>
              <span className="font-medium text-gray-700">Transparency:</span>{" "}
              Ensures clear and interpretable reasoning.
            </li>
            <li>
              <span className="font-medium text-gray-700">Accuracy:</span>{" "}
              Improves correctness by breaking tasks into logical steps.
            </li>
            <li>
              <span className="font-medium text-gray-700">Trust:</span> Builds
              confidence in AI outputs by explaining reasoning.
            </li>
          </ul>
          {/* Purpose Icon */}
          <div className="mt-8 md:mt-0 md:ml-12 flex justify-center">
            <div className="bg-blue-500 p-6 rounded-full shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Applications Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-gray-700">
          Real-World Applications
        </h3>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold mb-4 text-gray-700">
            Telecom Chatbot Troubleshooting Wi-Fi Issues
          </h4>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Identify the problem: Slow or no internet connection</li>
            <li>
              Check physical connections: Ensure all cables are properly
              connected
            </li>
            <li>Verify router status: Check if all lights are on and stable</li>
            <li>
              Test connection speed: Run a speed test to quantify the issue
            </li>
            <li>
              Troubleshoot based on results: Suggest solutions like resetting
              the router or contacting ISP
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
