import { Accordion, Button, Card, Col, Container, Form, FormControl, FormGroup, InputGroup, ListGroup, Row } from "react-bootstrap"
import './index.css'
import Tours from "../../secciones/Tours"
import CardTours from "../../componentes/CardTours"
import { AiOutlineTeam } from "react-icons/ai"
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsBackpack } from "react-icons/bs";


import { GiDuration } from "react-icons/gi"



function ToursArchive() {

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: "url('../../../src/assets/images/bg_5.jpg')" }}>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center">
                        <div className="col-md-7 ">
                            <span className="subheading">Bienvenido a vertigo  Travel</span>
                            <p className="caps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla, ex nobis culpa iusto rem itaque consequatur illum fugiat dolore consequuntur saepe sapiente provident. Quod accusantium quidem fuga dolores architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus alias. Sit nisi, tenetur voluptate recusandae esse numquam unde quo corporis ad laborum? Sed excepturi, tenetur odit fugiat libero molestiae?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <CardTours />
            </div>
        </>
    )
}

export default ToursArchive
