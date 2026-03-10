"use client";

import { motion } from "framer-motion";
import { HistoryItem } from "@/types";

interface Props {
  history: HistoryItem[];
}

export default function HistorySection({ history }: Props) {
  const sorted = [...history].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">History</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">연혁</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
          <div className="space-y-10">
            {sorted.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative flex items-start gap-6 sm:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="sm:w-1/2 sm:pr-12 sm:text-right hidden sm:block">
                  {index % 2 === 0 && (
                    <div className="pt-1">
                      <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                      <ul className="mt-2 space-y-1">
                        {item.events.map((event, i) => (
                          <li key={i} className="text-sm text-gray-500">{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm mt-1" />
                <div className="sm:w-1/2 sm:pl-12 hidden sm:block">
                  {index % 2 !== 0 && (
                    <div className="pt-1">
                      <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                      <ul className="mt-2 space-y-1">
                        {item.events.map((event, i) => (
                          <li key={i} className="text-sm text-gray-500">{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="sm:hidden pl-14">
                  <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                  <ul className="mt-2 space-y-1">
                    {item.events.map((event, i) => (
                      <li key={i} className="text-sm text-gray-500">{event}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
