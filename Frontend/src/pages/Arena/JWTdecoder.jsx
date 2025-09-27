import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace } from "react-syntax-highlighter/dist/esm/styles/prism";

const decodeJWT = (token) => {
  try {
    const [header, payload] = token.split(".");
    if (!header || !payload) return null;

    const decodeBase64 = (str) =>
      JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/")));

    return {
      header: decodeBase64(header),
      payload: decodeBase64(payload),
    };
  } catch (e) {
    return null;
  }
};

const JWTdecoder = () => {
  const [jwt, setJwt] = useState("");
  const [decoded, setDecoded] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleDecode = () => {
    const result = decodeJWT(jwt);
    setDecoded(result);
    setCopied(false);
  };

  const copyDecoded = () => {
    if (!decoded) return;
    navigator.clipboard.writeText(JSON.stringify(decoded, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const clearAll = () => {
    setJwt("");
    setDecoded(null);
    setCopied(false);
  };

  return (
    <div className="justify-center mt-20 flex">
      <div className="bg-white/90 p-7 rounded-xl shadow-md w-[1000px] flex flex-col gap-4 justify-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-dark-lavender text-center">
          JWT Decoder
        </h2>

        {/* Input */}
        <textarea
          value={jwt}
          onChange={(e) => setJwt(e.target.value)}
          placeholder="Paste your JWT here..."
          className="w-full h-24 px-4 py-2 border border-gray-300 rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Output with Highlighting */}
        <div className="border border-dashed border-gray-300 rounded-md md:mt-5 bg-gray-50 text-gray-700 overflow-auto h-60">
          {decoded ? (
            <SyntaxHighlighter
              language="json"
              style={duotoneSpace}
              customStyle={{
                margin: 0,
                // padding: "1rem",
                // background: "transparent",
                fontSize: "0.9rem",
              }}
            >
              {JSON.stringify(decoded, null, 2)}
            </SyntaxHighlighter>
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              Decoded JWT will appear here
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-2 text-xs">
          <button
            onClick={handleDecode}
            disabled={!jwt}
            className="flex-1 py-2 rounded-md bg-dark-lavender text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            Decode
          </button>
          <button
            onClick={copyDecoded}
            disabled={!decoded}
            className="flex-1 py-2 rounded-md bg-accent text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {copied ? "Copied!" : "Copy"}
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

export default JWTdecoder;
