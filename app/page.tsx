import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-green-900 justify-center items-center">
      {/* <div className="bg-green-700"></div> */}
      <Navbar />
      <div className="flex w-screen h-screen justify-center items-center">
        {/* <Register /> */}
        <Login />
      </div>
    </div>
  );
}
