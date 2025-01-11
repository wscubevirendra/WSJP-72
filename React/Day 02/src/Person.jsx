function Person(props) {
    console.log(props)

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h3>{props.name}</h3>
                <h4 style={{ color: props.age < 18 ? "red" : "" }}>Age:-{props.age}</h4>
            </div>


        </div>
    )
}


export default Person