import React, { useState } from "react";

export default function WorkplaceCultureQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showNameInput, setShowNameInput] = useState(false);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const questions = [
    {
      question: "How would you describe your workplace culture?",
      options: [
        "Supportive and engaging",
        "Functional, but could be better",
        "Disconnected and low engagement",
        "Toxic or high turnover",
      ],
    },
    {
      question: "What’s the biggest leadership challenge you face?",
      options: [
        "Improving team communication",
        "Addressing conflicts effectively",
        "Keeping employees engaged and motivated",
        "Retaining top talent",
      ],
    },
    {
      question: "Are employees comfortable giving honest feedback?",
      options: [
        "Yes, we have an open culture",
        "Sometimes, but not always",
        "Not really, feedback is limited",
        "No, employees avoid speaking up",
      ],
    },
    {
      question: "What would most improve your workplace environment?",
      options: [
        "More collaboration and teamwork",
        "Better leadership training",
        "Stronger employee engagement",
        "A more structured approach to workplace culture",
      ],
    },
    {
      question: "Are you ready to take action to improve workplace culture?",
      options: [
        "Yes, let’s get started!",
        "I’m interested but need more details",
        "Not right now, but I’d like to stay in touch",
      ],
    },
  ];

  // Handles answer selection and moves to the next question
  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [`question_${step + 1}`]: answer }));

    if (step < questions.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setShowNameInput(true);
    }
  };

  // Handles final form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name before submitting.");
      return;
    }

    setSubmitting(true);

    const finalAnswers = { ...answers, name };

    // Fire Google Tag Manager Event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "quiz_completion",
        quizName: "Workplace Culture Quiz",
      });
    }

    // Fire LinkedIn Tracking
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    }

    // Send data to Formspree
    const response = await fetch("https://formspree.io/f/xgvoppyj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalAnswers),
    });

    if (!response.ok) {
      console.error("Error submitting form to Formspree");
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    // ✅ Redirect to Calendly after successful submission
    window.location.href = "https://calendly.com/360-clarity/linkedin-intro";
  };

  const progressPercentage = ((step / questions.length) * 100).toFixed(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {!showNameInput ? (
          <div>
            {/* Question Section */}
            <h2 className="text-xl font-semibold text-gray-800">
              {questions[step].question}
            </h2>
            <div className="mt-4 space-y-2">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full py-3 px-4 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="relative w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-right mt-1">
                {progressPercentage}% completed
              </p>
            </div>
          </div>
        ) : (
          // Final Step: Ask for Name Before Submitting
          <form onSubmit={handleSubmit} className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Thanks for completing the quiz!
            </h1>
            <p className="mt-3 text-gray-600">
              Based on your responses, we believe Sam can help improve your
              workplace culture.
            </p>

            {/* Name Input */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-4 border rounded-lg px-4 py-2 w-full"
            />

            {/* Netlify Spam Protection (Optional) */}
            <div className="mt-4" data-netlify-recaptcha="true"></div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-auto bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit & Book Audit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
