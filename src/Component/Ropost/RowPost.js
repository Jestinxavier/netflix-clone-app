import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../const/const";
import YouTube from "react-youtube";

function RowPost(props) {
  const [urlid, seturlid] = useState("");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        console.log("ss", res.data);
        setMovie(res.data.results);
      })
      .catch((err) => {
        // alert("netork erre");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    seturlid(false)
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("urlrel:", response.data);
        if (response.data.results.length !== 0) {
          seturlid(response.data.results[0]);
        }
      })
      .catch((err) => {
        // alert("netork erre");
        //  https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="postars">
        {movie.map((x, y) => (
          x.backdrop_path?<div className="hover-state">
            <img
              onClick={() => handleMovie(x.id)}
              key={y}
              className={props.isSmall ? "smallPoster" : "postar"}
              src={`${imageUrl + x.backdrop_path}`}
              alt="poster"
            />
            {props.orginal?<div className="title-hover">{x.original_name}</div>:<div className="title-hover">{x.title}</div>   }
          </div>:""
        ))}
      </div>
      {urlid && (
        <div>
          <div>
            <div className="align-closing-tag">
              <p className="closing-tag" onClick={()=>seturlid(false)} >x</p>
            </div>
          </div>
          <YouTube  opts={opts} videoId={urlid.key} />
        </div>
      )}
    </div>
  );
}

export default RowPost;
