
import React from "react";
import './App.css'
import Banner from "./Component/Banner/Banner";
import NavBar from "./Component/NavBar/NavBar";
import RowPost from "./Component/Ropost/RowPost";
import{action,orginal,ComedyMovies,HorrorMovies,ActionMovies,Documentaries,RomanceMovies} from "./const/urls"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost  url={orginal} title ='Netflix orginals' orginal/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' />
      <RowPost url={ActionMovies} title='ActionMovies' />
      <RowPost url={RomanceMovies} title='RomanceMovies' />
    </div>
  );
}

export default App;
