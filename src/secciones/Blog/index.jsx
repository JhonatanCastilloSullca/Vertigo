import { Button, NavLink } from 'react-bootstrap'
import CardBlogs from '../../componentes/CardBlogs'
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
                    <div className="row d-flex justify-items-center">
                        <CardBlogs />
                    </div>
                    <div className='mx-auto w-100 text-center'>
                        <a href="/blogs" type="submit" className=' bg-primary text-white rounded mt-4 px-4 py-1 w-64 mx-auto'>
                            Ver Mas

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
