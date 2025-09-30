import React from "react";

export default function JokeCard({joke,onRemove, className}) {
  return (
    <div className={`bg-white border border-gray-200 shadow-md rounded-2xl p-6 transition hover:shadow-lg  flex flex-col ${className}`}>
      <h3 className="text-lg font-medium text-gray-800">{joke.setup}</h3>
      <p className="text-gray-600 mt-2">{joke.punchline}</p> 
      <div className="flex-grow"></div>
      {onRemove&&(
        <button className="mt-3 self-start bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md disabled:opacity-50" onClick={() => onRemove(joke.id)}>Remove</button>
      )}
    </div>
  );
}
