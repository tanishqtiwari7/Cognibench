import React from "react";
import { useState } from "react";
import ToolBar from "../../components/ToolBar";
import QR from "./QR";
import Initial from "../../components/Initial";

const tools = {
  "QR Maker": <QR />,
  "UUID Generator": <div>UUID Generator Component</div>,
  "JWT Decoder": <div>JWT Decoder Component</div>,
  "Lorem Ipsum": <div>Lorem Ipsum Component</div>,
  "JSON Formatter": <div>JSON Formatter Component</div>,
  "Hash Generator": <div>Hash Generator Component</div>,
  "Color Converter": <div>Color Converter Component</div>,
  "Markdown Previewer": <div>Markdown Previewer Component</div>,
  "Background Remover": <div>Background Remover Component</div>,
  "AI Summarizer": <div>AI Summarizer Component</div>,
};

const Bench = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  return (

    <div className={`min-h-screen bg-light-lavender ${
    selectedTool ? "bg-dot-grid" : ""
  }`}>
    <ToolBar onSelectTool={setSelectedTool} activeTool={selectedTool} />
    <div>
    {selectedTool ? (
      tools[selectedTool]
    ) : (
      <Initial />
    )}
    </div>
    </div>
  
  );
};

export default Bench;
