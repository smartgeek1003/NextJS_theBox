const ExperienceBox = ({ div_top, div_left ,src, top, left, number, text, index }) => {
    return(
        <div className="absolute" style={{ position : "absolute" ,  top: div_top, left: div_left, width: "20vw", padding: "1.5vw", height: "10vw", zIndex: index , background: "white", boxShadow: "0 0 0 2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.3)"}}>
            <img src={src} style={{ position : "absolute", top: top, left: left, width: "6vw"}} />
            <p style={{ fontSize: "4vw", color: "black", fontWeight: "bold", marginBottom: "0.5vw"}}>{number}</p>
            <p style={{ paddingLeft: "1.5vw", fontSize: "1.5vw", borderLeft:"solid #f9995d 0.4vw", color: "#667299"}}>{text}</p>
        </div>
    )
}
export default ExperienceBox