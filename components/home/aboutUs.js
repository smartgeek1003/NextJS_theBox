const AboutUs = () => {
    return(
        <section className="flex flex-row w-full h-auto mt-32" id="aboutUs" >
            <div>
                <img src='/avatar.svg' style={{ margin: "5vw", width: "65vw"}}/>
            </div>
            <div style={{ marginTop: "10vw", marginLeft: "-15vw", marginBottom: "2.5vw", width: "30vw", height: "32vw", background: "#2947a9" , padding : "2vw"}}>
                <h5 style={{ fontSize: "2.5vw", marginBottom : "2.5vw"}}>About Us</h5>
                <p style={{ fontSize : "1.1vw", marginBottom : "2vw", color : "white"}}>For more than 30 years we have been delivering world-class construction and we have built many lasting relationships along the way.</p>
                <p style={{fontSize : "1.1vw" , color : "white"}}>We have matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                <button style={{  marginTop: "6vw", background : "white" , color : "#2947a9", padding : "0.5vw 1vw", fontSize: "1.1vw", borderRadius: "0.5vw"}}>More on Our History</button>
            </div>
        </section>
    )
}
export default AboutUs