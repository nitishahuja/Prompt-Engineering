"use client"

import { useState } from "react"

export default function QuizzesAndExercises() {
  const [q1Answer, setQ1Answer] = useState<string | null>(null)
  const [q2Answer, setQ2Answer] = useState<string | null>(null)

  const handleQ1Answer = (answer: string) => {
    setQ1Answer(answer)
  }

  const handleQ2Answer = (answer: string) => {
    setQ2Answer(answer)
  }

  return (
    <section id="quizzes-and-exercises" className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Quizzes and Exercises</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quiz</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold mb-2">Question 1: What is the primary purpose of CoT?</p>
              <div className="space-y-2">
                <button
                  onClick={() => handleQ1Answer("a")}
                  className={`w-full text-left p-2 rounded ${q1Answer === "a" ? "bg-red-100" : "bg-gray-100"}`}
                >
                  a) Generate creative stories
                </button>
                <button
                  onClick={() => handleQ1Answer("b")}
                  className={`w-full text-left p-2 rounded ${q1Answer === "b" ? "bg-green-100" : "bg-gray-100"}`}
                >
                  b) Improve reasoning and interpretability
                </button>
                <button
                  onClick={() => handleQ1Answer("c")}
                  className={`w-full text-left p-2 rounded ${q1Answer === "c" ? "bg-red-100" : "bg-gray-100"}`}
                >
                  c) Shorten response time
                </button>
              </div>
              {q1Answer && (
                <p className={`mt-2 ${q1Answer === "b" ? "text-green-600" : "text-red-600"}`}>
                  {q1Answer === "b"
                    ? "Correct! CoT improves reasoning and interpretability."
                    : "Incorrect. The correct answer is b) Improve reasoning and interpretability."}
                </p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="font-semibold mb-2">Question 2: CoT is most effective for:</p>
              <div className="space-y-2">
                <button
                  onClick={() => handleQ2Answer("a")}
                  className={`w-full text-left p-2 rounded ${q2Answer === "a" ? "bg-red-100" : "bg-gray-100"}`}
                >
                  a) Writing poetry
                </button>
                <button
                  onClick={() => handleQ2Answer("b")}
                  className={`w-full text-left p-2 rounded ${q2Answer === "b" ? "bg-green-100" : "bg-gray-100"}`}
                >
                  b) Solving math problems step by step
                </button>
                <button
                  onClick={() => handleQ2Answer("c")}
                  className={`w-full text-left p-2 rounded ${q2Answer === "c" ? "bg-red-100" : "bg-gray-100"}`}
                >
                  c) Answering trivia
                </button>
              </div>
              {q2Answer && (
                <p className={`mt-2 ${q2Answer === "b" ? "text-green-600" : "text-red-600"}`}>
                  {q2Answer === "b"
                    ? "Correct! CoT is most effective for solving math problems step by step."
                    : "Incorrect. The correct answer is b) Solving math problems step by step."}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Exercise</h3>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Scenario: A fitness app AI explains how to do a push-up</h4>
            <p className="mb-4">
              Task: Write a CoT prompt to break down the steps and compare the responses with and without CoT.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-semibold">Example Prompt:</p>
              <p className="italic">
                "Explain how to do a push-up step by step, including common mistakes and how to correct them."
              </p>
              <p className="font-semibold mt-4">Expected Output:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Step 1: Start in a plank position with your hands shoulder-width apart.</li>
                <li>Step 2: Lower your body until your elbows are at a 90-degree angle.</li>
                <li>Step 3: Push back up while keeping your core tight and avoiding sagging hips.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

