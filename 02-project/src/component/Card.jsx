import '../CSS/Card.css'
function Card(props){
    return(
        <>
            <div className="card">
                <p>Name : name</p>
                <p>Age : age</p>
                <p>Gender : gender</p>
                <p>Village : village</p>
            </div>
        </>
    )
}

export default Card;