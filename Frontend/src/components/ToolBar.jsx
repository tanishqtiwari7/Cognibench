import React from "react";
import {
  FaQrcode,
  FaKey,
  FaFingerprint,
  FaPalette,
  FaFileAlt,
  FaMarkdown,
  FaIdBadge,
  FaLock,
  FaImage,
  FaAlignLeft,
  FaBookOpen,
} from "react-icons/fa";

const tools = [
  { name: "QR Maker", icon: <FaQrcode /> },
  { name: "UUID Generator", icon: <FaIdBadge /> },
  { name: "JWT Decoder", icon: <FaLock /> },
  { name: "Lorem Ipsum", icon: <FaFileAlt /> },
  { name: "JSON Formatter", icon: <FaFingerprint /> },
  { name: "Hash Generator", icon: <FaKey /> },
  { name: "Color Converter", icon: <FaPalette /> },
  { name: "Markdown Previewer", icon: <FaMarkdown /> },
  { name: "Background Remover", icon: <FaImage /> },
  { name: "AI Summarizer", icon: <FaAlignLeft /> },
];

const ToolBar = ({ onSelectTool, activeTool }) => {
  return (
    <div className="sticky top-7 z-50 w-full mb-8">
      <div className="relative flex items-center justify-between w-full px-6 max-w-8xl mx-auto">
        {/* Left: Hamburger */}
        <div>
          <button className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
            ☰
          </button>
        </div>

        {/* Center: Tool capsule (absolute center of viewport) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
          {tools.map((tool, index) => {
            const isActive = activeTool === tool.name;
            return (
              <button
                key={index}
                onClick={() => onSelectTool(tool.name)}
                className={`group relative flex items-center justify-center w-8 h-8 rounded-lg transition
                     ${
                       isActive
                         ? "bg-dark-lavender text-white"
                         : "bg-gray-100 hover:bg-dark-lavender/20 hover:text-black"
                     }`}
              >
                <span className="text-lg">{tool.icon}</span>

                {/* Tooltip */}
                <span
                  className="absolute top-12 px-2 py-1 text-xs text-black bg-accent/90 rounded-md 
               opacity-0 group-hover:opacity-100 
               transition-opacity delay-700 whitespace-nowrap "
                >
                  {tool.name}
                </span>
              </button>
            );
          })}
        </div>
        {/* Right: Other buttons */}
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-md bg-accent hover:bg-accent/80 text-xs">
            GitHub
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-xs">
            Library
            <FaBookOpen className="text-md" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
