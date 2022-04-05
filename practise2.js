{
    <ul className="list-group" style={{display:"flex",flexDirection:"column"}}>
      <li className="list-group-item">{empty}</li>
    </ul>
  }
  {
    response.map( res => (
      <ul className="list-group" style={{display:"flex",flexDirection:"column"}} key={res._id}>
        <li className="list-group-item">Name: {res.name} </li>
        <li className="list-group-item">Age: {res.age} </li>
        <li className="list-group-item">DOB: {res.dob.slice(0,10)} </li>
        <li className="list-group-item">Gender: {res.gender} </li>
        <li className="list-group-item">Aadhaar Number: {res.aadhaar} </li>
        <div className="row mt-3">
            <div className="col">
                <Button className="btn btn-danger m-2" onClick={findAnother}>Find Another</Button>
                <Button className="btn btn-success m-2" onClick={vaccinate}>Vaccinate {res.name.substr(0,res.name.indexOf(' '))}</Button>
            </div>
        </div>
      </ul>
    ))
}
  