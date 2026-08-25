"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-16 bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="card-dark overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-5 text-left focus:outline-none"
              >
                <span className="text-xs sm:text-base font-semibold text-white">{item.question}</span>
                <span className="text-emerald-500 text-base sm:text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-3 sm:px-5 pb-3 sm:pb-5">
                  <p className="text-[10px] sm:text-sm text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}