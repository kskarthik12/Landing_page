import React from 'react'

function Testimonial({data3}) {
    return <>
        {/* <!-- Testimonials--> */}

        <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img class="img-fluid rounded-circle mb-3" src={data3.image} alt="..." />
                <h5>{data3.title}</h5>
                <p class="font-weight-light mb-0">{data3.description}</p>
            </div>
        </div>

   </>
}

export default Testimonial