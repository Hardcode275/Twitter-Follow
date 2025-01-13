import { useState } from "react"; //importar los hooks te permiten añadir sierta funcionalidad a los componentes de react, utilidades de react para mejorar el programa // guarda variable si estamos o no estaos siguiendo a ese usuario este usestate
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
    console.log('[TwitterFollowCard] render with userName: ', userName)
  
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'
  
    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }
  
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt='El avatar de midudev'
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
  }
/*
export function TwitterFollowCard ({formatUserName,userName, name, initialIsFollowing}) { //si hay un valor por defecto en los parametros solo colocas el valor en este ejemplo userName = 'unknown'
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src={`https://unavatar.io/substack/${userName}`} alt="avatar" /> {/*sirve para evaluar una expresion  o reutliza el parametro establecido porque sino lo toma como un string*/
      /*      <div className='tw-followCard-info'> 

                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
        </aside>
    </article>
    )
}
//la base de la reutilizacion de cualquier componente en react es las propiedades, los parametros.  

*/