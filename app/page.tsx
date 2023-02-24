function HomePage() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-5xl text-white font-semibold mx-auto mt-40 mb-20">
        FREEGROCERIES
      </h1>

      <form className="w-3/5">
        <div>
          <label>Username</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="password"
          />
        </div>

        <div class="flex items-center justify-between mt-10">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-800 hover:text-blue-500"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default HomePage
