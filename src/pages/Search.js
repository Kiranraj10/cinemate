import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryterm=searchParams.get("q");
  const{data:movies}=useFetch(apiPath,queryterm);
  
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0?`no result found for '${queryterm}'`:`Result for '${queryterm}'`}</p>
      </section>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            {
              movies.map((movie)=>(
                <Card key={movie.id} movie={movie}/>
              ))
             }
            
          </div>
        </section>
    </main>
  )
}
