import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Icongrid from './Components/Icongrid'
import Showcase from './Components/Showcase'
import showcase1 from './assets/img/bg-showcase-1.jpg'
import showcase2 from './assets/img/bg-showcase-2.jpg'
import showcase3 from './assets/img/bg-showcase-3.jpg'
import Testimonial from './Components/Testimonial'
import testimonial1 from './assets/img/testimonials-1.jpg'
import testimonial2 from './assets/img/testimonials-2.jpg'
import testimonial3 from './assets/img/testimonials-3.jpg'
import Footer from './Components/Footer'

function App() {
    const data = [
        {
            title: "Fully Responsive",
            description: "This theme will look great on any device, no matter the size!"
        },
        {
            title: "Bootstrap 5 Ready",
            description: "Featuring the latest build of the new Bootstrap 5 framework!"

        },
        {
            title: "Easy to Use",
            description: "Ready to use with your own content, or customize the source files!"

        },
    ]

    const data2 = [{
        title: "Fully Responsive Design",
        description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        image: showcase1,
        isOrder1: true,
        isOrder2: true
    },
    {
        title: "Updated For Bootstrap 5",
        description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        image: showcase2,
        isOrder1: false,
        isOrder2: false
    },
    {
        title: "Easy to Use & Customize",
        description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
        image: showcase3,
        isOrder1: true,
        isOrder2: true
    },
    ]

    const data3=[
        {
            title: "Margaret E.",
            description: "This is fantastic! Thanks so much guys!",
            image:testimonial1 
        },
        {
            title: "Fred S.",
            description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
            image:testimonial2  
        },
        {
            title: "Sarah W.",
            description: "Thanks so much for making these free resources available to us!",
            image:testimonial3 
        },
    ]

    return <>
        <Navbar />
        <Header />
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">

                    {
                        data.map((e, i) => {
                            return <Icongrid data={e} key={i} />
                        })
                    }


                </div>
            </div>
        </section >
        <section className="showcase">
            <div className="container-fluid p-0">
                {
                    data2.map((e, i) => {
                        return <Showcase data2={e} key={i} />
                    })
                }
            </div>
        </section>
        <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    {
                       data3.map((e,i)=>{
                        return <Testimonial data3 ={e} key= {i}/>
                       })
                    }
                </div>
            </div>
        </section>
     <Footer/>
    </>

}

export default App
