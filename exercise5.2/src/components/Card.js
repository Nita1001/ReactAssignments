const Card = (props) => {
  const classes = props.images;
  const title = props.title;
  const description = props.description;

  const cardClass = 'card';
  const cardContainer = 'card-container';
  const thisRef = '#';
  
  return (

    <div className={cardClass}>
      <div className={classes} />
      <div className={cardContainer}>
        <h3><b>{title}</b></h3>
        <p>{description}</p>
        <p>
          <a href={thisRef}>Link1</a>
          &nbsp;
          <a href={thisRef}>Link2</a>
        </p>
      </div>
    </div>

  );
}

export default Card