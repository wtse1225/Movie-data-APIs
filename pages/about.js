import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MoviesDetails";
import PageHeader from "@/components/PageHeader";

// Fetch static item for re-rendering
export async function getStaticProps() {
  const res = await fetch(`https://blue-violet-stingray-wrap.cyclic.app/api/movies/573a139af29313caabcf0859`);//${id.params.id}`);
  const data = await res.json();
  
  return { props: { movie: data } };
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer: Wai Hing William Tse" />
      
      <Card>
        <Card.Body>
          <p>
            William, a Hong Kong working professional, has embarked on a new chapter in his life as a student at &nbsp;
            <em><a href="https://www.senecacollege.ca/home.html">Seneca College</a></em>. He is currently enrolled
            in a three-year diploma program specializing in Computer Programming & Analysis.
          </p>          

          <div>
            <p>
              For your convenience: &nbsp;
              <Link href="/movies/The Avengers">The Avengers</Link>, &nbsp;  
              <Link href="/movies/The Big Parade">The Big Parade</Link>, &nbsp; 
              <Link href="/movies/From Hand to Mouth">From Hand to Mouth</Link>
            </p>
          </div>
        </Card.Body>
        <MovieDetails movie={props.movie}/>
      </Card>

    </>
  )
}