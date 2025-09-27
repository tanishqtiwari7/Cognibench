import React from "react";
import { useState } from "react";
import ToolBar from "../../components/ToolBar";
import QR from "./QR";
import Initial from "../../components/Initial";
import UUIDgenerator from "./UUIDgenerator";
import JWTdecoder from "./JWTdecoder";
import LoremIpsum from "./LoremIpsum";
import JSONformator from "./JSONformator";

const tools = {
  "QR Maker": <QR />,
  "UUID Generator": <UUIDgenerator />,
  "JWT Decoder": <JWTdecoder />,
  "Lorem Ipsum": <LoremIpsum />,
  "JSON Formatter": <JSONformator />,
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
