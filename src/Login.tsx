import "./App.css";
import Navbar from "./Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-14 mb-48 bg-white shadow-2xl rounded-3xl ">
          <header className="mb-10">
            <h1 className="text-6xl font-header font-bold">
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
    </div>
  );
}

export default Login;
