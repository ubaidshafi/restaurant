

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviews}) {
  return (
    <div><Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header> <b className='text-warning ps-5 '> View Reviews</b> </Accordion.Header>
      <Accordion.Body>
                   {
                    reviews?reviews.map(i=>(
                        <div>
                            <p><b className='text-warning'>Name </b>{i.name}</p>
                            <p><b className='text-warning'>Date </b>{i.date}</p>
                            <p><b className='text-warning'>Rating <i class="fa-regular fa-star"></i> </b>{i.rating}</p>
                            <p><b className='text-warning'>Comments <i class="fa-regular fa-comment-dots"></i> </b>{i.comments}</p>
<hr />

                        </div>
                    )
                    ): <h1>No Reviews</h1>
                   }
      </Accordion.Body>
    </Accordion.Item>
  
  </Accordion>
  </div>
  )
}

export default Reviews