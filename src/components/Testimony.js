import React from 'react' //rfce snippet
import '../styles/Testimony.css'

export function Testimony(props) {
  return (
    <div className='container-testimony'> {/*principal container*/}
	  <img className='image-testimony' src={require(`../img/t-${props.img}.png`)} alt='Emma Watson'/>
	  <div className='container-text-testimony'>
		<p className='testimony-name'> <strong>{props.name}</strong> from {props.country}</p>
		<p className='position-testimony'> {props.position} at <strong>{props.company}</strong></p>
		<p className='text-testimony'>"{props.testimony}"</p>
	  </div>
    </div>
  );
}

export default Testimony;
