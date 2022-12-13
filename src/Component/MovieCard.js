import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from 'react-stars'
const MovieCard = ({movie}) => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        
        <ReactStars
  count={5}
  value={movie.rate}
  size={24}
  color2={'#ffd700'} />,
        <div>
          <button variant="dark"><a href={movie.trailer} target={"blank"}>watech trailer</a></button>
          <button variant="dark"><a href={movie.description}>description</a></button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard