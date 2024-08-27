function Card(props){
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <h2>{props.h2}</h2>
        </div>
        <div className="col">
        <h2>{props.h3}</h2>
        </div>
      </div>
      
      
    </div>
  );
}

export default Card;