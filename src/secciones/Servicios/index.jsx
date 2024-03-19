import CardActividades from '../../componentes/CardActividades'
import './index.css'

function Servicios() {
    return (
        <>
            <div className="ftco-section services-section">
                <div className="container p-3">
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <div className="row">
                                <CardActividades />
                            </div>
                        </div>
                        <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
                            <div className="w-100">
                                <span className="subheading">Bienvenido a Vertigo Travel</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis corrupti temporibus sequi impedit a est quos eius molestiae minima. Deserunt perspiciatis reprehenderit ipsam ea eos. Quis similique mollitia soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deserunt assumenda pariatur laborum quod. Soluta facilis ipsum recusandae dolorum, illum labore officia deleniti tempora quam ab amet laborum dicta? Enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus labore laudantium inventore facilis animi aliquam sed repudiandae necessitatibus impedit culpa suscipit tempore iusto, quasi totam placeat quaerat reprehenderit velit sunt.</p>
                                <p><a href="#" className="btn btn-primary py-3 px-4">Revisa nuestros tours</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Servicios
