import { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importar estilos de Leaflet
import L from "leaflet"; // Importar Leaflet para solucionar problema de iconos

function App() {
  const [menu, setMenu] = useState(false);
  const submitShowMenu = () => {
    setMenu(!menu);
  };

  const zoom = 5.8;
  const Milagrosa = [11.239491355111562, -74.20238291217323];
  const Porto = [11.016107154777638, -74.8460627522537];
  const Mar = [10.506927790554276, -75.46670520005455];
  const Alta = [10.472246349090263, -73.25542898796255];
  const Imat = [8.781992514611167, -75.86056638525726];
  const Concepcion = [9.307353530245447, -75.36993454784694];

  return (
    <div className='font-["Julius Sans One"] font-light min-h-screen flex flex-col'>
      <header>
        <div className="fixed text-black h-[64px] bg-blue-500 flex justify-between w-full items-center px-4 text-normal font-bold">
          <ul className="gap-3 ">
            <li className="text-xl cursor-pointer">IPS</li>
          </ul>
          <ul className="cursor-pointer sm:flex hidden sm:gap-3">
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#acercade">Acerca de</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#mapa">Mapa</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#sobremi">Sobre mi</a>
            </li>
          </ul>
          <button onClick={() => submitShowMenu()} className="sm:hidden">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/menu--v3.png"
              alt="menu--v3"
            />
          </button>
          <section
            className={`fixed flex justify-center items-center transition-opacity    ${
              menu
                ? "opacity-100 visible z-20 durarion-200"
                : "opacity-0 invisible duration-200 "
            }`}
          >
            <div className="h-[200px] w-screen fixed top-[60px] bottom-0 right-0 left-0 bg-blue-500">
              <ul className="grid ml-2 font-semibold  my-4 gap-10 text-black">
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#acercade">Acerca de</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#mapa">Mapa</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#sobremi">Sobre mi</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-[url('/cli.jpg')] h-[500px] min-w-screen bg-center bg-cover pt-10">
          <div className="pt-7">
            <h1 className='font-["Julius Sans One"] font-semibold text-black p-6 sm:text-4xl whitespace-break-spaces text-xl w-[250px] pl-6]'>
              IPS DE ALTA COMPLEJIDAD DEL CARIBE COLOMBIANO
            </h1>
          </div>
          <div id="acercade" className="h-[600px]"></div>
        </section>

        <section>
          <article className="text-white bg-blue-400 ">
            <div className="gap-3 p-6 sm:flex">
              <div className=" sm:grid sm:mt-7 place-content-evenly">
                <h2 className="text-2xl text-black sm:h-[30px] font-semibold">
                  Que son las clinicas de alta complejidad
                </h2>
                <div className="sm:w-[400px]">
                  <p className="font-semilight text-black ">
                    Las clínicas de alta complejidad atención son centros de
                    salud especializados que ofrecen médica avanzada, incluyendo
                    unidades de cuidados intensivos, cirugías complejas,
                    oncología, cardiología y otras especialidades de alto nivel.
                    Cuentan con tecnología de última generación, equipos
                    multidisciplinarios y protocolos de seguridad rigurosos para
                    el diagnóstico y tratamiento de enfermedades graves.
                  </p>
                </div>
              </div>

              <div id="senderos" className="p-6">
                <img className="sm:h-[auto] w-[auto]" src="/fut.jpg" alt="" />
              </div>
            </div>
          </article>
        </section>
        <section>
          <div className="grid bg-blue-300  ">
            <h2 className="pl-3 pt-6 text-2xl text-black sm:h-[50px] text-center content-center font-semibold">
              Ubicaciones
            </h2>
            <div
              id="mapa"
              className="grid items-center w-[320px] h-[320px] text-center mb-[35px] ml-[35px] md:translate-x-1/2 md:w-[380px] mt-7"
            >
              <MapContainer
                center={Milagrosa}
                zoom={zoom}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={Milagrosa}>
                  <Popup>
                    Santa Marta
                    <br />
                    Clinica la milagrosa
                  </Popup>
                </Marker>
                <Marker position={Porto}>
                  <Popup>
                    Barranquilla <br />
                    Clinica porto azul auna
                  </Popup>
                </Marker>
                <Marker position={Mar}>
                  <Popup>
                    Cartagena <br />
                    Hospital serena del mar
                  </Popup>
                </Marker>
                <Marker position={Alta}>
                  <Popup>
                    Valledupar <br />
                    Clinica de alta complejidad del caribe
                  </Popup>
                </Marker>
                <Marker position={Imat}>
                  <Popup>
                    Monteria <br />
                    Clinica imat oncologica auna
                  </Popup>
                </Marker>
                <Marker position={Concepcion}>
                  <Popup>
                    Sincelejo <br />
                    Clinica la concepcion III nivel
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <section className="bg-blue-600 grid gap-3 text-black">
              <div className="">
                <h2 className="text-black pl-3 pt-5 font-semibold ml-4 text-2xl md:mt-5 md:text-4xl">
                  Clinicas
                </h2>
              </div>
              <div className=" grid md:flex md:justify-center md:items-center md:gap-0 md:p-3">
                <div className="grid content-center justify-items-center md:gap-0 md:h-[350px] ">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/porto.jpg"
                    alt=""
                  />
                  <p className="text-black p-2 font-semibold">
                    En la actualidad, somos una compañía de salud y bienestar
                    con más de 6.000 colaboradores, con presencia en Perú y
                    Colombia.
                  </p>
                </div>

                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="conecpcion.jpg"
                    alt=""
                  />
                  <p className="text-black font-semibold p-2">
                    La Clínica Especializada la Concepción S.A.S. Nació en la
                    ciudad de Sincelejo, en el mes de Diciembre del año 2022
                  </p>
                </div>
                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="milagrosa.jpg"
                    alt="Lachesis Muta"
                  />
                  <p className="text-black p-2 font-semibold">
                    La Clinica la Milagrosa S.A., puertas abiertas para su
                    salud, fue creada como institución prestadora de servicios
                    de salud, el 27 de Noviembre de 1988,
                  </p>
                </div>
              </div>
              <div className="  grid gap-5 md:flex md:justify-center md:items-center md:gap-0 md:p-3">
                <div className="grid gap-5 content-center justify-items-center md:gap-0 md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/mar.jpg"
                    alt="clinica"
                  />
                  <p className="text-black p-2 font-semibold">
                    Hoy escribimos una nueva historia de la salud en Cartagena
                    gracias a nuestro modelo de atención integral centrada en la
                    persona.
                  </p>
                </div>

                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/alta.jpg"
                    alt="clinica"
                  />
                  <p className="text-black p-2 font-semibold">
                    Somos una red de empresas prestadoras de servicios
                    integrales de salud de mediana y alta complejidad de la
                    región caribe, que dedica sus esfuerzos a brindar atención
                    humanizada.
                  </p>
                </div>
                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/imat.jpg"
                    alt="clinica"
                  />
                  <p className="text-black p-2 font-semibold">
                    La gestión clínica se centra en el paciente y su familia,
                    enfocada en acciones de promoción y prevención, diagnóstico,
                    tratamiento.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer id="sobremi" className="bg-black text-white p-4">
        <div className="flex justify-center gap-3 text-[#faf6c2] text-lg font-light">
          <a
            className="cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200"
            
          >
            Ingrid Yojana Choperena Ortega
          </a>
         
        </div>
        <h3 className="flex justify-center text-xl font-light text-[#FFF67E]">
          © Copyright todos los derechos reservados
        </h3>
      </footer>
    </div>
  );
}

export default App;
