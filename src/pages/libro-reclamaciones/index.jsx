import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { Button, Col, Container, Form, FormCheck, FormGroup, Row } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


function ContactPage() {
    const { t } = useTranslation();
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados;
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formData = {
                nombre: form.formNombre.value,
                documento: form.formDocumento.value,
                numdocumento: form.formNumDocumento.value,
                email: form.formEmail.value,
                celular: form.formCelular.value,
                asunto: form.formAsunto.value,
                mensaje: form.formMensaje.value
            };

            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi';

            try {
                const response = await fetch('https://api.vertigotravelperu.com/api/libro-reclamaciones', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Correo enviado correctamente:', result.message);
                    alert('Correo enviado correctamente');
                    window.location.href = window.location.origin;
                } else {
                    console.error('Error al enviar el correo');
                    alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
            }
        }

        setValidated(true);
    };

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>{t("contacto.libro")}</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container>
                    <Row>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId="formNombre">
                                        <Form.Label>{t("formulario.nombre")}</Form.Label>
                                        <Form.Control type="text" name="nombre" placeholder="Nombre" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu nombre.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formDocumento">
                                        <Form.Label>{t("formulario.documento")}</Form.Label>
                                        <Form.Control type="documento" name="documento" placeholder="documento" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu documento.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formNumDocumento">
                                        <Form.Label>{t("formulario.num-documento")}</Form.Label>
                                        <Form.Control type="num-documento" name="num-documento" placeholder="Nº Documento" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu número de documento.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>{t("formulario.email")}</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formCelular">
                                        <Form.Label>{t("formulario.celular")}</Form.Label>
                                        <Form.Control type="tel" name="celular" placeholder="Celular" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu número de celular.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group controlId="formAsunto">
                                        <Form.Label>{t("formulario.asunto")}</Form.Label>
                                        <Form.Control type="text" name="asunto" placeholder="Asunto" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa el asunto.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formMensaje">
                                        <Form.Label>{t("formulario.mensaje")}</Form.Label>
                                        <Form.Control as="textarea" name="mensaje" rows={3} placeholder="Mensaje" />
                                    </Form.Group>
                                    <FormGroup controlId="formCheckbox">
                                        <FormCheck required label="Acepto los términos y condiciones" />
                                    </FormGroup>
                                    <Button variant="primary" type="submit" className='mt-4'>
                                        {t("formulario.enviar")}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Container>
            </div>
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <Row className="mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="section-description w-100 p-3">
                                {t("testimonios.mensaje-testimonio")}
                            </p>
                        </div>
                    </Row>
                    {/* Asegúrate de pasar `cabeceraTipo` a `CertificadoCarousel` */}
                    <Row>
                        <CertificadoCarousel general={cabeceraTipo} />
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ContactPage;