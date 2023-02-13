const Button = (props) => {
  const classes = props.className;
  return (
    <button className={classes}>{props.title}</button>
  );
}

export default Button