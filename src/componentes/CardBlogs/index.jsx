import './index.css'
import blogData from '../../data/blog.json'

function CardBlogs() {
    const blogs = blogData.Search
    const hasBlogs = blogs?.length > 0


    return (
        <>
            {hasBlogs ? (
                blogs.map(blog => (
                    <div key={blog.Id} className="col-md-4 d-flex ">
                        <div className="blog-entry justify-content-end">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('../../../src/assets/images/image_1.jpg')" }}>
                            </a>
                            <div className="text">
                                <div className="d-flex align-items-center mb-4 topp">
                                    <div className="">
                                        <span className="mos">{blog.fecha}</span>
                                    </div>
                                </div>
                                <h3 className="heading"><a href="#">{blog.Titulo}</a></h3>
                                <div className="descripcion-corta-container"> {/* Contenedor con ancho fijo */}
                                    <p>{blog.descripcionCorta}</p>
                                </div>
                                <p><a href="#" className="btn btn-primary">Read more</a></p>
                            </div>
                        </div>
                    </div>

                ))
            ) : (
                <p>*No se encontraron resultados</p>
            )}
        </>
    )
}
export default CardBlogs
