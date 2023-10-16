import { questions } from "../data";

export const BurguerQuiz = ({actuallyQuestion, handlePreference}) => {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <h3 className="font-bold text-center text-3xl mx-4 text-white mt-4 mb-2">DESCUBRE TU HAMBURGUESA PERFECTA</h3>
        <p className="mx-4 text-center text-sm text-amber-50 font-extralight md:text-base">Responde esta serie de preguntas y encuentra cual es la hamburguesa que mejor se adapte a tus gustos.</p>
        <div className="border p-3 rounded-xl text-white mt-7 md:mt-16 md:p-8 md:text-lg">
          <div> <span className="font-semibold"> Pregunta {actuallyQuestion + 1} de</span> {questions.length} </div>
          <p className="my-7 text-xl font-semibold"> {questions[actuallyQuestion].titulo} </p>

          <div className="flex justify-around">
              <button className="px-5 py-2 text-lg font-semibold border rounded-xl hover:bg-red-700 hover:scale-105 active:bg-red-400" onClick={ () => handlePreference( questions[actuallyQuestion].ingredient, true ) }> Sí </button>
              <button className="px-5 py-2 text-lg font-semibold border rounded-xl hover:bg-red-700 hover:scale-105 active:bg-red-400" onClick={ () => handlePreference( questions[actuallyQuestion].ingredient, false ) }> No </button>
          </div>
        </div>
      </main>
    </>
  );
};
