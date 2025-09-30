export default function Joke({ getJoke, saveJoke, currentJoke, loading, isSaved }) {
  return (
    <div className="flex gap-3 mb-6">
        <button
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md disabled:opacity-50"
          onClick={getJoke}
          disabled={loading}
        >
          Get a Joke
        </button>
        <button
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md disabled:opacity-50"
          onClick={saveJoke}
          disabled={loading || !currentJoke ||isSaved}
        >
          {isSaved?"Already Saved":"Save joke"}
        </button>
      </div>
  );
}
