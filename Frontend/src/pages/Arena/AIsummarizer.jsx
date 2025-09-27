import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const AIsummarizer = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // 🔹 You will integrate AI summarizer here
    // Example:
    // const result = await callYourAI(input);
    // setSummary(result);
    setSummary("AI summary will appear here..."); 
  };

  const copySummary = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary);
  };

  const clearAll = () => {
    setInput("");
    setSummary("");
  };

  return (
    <div className="justify-center mt-20 flex">
      <div className="bg-white/90 p-7 rounded-xl shadow-md w-[1000px] flex flex-col gap-4 justify-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-dark-lavender text-center">
          AI Summarizer
        </h2>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text you want to summarize..."
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Output (Markdown) */}
        <div className="border border-dashed border-gray-300 rounded-md md:mt-5 bg-white text-gray-700 overflow-auto h-60 p-4 text-sm">
          {summary ? (
            <ReactMarkdown>{summary}</ReactMarkdown>
          ) : (
            <span className="text-gray-500">Summary will appear here</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-2 text-xs">
          <button
            onClick={handleSummarize}
            disabled={!input}
            className="flex-1 py-2 rounded-md bg-dark-lavender text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            Summarize
          </button>
          <button
            onClick={copySummary}
            disabled={!summary}
            className="flex-1 py-2 rounded-md bg-accent text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            Copy
          </button>
          <button
            onClick={clearAll}
            className="flex-1 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIsummarizer;
