"use client";

import { useState } from "react";

const ColorPaletteGenerator = () => {
  const [color, setColor] = useState("#ffffff");
  const [palette, setPalette] = useState<string[]>([]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const generatePalette = () => {
    const shades = Array.from({ length: 5 }, (_, i) => {
      const shade = Math.floor(parseInt(color.slice(1), 16) * ((5 - i) / 5));
      return `#${shade.toString(16).padStart(6, "0")}`;
    });
    setPalette(shades);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generator</h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-full h-12 cursor-pointer mb-4"
      />
      <button
        onClick={generatePalette}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate
      </button>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {palette.map((shade, index) => (
          <div
            key={index}
            className="w-full h-16"
            style={{ backgroundColor: shade }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteGenerator;
