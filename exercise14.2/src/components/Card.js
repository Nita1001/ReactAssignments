const Card = ({ image, title, description }) => {

  return (

    <div className='card'>
      <img className='circle' src={image} alt={title} />
      <div className='card-container'>
        <h3><b>{title}</b></h3>
        <p>{description}</p>
      </div>
    </div>

  );
}

export default Card