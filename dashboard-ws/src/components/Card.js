const Card = (props) => {
  return (
		<div className="p-5 m-1 bg-primary-500 rounded-lg flex flex-col flex-grow flex-shrink-0">
      {props}
    </div>
  );
}

export default Card