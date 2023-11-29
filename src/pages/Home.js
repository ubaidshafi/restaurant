
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Home() {

    const [restaurants, setRestaurants] = useState({})

    //  function  api call
    const getAllRestaurant = async () => {
        const result = await axios.get('/restaurants.json')
        setRestaurants(result.data.restaurants);
    }
    useEffect(() => {
        getAllRestaurant()
    }, [])

    console.log(restaurants);

    return (

        <div>


            <Row>
                <Col xs={12} sm={6} className=' ms-5 mt-4'>
                    <h1 className='m-3'>
                        <span className='text-warning'>S</span>pend <span className='text-success'>Y</span>our <span className='text-danger'>Q</span>uality <span className='text-dark'>T</span>ime </h1>

                    <p className='ms-3 mt-3 test-start w-75'><b>Food contains essential nutrients such as carbohydrates, proteins, fats, fibers, vitamins and minerals. They can be eaten raw, cooked or processed. Humans and other living organisms eat food to provide energy to their body in order to perform specific functions. This will enable them to survive and stay healthy.</b> </p>
                </Col>
                <Col className='mt-4 text-center'>
                    <img className='w-70' style={{ height: '300px' }} src="https://img.freepik.com/free-photo/delicious-food-black-board_144627-34730.jpg?size=626&ext=jpg&uid=R128403269&ga=GA1.1.1364853773.1679984353&semt=ais" alt="no image" />
                </Col>
                <h1 className='text-center text-dark w-100'> EXPLORE</h1>
                <hr />
            </Row>
            <Container>
                <Row>

                    {
                        restaurants.length > 0 ? restaurants.map(i =>

                            <Col xs={12} sm={6} lg={4} md={6} >
                                <Link to={`/view/${i.id}`} style={{ textDecoration: 'none' }}>
                                    <Card style={{ width: '18 rem', height: '550px' }} className='m-4'>
                                        <Card.Img
                                            style={{ height: '400px' }}
                                            variant="top" src={i.photograph} />
                                        <Card.Body>
                                            <Card.Title className='text-center text-warning'>{i.name}</Card.Title>
                                            <Card.Text>
                                                <b>Address:</b> {i.address}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        ) : <h1>No Data Present</h1>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home