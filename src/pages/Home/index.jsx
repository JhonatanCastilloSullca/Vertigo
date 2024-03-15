import { Link } from "react-router-dom"
import './index.css'

function Home() {
    const tours = [
        'tour-1',
        'tour-2',
        'tour-3',
        'tour-4',
    ]

    return (
        <>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('../../../src/assets/images/bg_5.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center">
                        <div className="col-md-7 ftco-animate">
                            <span className="subheading">Welcome to Pacific</span>
                            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                            <p className="caps">Travel to the any corner of the world, without going around in circles</p>
                        </div>
                        <a href="https://vimeo.com/45830194"
                            className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                            <span className="fa fa-play"></span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home