import SingleCountry from "../SingleCountry/SingleCountry";
const Country = (props) => {
  //   console.log(props);
  const { name, flags, area, languages } = props.countr;
  let lan = "";
  for (const key in languages) {
    lan += `${languages[key]},`;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
        <img src={flags.png} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Name :{name.common}</h5>
          <p className="card-text">Area :{area}</p>
          <p className="card-text">languages :{lan}</p>
          <button className="btn btn-primary">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
