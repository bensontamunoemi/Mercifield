"use client";
import { useEffect, useState } from "react";

export function ChristmasTheme() {
  const [showTheme, setShowTheme] = useState(true);

  return (
    <>
      {showTheme && (
        <>
          <div className="snow" />
          <div className="fixed top-16 right-4 z-50 ">
            <button
              onClick={() => setShowTheme(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg "
            >
              Hide Christmas Theme
            </button>
          </div>
        </>
      )}
    </>
  );
}
