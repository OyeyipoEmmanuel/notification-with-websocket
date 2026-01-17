import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Tweets from "./pages/Home/Tweets"

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <section className="w-full md:max-w-3xl mx-auto md:border-x-2 pt-16 md:pt-20 border-borderColor min-h-screen">
        <Home />
        <Tweets/>
      </section>
    </main>
  )
}

export default App
