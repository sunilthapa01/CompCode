import React, { useEffect, useState } from "react";
import { getJokes } from "../Services/JokesService";
import { getRandomEmoji } from "../Services/JokesService";

const Joke = () => {
  // console.log(getJokes)
  const [jokes, setJokes] = useState([]);
  const [emoji, setemoji] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const res = await getJokes();
      const emoj = await getRandomEmoji();

      setJokes(res.data.data);
      setemoji(emoj.data.htmlCode[0])
    };
    fetchJokes();
  }, []);

  console.log(jokes);

  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group text-center"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-400 to-orange-500"></div>

        <span
          className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          style={{ visibility: jokes?.categories?.length === 0 ? 'hidden' : 'visible' }}
        >
          {jokes.categories}
        </span>

        <div
          className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm"
          dangerouslySetInnerHTML={{ __html: emoji }}
        ></div>

        <div className="w-full relative z-10">
          <p className="text-gray-800 dark:text-gray-100 text-3xl font-medium leading-relaxed italic">
            "{jokes.content}"
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-400 font-medium">
          Click the card for a new joke
        </div>
      </div>
    </div>
  );
};

export default Joke;
