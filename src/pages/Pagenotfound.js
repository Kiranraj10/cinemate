import { Link } from "react-router-dom"
export const Pagenotfound = () => {
  return (
    
    <main>
      <section className="flex flex-col  px-2">
        <div className="flex justify-center">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white items-center">404,oops</p>
        </div>
        <div className="flex justify-center">
        <Link to="/">
          <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 ">Back to Home</button>
        </Link>
        </div>
        
      </section>
    </main>
  )
}
