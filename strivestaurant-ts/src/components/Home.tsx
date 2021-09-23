import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishess from '../data/menu.json'
import { useState,useEffect } from 'react'
import DishComments from './DishComments'
/* import upperName from '../helpers/lib' */

interface HomeProps{
  title:string
}
  interface Dishes{ 
     id:number,
    name:string,
    image:string,
    label:string,
    price:string,
    description:string,
    comments:[
      {
        id:number,
        rating:number,
        comment:string,
        date:string
      }
    ]
  } 

const Home = ({ title }:HomeProps) => {
  const [selected, setSelected] = useState<any>(null)
  const [dishes,setDishes]=useState<any>([])
/*   const [selected, setSelected] = useState<Dishes | null >(null)
  const [dishes,setDishes]=useState<Dishes[]>([]) */
useEffect(()=>{
  setDishes(dishess)
})
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {title}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes.map((dish:any, i:any) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish)
                }}
              >
                <img className="d-block w-100" src={dish.image} alt={'slide number ' + (i + 1)} />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
      </Row>
    </Container>
  )
}

export default Home
