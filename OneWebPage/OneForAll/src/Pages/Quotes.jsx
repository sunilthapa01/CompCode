import React, { useEffect, useState } from "react";
import { getGuote } from "../Services/GetQuote";
const Quotes = () => {
  const [random, setrandom] = useState([]);
  const [query, setquery] = useState('');

  useEffect(() => {
    const response = async () => {
      const details = await getGuote(query);
      setrandom(details.data.data.data);
    };
    response();
  }, [query]);
  // console.log(random);
  console.log(query)
  return (
    <div className="w-full h-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Quote Collection</h1>
          <div className="relative max-w-lg mx-auto">
            <input
              className="w-full h-14 pl-6 pr-6 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-full shadow-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-lg text-gray-700 dark:text-gray-200"
              type="text"
              value={query}
              onChange={(e) => setquery(e.target.value)}
              placeholder="How many quotes do you want?"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {random.map((data) => {
            return (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group h-full">

                <div className="mb-6">
                  <div className="text-indigo-500 opacity-20 text-6xl font-serif leading-none -mb-8">"</div>
                  <h1 className="text-gray-800 dark:text-gray-100 text-lg font-medium leading-relaxed relative z-10 pt-4">
                    {data.content}
                  </h1>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <h1 className="text-gray-900 dark:text-white font-bold text-sm bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                      {data.author}
                    </h1>
                    <h2 className="text-xs text-gray-400 font-medium lowercase tracking-wide">
                      @{data.authorSlug}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((e) => (
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md">
                        #{e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
