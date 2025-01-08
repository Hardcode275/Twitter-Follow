export function TwitterFollowCard ({formatUserName,userName, name, isFollowing}) { //si hay un valor por defecto en los parametros solo colocas el valor en este ejemplo userName = 'unknown'

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src={`https://unavatar.io/substack/${userName}`} alt="avatar" /> {/*sirve para evaluar una expresion  o reutliza el parametro establecido porque sino lo toma como un string*/}
            <div className='tw-followCard-info'>

                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir {/*lo que envuelve un elemento son sus hijos  */}
            </button>
        </aside>
    </article>
    )
}

//la base de la reutilizacion de cualquier componente en react es las propiedades, los parametros. 