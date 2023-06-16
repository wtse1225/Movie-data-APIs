import { useRouter } from "next/router";
import useSWR from 'swr';
import MovieDetails from "@/components/MoviesDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Movies() {
    // Read the title para using router hook
    const router = useRouter();
    const { title } = router.query;

    // Use the title obtained from above to fetch the movie
    const { data, error } = useSWR(`https://blue-violet-stingray-wrap.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);
   
    return (
      <>
        { data ? // check null
          data.length == 0 ? <Error statusCode={404}/> : // check empty array
          
          // if not empty, loop every items in the array
          <>          
          { data.map((m) => 
            <div key={m._id}>
              {console.log(m.title)}
              <PageHeader text={m.title}/>
              <MovieDetails movie={m}/>
            </div>
          )}
          </>
          
        : null }
      </>
    )
}