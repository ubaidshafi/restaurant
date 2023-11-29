import { logDOM } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from '../components/Operating'
import Reviews from '../components/Reviews'





function SingleView() {





    const [allrestaurants, setRestaurants] = useState([])


    const param = useParams()
    // var id=param.id
    var { id } = param    //destructuring


    //  function  api call
    const getAllRest = async () => {
        const result = await axios.get('/restaurants.json')
        setRestaurants(result.data.restaurants);
    }

    useEffect(() => {
        getAllRest()
    }, [])

    // console.log(id);
    // console.log(allrestaurants);

    //  find  single rest
    const singleRest = allrestaurants.find(i => i.id == id)
    console.log(singleRest);


    return (
        <div>
            {
                singleRest ?
                    <Row>

                        <Col lg={6} sm={12} xs={12} md={6} className='p-5 ms-5 mt-5 mb-5' >
                            <img style={{ height: '550px', width: '60%' }}
                                src={singleRest.photograph} alt="" />
                        </Col>
                        <Col className='text-start '>
                            <h1 className='text-center mt-3 text-warning'>{singleRest.name}</h1>
                            <ListGroup className='me-5 pe-1 fs-4 w-60'>
                                <ListGroup.Item className='mt-4'>
                                   <b> <span className='text-warning me-5'> Address</span> {singleRest.address}</b></ListGroup.Item>
                                <ListGroup.Item  className='mt-4'>
                                    <b> <span className='text-warning me-5'> Cuisine Type </span> {singleRest.cuisine_type} </b> </ListGroup.Item>
                                <ListGroup.Item className='mt-4'>
                                   <b>  <span className='text-warning me-5'> Neighbourhood </span>  {singleRest.neighborhood} </b></ListGroup.Item>


                                   <ListGroup.Item className='mt-4'>
                                     <Operating operatingData={singleRest.operating_hours}></Operating>
                                   </ListGroup.Item>

                                   <ListGroup.Item className='mt-4'>
                                     <Reviews reviews={singleRest.reviews}></Reviews>
                                   </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <h1>no data</h1>
                    </Row>
            }
        </div>
    )
}

export default SingleView