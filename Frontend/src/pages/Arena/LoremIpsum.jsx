import React, { useState, useRef, useEffect } from "react";

const defaultWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
  "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
  "incididunt", "ut", "labore", "et", "dolore", "magna",
  "aliqua", "ut", "enim", "ad", "minim", "veniam"
];

// Helper function to generate Lorem Ipsum
const generateLorem = ({ type, numParagraphs, wordsPerParagraph, count }) => {
  if (type === "words") {
    let text = "";
    while (text.length < count) {
      const word = defaultWords[Math.floor(Math.random() * defaultWords.length)];
      text += word + " ";
    }
    return text.slice(0, count);
  }

  if (type === "paragraphs") {
    let paragraphs = [];
    for (let i = 0; i < numParagraphs; i++) {
      let paragraph = [];
      for (let j = 0; j < wordsPerParagraph; j++) {
        paragraph.push(defaultWords[Math.floor(Math.random() * defaultWords.length)]);
      }
      let finalParagraph = paragraph.join(" ");
      finalParagraph = finalParagraph.charAt(0).toUpperCase() + finalParagraph.slice(1) + ".";
      if (i === 0) finalParagraph = "Lorem ipsum dolor sit amet, " + finalParagraph;
      paragraphs.push(finalParagraph);
    }
    return paragraphs.join("\n\n");
  }

  return "";
};

const LoremIpsum = () => {
  const [type, setType] = useState("paragraphs");
  const [open, setOpen] = useState(false);
  const [numParagraphs, setNumParagraphs] = useState(2);
  const [wordsPerParagraph, setWordsPerParagraph] = useState(40);
  const [count, setCount] = useState(100); // number of characters for "Words" type
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGenerate = () => {
    const text = generateLorem({ type, numParagraphs, wordsPerParagraph, count });
    setOutput(text);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setOutput("");
    setCopied(false);
  };

  return (
    <div className="justify-center mt-20 flex">
      <div className="bg-white/90 p-7 rounded-xl shadow-md w-[700px] flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-dark-lavender text-center">
          Lorem Ipsum Generator
        </h2>

        {/* Custom Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center hover:border-dark-lavender focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {type === "paragraphs" ? "Paragraphs" : "Words"} <span className="ml-2">▾</span>
          </button>
          {open && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden z-10">
              {["paragraphs", "words"].map((opt) => (
                <div
                  key={opt}
                  onClick={() => { setType(opt); setOpen(false); }}
                  className="px-4 py-2 cursor-pointer hover:bg-dark-lavender hover:text-white capitalize"
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Inputs */}
        {type === "paragraphs" ? (
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1"
                max="50"
                value={numParagraphs}
                onChange={(e) => setNumParagraphs(Number(e.target.value))}
                className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <span className="text-sm text-gray-600">Number of paragraphs</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1"
                max="200"
                value={wordsPerParagraph}
                onChange={(e) => setWordsPerParagraph(Number(e.target.value))}
                className="w-32 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <span className="text-sm text-gray-600">Words per paragraph</span>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <input
              type="number"
              min="1"
              max="500"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-40 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <span className="text-sm text-gray-600">Number of characters</span>
          </div>
        )}

        {/* Output */}
        <div className="border border-dashed border-gray-300 rounded-md bg-gray-50 text-gray-700 px-4 py-3 font-mono h-48 overflow-auto whitespace-pre-wrap text-sm">
          {output || <div className="text-gray-500">Generated Lorem Ipsum will appear here</div>}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 text-xs">
          <button onClick={handleGenerate} className="flex-1 py-2 rounded-md bg-dark-lavender text-white font-semibold hover:opacity-90 transition">
            Generate
          </button>
          <button onClick={handleCopy} disabled={!output} className="flex-1 py-2 rounded-md bg-accent text-white font-semibold hover:opacity-90 transition disabled:opacity-50">
            {copied ? "Copied!" : "Copy"}
          </button>
          <button onClick={handleClear} className="flex-1 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsum;
