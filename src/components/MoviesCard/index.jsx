import React from "react";
import Card from "react-bootstrap/Card";

function MoviesCard({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        position: "absolute",
        top: "140px",
        justifyContent: "center",
      }}
    >
      {movies.map((movieDesc) => (
        <Card style={{ width: "14rem" }} key={movieDesc.imdbID}>
          <Card.Img variant="top" src={movieDesc.Poster} />
          <Card.Body>
            <Card.Title>{movieDesc.Title}</Card.Title>
            <Card.Text>{movieDesc.Type}</Card.Text>
            <Card.Text>{movieDesc.Year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MoviesCard;
