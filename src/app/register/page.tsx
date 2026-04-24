"use client";
export default function Register() {
  return (
    <>
      <div className="bg-bg-main min-h-screen flex items-center justify-center">
        <div className=" bg-bg-card grid grid-cols-1 grid-rows-1 gap-5 mx-auto p-20 rounded">
          <h1 className="text-text-primary text-center text-xl mb-7">
            Register
          </h1>
          <input
            type="email"
            className="text-text-secondary px-6 py-3 bg-bg-main text-md w-md rounded "
            placeholder="Enter your Email"
          />
          <input
            className="text-text-secondary px-6 py-3 bg-bg-main text-md w-md rounded "
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-text-secondary bg-bg-main px-32 py-3 cursor-pointer rounded block text-center mx-auto transition-all duration-200 hover:scale-105">
            Register
          </button>
        </div>
      </div>
    </>
  );
}
