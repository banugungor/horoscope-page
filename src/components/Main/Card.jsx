import "./Card.scss";

const Card = (data) => {
  return (
    <div className="cards">
      <div className="title">{/* <h3>{data.title}</h3> */}</div>
      <div className="date">
        <h4> {data.date} </h4>
      </div>
      <img className="signs" src={data.image} alt="" />
      <div className="card-over">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
