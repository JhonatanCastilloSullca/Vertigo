import './index.css'

function Blog() {
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Nuestro Blog</span>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry justify-content-end">
                                <a href="blog-single.html" className="block-20"
                                    style={{ backgroundImage: "url('../../../src/assets/images/image_1.jpg')" }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry justify-content-end">
                                <a href="blog-single.html" className="block-20"
                                    style={{ backgroundImage: "url('../../../src/assets/images/image_2.jpg')" }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry">
                                <a href="blog-single.html" className="block-20"
                                    style={{ backgroundImage: "url('../../../src/assets/images/image_3.jpg')" }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
