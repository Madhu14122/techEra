import {Link} from 'react-router-dom'

import {Image, Name, Li} from './styledComponents'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <Li>
      <Link to={`/courses/${id}`} className="link-el">
        <Image src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Link>
    </Li>
  )
}

export default Item