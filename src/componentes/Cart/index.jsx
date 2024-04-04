import { useState } from "react"
import { Button, Dropdown, Form, ListGroup } from "react-bootstrap"
import { MdDelete } from "react-icons/md"
import './index.css'
import { FaCartShopping } from "react-icons/fa6"
import { useCart } from "../../Hook/useCart"

function CartItem({ ImagenPrincipal, Precio, Titulo, removeFromeCart }) {
    return (
        <ListGroup.Item className="">
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
    const { cart, clearCart, removeFromCart } = useCart();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleCartDropdown = () => setShowDropdown(!showDropdown);
    return (
        <Dropdown show={showDropdown} onToggle={toggleCartDropdown} className="d-inline cart-button m-0 p-0 text-white">
            <Dropdown.Toggle variant="transparent" id="dropdown-cart" className="text-white">
                <FaCartShopping className="" />
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
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Form.Label className="mx-4 font-weight-bold h6" htmlFor="">Tu Carrito</Form.Label>
                <ListGroup variant="flush">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <Dropdown.Item key={item.id}>
                                <CartItem
                                    removeFromCart={() => removeFromCart(item)}
                                    {...item}
                                />
                            </Dropdown.Item>
                        ))
                    ) : (
                        <Dropdown.Item>Tu carrito está vacío</Dropdown.Item>
                    )}
                </ListGroup>
                <Dropdown.Divider />
                <Dropdown.Item className="text-center">
                    <Button className="button-cart text-white" onClick={clearCart}>Vaciar Carrito</Button>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Cart;
