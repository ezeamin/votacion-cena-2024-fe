import { Link } from 'react-router';

const FinishVoteView = () => {
  // TODO: Check if user with token has already voted

  return (
    <section className="flex min-h-[calc(100vh_-_35px)] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Voto registrado 🎉</h1>
      <p className="mt-5 text-balance">
        ¡Gracias! Tu voto ya es visible en pantalla.
      </p>
      <Link
        to="/general/results"
        className="btn btn-primary mt-10 text-lg uppercase text-white"
      >
        Ver resultados
      </Link>
      <div className="mt-52 rounded-md bg-black/50 px-5 py-2 text-sm">
        <p>¡Aún estás a tiempo!</p>
        <p>¡100 ARS = 1 Chance!</p>
        <p>
          alias: <span className="font-bold">ezeamin-sant</span>
        </p>
      </div>
    </section>
  );
};
export default FinishVoteView;
