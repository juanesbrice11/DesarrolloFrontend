import '../styles/Principal.css'
import pythonImage from '../assets/python.png'
import reactImage from '../assets/react.png'
import noticiaImage from '../assets/noticia.jpeg'

export default function Principal() {
  return (
    <main className="main">
        <div className="aside">
            <h2 className="titulo">Ultimas noticias</h2>
            <h4 className="info">
          El CEO de AWS lo tiene claro: el futuro de los ingenieros de software no será programar, la IA se encargará de ello
          </h4>
          <div className="contenido">


Unos audios filtrados revelan que Mark Garman opina que la IA acabará con los roles de programación actuales. El futuro de los ingenieros de software será diseñar nuevas formas de usar la IA, no programarlas Leer más » 
          </div>
          <img src={noticiaImage} alt="" />
        </div>
        <div className="principal">
          <h2>Herramientas de programación</h2>
          <div className="lista">
            <div className="card">
                <figure>
                  <img src={pythonImage} alt="" />
                </figure>
                <div className="contenido">
                  <h3>Python</h3>
                  <p>Python es ...</p>
                </div>
              </div>
              <div className="card">
                <figure>
                  <img src={reactImage} alt="" />
                </figure>
                <div className="contenido">
                  <h3>React es</h3>
                  <p>React es...</p>
                </div>
              </div>
          </div>
            
        </div>
    </main>
  )
}
