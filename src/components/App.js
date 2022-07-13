import React from "react";
import SocialMedia from "./SocialMedia";
import MovieCard from "./MovieCard";

// parent component
function App(){
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div>
      <MovieCard title={title} genresArr={genresArr}/>
      <SocialMedia socialLinks={socialLinks} />
    </div>
  )

}



export default App;
