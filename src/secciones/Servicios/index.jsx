import { useContext } from 'react';
import './index.css'
import { GeneralContext } from '../../context/general';
import { useTranslation } from 'react-i18next';


function Servicios() {
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const { t } = useTranslation("translation");
    return (
        <>
            <div className="ftco-section services-sections">
                <div className="container p-3">
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="img d-flex w-100 align-items-center justify-content-center imgservicios" style={{ backgroundImage: "url('../../../assets/images/Vertigo-nosotros.webp')" }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
                            <div className="w-100">
                                <span className="subheading">{GeneralData.titulo}</span>
                                <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: GeneralData.subtitulo }}></div>
                                <a href="/tours" className=" btn btn-primary py-3 px-4 mt-4 d-none"> {t("buttons.revisa-nuestros-tours")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicios
