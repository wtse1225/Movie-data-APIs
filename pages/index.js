/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Wai Hing William Tse   Student ID: 149 992 216     Date: 6/14/2023
*  Cyclic Link: https://blue-violet-stingray-wrap.cyclic.app
*
********************************************************************************/ 

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import MovieDetails from "@/components/MoviesDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {

  // useState for page and pageData
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // use SWR to fetch data from the API
  const { data, error } = useSWR(`https://blue-violet-stingray-wrap.cyclic.app/api/movies?page=${page}&perPage=10`);

  // useEffect hook to set the states
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function next() {
    setPage(page + 1);
  };
  
  // watch out for the map() about the arrow function, no {} needed
  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />

      <Accordion>        
        {pageData.map((m) =>           
          <Accordion.Item eventKey={m._id} key={m._id}>            
            <Accordion.Header>                         
              <strong>{m.title}</strong>&nbsp;({m.year}: {m.directors.join(', ')})   
            </Accordion.Header>
            
            <Accordion.Body>
              <MovieDetails movie={m}/>
            </Accordion.Body>          
        </Accordion.Item>
        )}        
      </Accordion>
      
      <Pagination>
      <Pagination.Prev onClick={previous}/>
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next}/>
      </Pagination>
    </>
  )
}
