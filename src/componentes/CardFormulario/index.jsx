import { Card, Form } from "react-bootstrap";

function CardFormulario() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h3 className="box-title">Reserva con nosotros</h3>
                    <div className="div-formulario ">
                        <span>Fecha:</span>
                        <Form.Control type="date" placeholder="" className="input-formulario fs-12" />
                    </div>
                    <div className="div-formulario ">
                        <span>Celular:</span>
                        <Form.Control type="text" placeholder="+51 999 999 999" className="input-formulario fs-12" />
                    </div>
                    <div className="div-formulario ">
                        <span>E-mail:</span>
                        <Form.Control type="email" placeholder="info@vertigotravelperu.com" className="input-formulario fs-12" />
                    </div>
                    <div className="submit_group">
                        <button className="booking_form_submit"> Reservar Ahora</button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}


export default CardFormulario;
