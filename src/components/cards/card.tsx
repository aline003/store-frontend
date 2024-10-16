import "./card.css"

interface CardProps{
    name: string,
    price: number,
    image: string
}

export function Card({name, price, image} : CardProps){
        return(
            <div className="card">
                <img src={image}/>
                <h2>{name}</h2>
                <p>Valor: R${price}</p>
            </div>
        )
    }
