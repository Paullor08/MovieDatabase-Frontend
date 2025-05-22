import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl text-center font-bold text-blue-700 py-8">
        Search Movie from TMDB🎬
      </h1>
      <MovieSearch />
    </div>
  );
}

export default App;
