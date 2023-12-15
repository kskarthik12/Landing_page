import React from 'react'

function Showcase({data2}) {
    return <>
        {/* <!-- Image Showcases--> */}

        <div className="row g-0">
           <div className={data2.isOrder1 ?"col-lg-6 order-lg-2 text-white showcase-img":"col-lg-6 text-white showcase-img"} style={{ backgroundImage: `url(${data2.image})` }}></div>

            <div className={data2.isOrder2 ?"col-lg-6 order-lg-1 my-auto showcase-text":"col-lg-6 my-auto showcase-text"}>
                <h2>{data2.title}</h2>
                <p className="lead mb-0">{data2.description}</p>
            </div>
        </div>
        

    </>
}

export default Showcase