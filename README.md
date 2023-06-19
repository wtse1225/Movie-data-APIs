This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Technologies Used**: React, NextJS, SWR, Bootstrap, MongoDB, JavaScript

**Usage:**
The project aims to create a rich user interface for accessing movie data. By utilizing React and Next.js, it provides a responsive and visually appealing UI. Users can navigate through different pages of movie data, view detailed information about specific movies, and learn more about the developer. The project integrates with the "Movies API" from Assignment 1 to fetch and display movie data.


**Features:**\
Movie Component: The "Movie" component (pages/movies/[title].js) displays the title of a movie.

About Component: The "About" component (pages/about.js) provides information about the developer and a specific movie retrieved from the "Movies API" from Assignment 1. It uses the "getStaticProps" function to fetch data from the API and renders it.

Home Component: The "Home" component (pages/index.js) displays a paginated list of movies fetched from the "Movies API." It uses the SWR library for data fetching and rendering. The component includes pagination functionality, allowing users to navigate through different pages of movie data.

MainNav Component: The "MainNav" component (components/MainNav.js) represents the navigation bar in the application. It uses React-Bootstrap components to create a responsive navbar with links to the Movies and About pages.

Layout Component: The "Layout" component (components/Layout.js) provides a common layout structure for the application. It includes the "MainNav" component and wraps the main content with React-Bootstrap's "Container" component.

MovieDetails Component: The "MovieDetails" component (components/MovieDetails.js) displays detailed information about a movie. It receives a movie object as a prop and renders its data, including director, cast, awards, IMDB rating, and votes.

PageHeader Component: The "PageHeader" component (components/PageHeader.js) renders a page header with customizable text. It accepts the "text" prop and displays it within a Bootstrap "Card" component.
