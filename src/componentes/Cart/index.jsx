import { useId } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { MdDelete } from "react-icons/md"
import './index.css'
import { FaCartShopping } from "react-icons/fa6"
import { useCart } from "../../Hook/useCart"

function CartItem({ ImagenPrincipal, Precio, Titulo, removeFromeCart }) {
    return (
        <ListGroup.Item>
            <div className="card-information-tour related-tour gap-2 bg-white p-2 rounded">
                <img src={ImagenPrincipal} className='img-icono-tour-info-related' alt="" />
                <div className="items-information d-grid">
                    <h5 className="item-description-information m-0 fs-18">{Titulo}</h5>
                    <h5 className="item-tittle-information">From <span className="prices-item-information"> {Precio} </span></h5>
                </div>
                <Button variant="" className="button-cart text-white" onClick={removeFromeCart}>
                    <MdDelete />
                </Button>
            </div>
        </ListGroup.Item>
    )
}

function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, removeFromeCart } = useCart()


    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} ><FaCartShopping className=" text-light" />
                {cart.length > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '12px',
                    }}>
                        {cart.length}
                    </span>
                )}
            </label>
            <input type="checkbox" hidden id={cartCheckboxId} />
            <aside className="cart">
                <ListGroup>
                    {cart.length > 0 ? (
                        cart.map((tour) => (
                            <CartItem
                                key={tour.id}
                                removeFromeCart={() => removeFromeCart(tour)}
                                {...tour}
                            />
                        ))
                    ) : (
                        <ListGroup.Item>
                            <div className="text-center">Tu carrito está vacío</div>
                        </ListGroup.Item>
                    )}
                </ListGroup>
                <footer className="footer-cart">
                    <Button variant="" className="booking_form_submit button-cart text-white" onClick={clearCart} >Vaciar Carrito <MdDelete className="" /></Button>
                </footer>
            </aside>
        </>
    )
}
export default Cart
