import { Card, Form } from "react-bootstrap";
import { useCart } from "../../Hook/useCart";

function CardFormulario({ tour }) {

    const { addToCart, removeFromeCart, cart } = useCart()
    const checkTourInCart = tour => {
        return cart.some(item => item.id === tour.id)
    }
    const isToursInCart = checkTourInCart(tour)

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
                        <button onClick={() => { isToursInCart ? removeFromeCart(tour) : addToCart(tour) }} className="booking_form_submit">
                            {
                                isToursInCart
                                    ? "Quitar de la reserva"
                                    : "Reservar Ahora"
                            }
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardFormulario;