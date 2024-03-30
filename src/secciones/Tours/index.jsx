import CardTours from '../../componentes/CardTours'
import './index.css'
import ToursData from '../../data/tours.json'

function Tours() {
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Destinos</span>
                            <h2 className="mb-4">Nuestros Tours</h2>
                        </div>
                    </div>
                    <div className="row">
                        <CardTours tours={ToursData.Search} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tours
