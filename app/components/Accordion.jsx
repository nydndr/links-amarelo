"use client";

import { useState } from "react";

export default function Accordion({
  numero,
  nome,
  explainer,
  children,
  emptyMessage = "conteúdo a caminho",
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasContent = Boolean(children);

  return (
    <div className="">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative w-full bg-sun-light flex items-start gap-4 px-6 pt-5 cursor-pointer text-left overflow-hidden transition-[max-height] duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${open ? "max-h-56 pb-6" : "max-h-[3.75rem]"}`}
        aria-expanded={open}
      >
        <div
          className={`absolute inset-0 bg-[url('/bg-texture-cutting-pad.svg')] bg-cover pointer-events-none transition-opacity duration-300 pointer-coarse:hidden ${hovered && !open ? "opacity-100" : "opacity-0"}`}
        />
        <span
          className={`relative font-space-mono text-xs shrink-0 w-6 mt-1 text-sun-dark transition-colors duration-300 ${hovered && !open ? "pointer-fine:text-white" : ""}`}
        >
          {numero}
        </span>

        <div className="relative flex-1 min-w-0 flex flex-col overflow-hidden">
          <h2 className="font-unbounded text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight leading-none text-brand-dark whitespace-nowrap [mask-image:linear-gradient(to_right,black_75%,transparent_100%)] md:[mask-image:none]">
            {nome}
          </h2>
          <p className="font-manrope mt-2 leading-snug hidden md:block">{explainer}</p>
        </div>

        <span
          className={`relative text-sun-dark font-space-mono text-xl shrink-0 transition-[transform,color] duration-300 mt-0.5 ${open ? "rotate-45" : ""} ${hovered && !open ? "pointer-fine:text-white" : ""}`}
        >
          +
        </span>
      </button>

      <div
        className={`border-t border-sun grid transition-[grid-template-rows,opacity] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${open ? "grid-rows-[1fr] opacity-100 duration-300" : "grid-rows-[0fr] opacity-0 duration-200"}`}
      >
        <div className="overflow-hidden ">
          <div className="">
            {hasContent ? (
              children
            ) : (
              <p className="font-space-mono text-sm lowercase py-4 px-6">
                {emptyMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
