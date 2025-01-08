import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const formatUserName = (userName) => `@${userName}` //pasar una funcion.
   return (
    <section className="App"> {/* al utilizar React.fragment es mejor colocarlo y quitar las letras para que se vea mejor visible */}
        <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Ángel Durán" /> {/*por ejemplo podemos guardar el nombre asi nomas sin el parametro name, y este se guardaria automaticamente en uno llamado children este se pasa en thitterFollowCard y se establece como name pero en vez de eso se da como children y se pasa el parametro establecido donde estaba name, automaticamente lo leera. te da un campo libre podes darle mas nombre, osea que sea mas extensible. */}
        <TwitterFollowCard formatUserName={formatUserName} userName="hr_275" name="HR" />
        <TwitterFollowCard formatUserName={formatUserName} userName="leanpub" name="LeanPub" />
        <TwitterFollowCard formatUserName={formatUserName} userName="vxnder" name="Vanderhart" />
    </section>
   ) 
}

//un componente es una factoria de elementos, el elemento es el que renderiza, react renderiza elementos.