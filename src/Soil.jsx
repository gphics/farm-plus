import soils from './DB/soils'
import { useParams } from "react-router-dom"
import Nav from './Nav'
function Soil() {
  const { soil_type } = useParams()
  const soil_info = soils.filter(({ name }) => name === soil_type)[0]
  if (!soil_info) {
  }
  return (
    <div className='soil-page'>
      <Nav />
      {soil_info ? <SoilInfo {...soil_info} /> : <h3 className='not-found'> {soil_type} soil not found ! </h3>}
    </div>
  )
}

function SoilInfo({ name, image_url, description, uses, suitable_plants }) {
  return <article className="soil-info">
    <h2> {name} soil </h2>
    <img src={image_url} alt={name} />
    <p><span>Description:</span> {description} </p>
    <p><span>Uses:</span> {uses} </p>
    <p><span>Suitable plants:</span> {suitable_plants} </p>
  </article>
}
export default Soil