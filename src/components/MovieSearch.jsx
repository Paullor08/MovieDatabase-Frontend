import { useState } from "react";
import axios from "axios";
import React from "react";

function MovieSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const res = await axios.get(`/api/movies/search?q=${query}`);
            setResults(res.data.results);
        } catch (err) {
            console.error("Error from Searching:", err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Searching ex. Spider-Man"
                    className="flex-1 px-4 py-2 border rounded"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>

            {results.length > 0 && (
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    {results.map((movie) => (
                        <li key={movie.id} className="bg-white rounded shadow p-4">
                            {movie.poster_path && (
                                <img
                                    src={movie.poster_path}
                                    alt={movie.title}
                                    className="w-full mb-2 rounded"
                                />
                            )}
                            <h3 className="text-lg font-bold">{movie.title}</h3>
                            <p className="text-sm text-gray-600">{movie.release_date}</p>
                            <p className="text-sm mt-2">{movie.overview.slice(0, 100)}...</p>
                            <p className="text-sm text-yellow-600 font-semibold mt-1">
                                ★ {movie.rating}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MovieSearch;
