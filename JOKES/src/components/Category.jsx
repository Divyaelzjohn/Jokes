export default function Category({getJoke}) {
  return (
    <div className="flex gap-3 mb-6">
      <button
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md disabled:opacity-50"
        onClick={() => getJoke("programming")}
      >
        Programming Joke
      </button>
      <button
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md disabled:opacity-50"
        onClick={() => getJoke("general")}
      >
        General Joke
      </button>
      <button
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md disabled:opacity-50"
        onClick={() => getJoke("knock-knock")}
      >
        Knock Knock
      </button>
    </div>
  );
}
