import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  
  export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    )
  }


//export function App(){
  //  const formatUserName = (userName) => `@${userName}` //pasar una funcion.
   //return (
    //<section className="App"> {/* al utilizar React.fragment es mejor colocarlo y quitar las letras para que se vea mejor visible */}
     //   <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Ángel Durán" initialIsFollowing={true}/> {/*por ejemplo podemos guardar el nombre asi nomas sin el parametro name, y este se guardaria automaticamente en uno llamado children este se pasa en thitterFollowCard y se establece como name pero en vez de eso se da como children y se pasa el parametro establecido donde estaba name, automaticamente lo leera. te da un campo libre podes darle mas nombre, osea que sea mas extensible. */}
       // <TwitterFollowCard formatUserName={formatUserName} userName="hr_275" name="HR" />
       // <TwitterFollowCard formatUserName={formatUserName} userName="leanpub" name="LeanPub" />
       // <TwitterFollowCard formatUserName={formatUserName} userName="vxnder" name="Vanderhart" />
    //</section>
//   ) 
//}

//un componente es una factoria de elementos, el elemento es el que renderiza, react renderiza elementos.

// npm create vite@latest
// cd proyect
// npm install
// npm run dev