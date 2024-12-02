type Props = {
  hasAccepted: boolean;
  hasRejected: boolean;
  isNear: boolean | null;
};

const GPSModal = (props: Props) => {
  const { hasAccepted, hasRejected, isNear } = props;

  if (hasAccepted && isNear) {
    return null;
  }

  if (hasAccepted && !isNear) {
    return (
      <dialog id="gps-modal" className="modal modal-open">
        <div className="modal-box">
          <h3 className="text-lg font-bold">¡Ups! 🙈</h3>
          <p className="py-4">
            Parece que no estás en la zona de votación. ¿Qué haces acá? 👮🏼‍♂️
          </p>
        </div>
      </dialog>
    );
  }

  if (hasRejected) {
    return (
      <dialog id="gps-modal" className="modal modal-open">
        <div className="modal-box">
          <h3 className="text-lg font-bold">¡Ups! 🙈</h3>
          <p className="py-4">
            Parece que no nos diste permiso para acceder a tu ubicación. 😢
            <br />
            <br /> Si sabes reestablecer el permiso, buenisimo. De lo contrario,
            ¡Gracias por participar! Ya podés cerrar esta ventana.
          </p>
        </div>
      </dialog>
    );
  }

  return (
    <dialog
      id="gps-modal"
      className={`modal ${!hasAccepted ? 'modal-open' : ''}`}
    >
      <div className="modal-box">
        <h3 className="text-lg font-bold">¡Hola! 👋🏼</h3>
        <p className="py-4">
          Necesitamos tu permiso para acceder a tu ubicación. Con esto,
          garantizaremos que los resultados sean acertados.
        </p>
      </div>
    </dialog>
  );
};
export default GPSModal;
