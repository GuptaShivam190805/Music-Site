"use client";

import React, { useRef, useEffect, useState, JSX } from "react";
import { motion } from "framer-motion"; // ✅ Correct import

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  textSize?: string;
};

export const TextHoverEffect: React.FC<TextHoverEffectProps> = ({
  text,
  level = 1,
  textSize = "text-[32px] sm:text-[60px] md:text-[80px]",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={`flex items-center justify-center w-full h-full text-center gap-2 ${textSize}`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 300 100"
        className="w-[220px] h-[60px] sm:w-[400px] sm:h-[100px] md:w-[600px] md:h-[150px] select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="25%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </>
            )}
          </linearGradient>

          <radialGradient id="revealMask" {...maskPosition} r="20%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>

        {/* Shadow Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className={`fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800 ${textSize}`}
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>

        {/* Stroke Reveal Animation */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className={`fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800 ${textSize}`}
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          {text}
        </motion.text>

        {/* Gradient Mask Reveal Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className={`fill-transparent font-[helvetica] font-bold ${textSize}`}
        >
          {text}
        </text>
      </svg>
    </HeadingTag>
  );
};
