import '../styles/Principal.css'
import pythonImage from '../assets/python.png'
import reactImage from '../assets/react.png'

export default function Principal() {
  return (
    <main className="main">
        <div className="aside">
            This is the aside
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
