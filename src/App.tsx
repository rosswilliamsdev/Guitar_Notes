import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-14 m-10 bg-white shadow-2xl rounded-3xl ">
        <header className="mb-10">
          <h1 className="text-7xl font-header font-bold drop-shadow-2xl">
            Guitar Strategies
          </h1>
        </header>
        <section id="login" className="bg-white p-6 rounded shadow-md w-80">
          <form className="flex flex-col space-y-4 rounded">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded"
            />
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
