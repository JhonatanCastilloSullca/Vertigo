import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const PaymentButton = ({ sessiontoken, merchantid, purchasenumber, amount, route, link_js }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        // Cargar el script de Izipay
        const loadScript = () => {
            if (window.IziPayCheckout) {
                setScriptLoaded(true);
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js'; // URL del script proporcionada por Izipay
            script.onload = () => {
                setScriptLoaded(true);
            };
            script.onerror = () => {
                console.error("Error al cargar el script de Izipay");
            };
            document.body.appendChild(script);
        };

        loadScript();

        return () => {
            // Opcional: limpiar el script si es necesario
        };
    }, [link_js]);

    const openPaymentForm = () => {
        if (scriptLoaded && window.IziPayCheckout) {
            // Configurar el checkout de Izipay
            window.IziPayCheckout.configure({
                sessiontoken: sessiontoken, // Token generado desde tu backend
                merchantid: merchantid,    // ID del comercio
                purchasenumber: purchasenumber, // Número único de compra
                amount: amount,            // Monto de la transacción
                currency: 'USD',           // Ajustar según tu necesidad
                action: route,             // Endpoint de tu backend para procesar pagos
                onComplete: function (response) {
                    if (response.status === 'success') {
                        console.log('Pago realizado con éxito', response);
                    } else {
                        console.error('El pago falló:', response.message);
                    }
                },
                onCancel: function () {
                    console.warn('El usuario canceló el pago');
                },
            });

            // Abrir el formulario de pago
            window.IziPayCheckout.open();
        }
    };

    return (
        <Button
            variant="primary"
            onClick={openPaymentForm}
            disabled={!scriptLoaded}
        >
            Pagar
        </Button>
    );
};

export default PaymentButton;
