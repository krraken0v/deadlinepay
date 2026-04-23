import Header from "./components/Header/header";
export default function Home() {
  return (
    <>
      <div className="bg-bg-main w-screen h-screen">
        <Header></Header>
        <div>
          <h1 className="text-text-primary text-9x1 text-center pt-5">
            PAY TRACK
          </h1>
          <h2 className="text-text-secondary text-center mt-2 text-lg">
            Take control of your business payments and deadlines Stop losing
            money due to missed invoices and forgotten due dates. Track
            everything in one place.
          </h2>
          <p className="text-text-secondary text-center text-lg">
            Built for freelancers, startups, and small businesses who want full
            visibility over their finances without complex accounting tools.
          </p>
          <div className="mt-4">
            <p className="text-text-secondary text-center">Our Features</p>
            <ul className="grid grid-cols-3 grid-rows-2 gap-7 p-7">
              <li className="text-text-secondary text-center  bg-bg-card h-50 p-4 rounded hover:scale-105 duration-200 transition-all  cursor-pointer">
                <p className="text-center text-text-secondary text-md">
                  💸 Track all your invoices
                </p>
                <p>
                  Keep all your invoices organized in one place and always know
                  who owes you money.
                </p>
              </li>
              <li className="text-text-secondary text-md text-center bg-bg-card p-4 rounded hover:scale-105 duration-200 transition-all cursor-pointer">
                <p className="text-center text-text-secondary text-md">
                  ⏰ Never miss a deadline
                </p>
                <p>
                  Get clear visibility on upcoming and overdue payments so
                  nothing slips through the cracks.
                </p>
              </li>
              <li className="text-text-secondary text-md text-center bg-bg-card p-4 rounded hover:scale-105 duration-200 transition-all cursor-pointer ">
                <p className="text-center text-text-secondary text-md">
                  📊 Real-time financial overview
                </p>
                <p>
                  See how much you expect to receive, what’s overdue, and what
                  needs attention right now.
                </p>
              </li>
              <li className="text-text-secondary text-md text-center bg-bg-card p-4 rounded hover:scale-105 duration-200 transition-all cursor-pointer ">
                <p className="text-center text-text-secondary text-md">
                  🔄 Partial payments support
                </p>
                <p>
                  Track payments over time and always know the remaining
                  balance.
                </p>
              </li>
              <li className="text-text-secondary text-md text-center bg-bg-card p-4 rounded hover:scale-105 duration-200 transition-all cursor-pointer ">
                <p className="text-center text-text-secondary text-md">
                  🤖 AI-powered insights
                </p>
                <p>
                  Ask questions like: “Which invoices are overdue?” “Who owes me
                  the most?” “What needs attention this week?”
                </p>
              </li>
              <li className="text-text-secondary text-md text-center bg-bg-card p-4 rounded hover:scale-105 duration-200 transition-all cursor-pointer ">
                <p className="text-center text-text-secondary text-md">
                  ⚡ Simple and fast
                </p>
                <p>No complex accounting knowledge needed. Start in minutes.</p>
              </li>
            </ul>
          </div>
          <button className="text-text-secondary bg-bg-card px-32 py-3 cursor-pointer rounded block text-center mx-auto transition-all duration-200 hover:scale-105">
            Try it now
          </button>
        </div>
      </div>
    </>
  );
}
