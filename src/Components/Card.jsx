import '../card.css'

const Card = ({info}) => {
    // console.log(info)
    
    const {main:{temp}, name, sys:{country}, weather} = info; 
    let tempOperacion = temp-273.12
    let tempActual = tempOperacion.toFixed(2)
    let description = weather[0].description
    console.log(`${name} - ${country} - ${tempActual} - ${description}`)

  return (
    <>
        <section className="info">
            <h2>{name} - {country}</h2>
            <h1>{tempActual}°C</h1>
            <p>{description}</p>
        </section>
    </>
  )
}
export {Card}
