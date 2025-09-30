import { useEffect, useState } from "react";
import axios from "axios";
import JokeCard from "./components/JokeCard.jsx";
import Joke from "./components/Joke.jsx";
import Category from "./components/Category.jsx";

function App() {
  const [currentJoke, setcurrentJoke] = useState("");
  const [savedJoke, setsavedJoke] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
        // "https://official-joke-api.appspot.com/random_ten"
        // `https://official-joke-api.appspot.com/jokes/${category}/random`
      );
      setcurrentJoke(response.data);
      // setcurrentJoke(response.data[0]);
    } catch (err) {
      console.log("Error fetching joke:", err);
      setError("Failed to fetch joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const saveJoke = () => {
    if (currentJoke && !savedJoke.find((j) => j.id === currentJoke.id)) {
      setsavedJoke([...savedJoke, currentJoke]);
    }
  };

  const removeJoke = (id) => {
    if (window.confirm("Are you sure you want to delete this joke?")) {
      setsavedJoke(savedJoke.filter((j) => j.id !== id));
    }
  };
  useEffect(() => {
    getJoke();
  }, []);

  const isSaved=savedJoke.some((j)=>j.id===currentJoke?.id)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        RANDOM JOKES
      </h1>

      <Joke getJoke={getJoke} saveJoke={saveJoke} currentJoke={currentJoke}loading={loading} isSaved={isSaved}/>

      {/* Multiple Jokes */}
      {/* {currentJoke.map(joke => (
        <JokeCard key={joke.id} joke={joke} />
      ))} */}

      {/* Category */}
      {/* <Category getJoke={getJoke} /> */}

      {loading && <p className="text-gray-600 mb-4">Loading joke...</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {!loading && !error && currentJoke && (
        <JokeCard className="mb-6 w-full max-w-lg" joke={currentJoke} />
      )}

      <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-4">
        Saved Jokes
      </h2>
      {savedJoke.length === 0 && (
        <p className="text-gray-500 mb-4">No saved jokes yet.</p>
      )}
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJoke.map((joke) => (
          <JokeCard key={joke.id} joke={joke} onRemove={removeJoke} />
        ))}
      </div>
    </div>
  );
}
export default App;
