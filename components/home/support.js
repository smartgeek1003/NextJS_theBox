

const Support = () => {
  return (
    <section className='flex flex-col items-center p-20 mt-16 bg-gray-100' id="contactUs" >
      <p style={{fontSize: "4vw", color:"black", fontWeight: "bold"}}>What can us do for you?</p>
      <p style={{fontSize: "2vw", color:"black", marginTop:"2vw",marginBottom: "2vw",  textAlign: "center"}}>We are ready to work on a project of any complexity,<br/> whether it is commercial or residential</p>
      <div style={{ marginTop: "2vw", marginBottom:"1.5vw" }}>
        <input style={{marginRight:"3vw",fontSize: "1.5vw", width: "30vw", borderRadius:"0.5vw",padding:"0.5vw"}} type="text" name="name" placeholder="Your Name*"/>
        <input style={{marginRight:"3vw",fontSize: "1.5vw", width: "30vw", borderRadius:"0.5vw",padding:"0.5vw"}}type="email" name="email" placeholder="Email*"/>
      </div>
      <div style={{ marginTop: "2vw", marginBottom:"1.5vw" }}>
        <input style={{marginRight:"3vw",fontSize: "1.5vw", width: "30vw", borderRadius:"0.5vw",padding:"0.5vw"}} type="text" name="name" placeholder="Reason fir Contacting*"/>
        <input style={{marginRight:"3vw",fontSize: "1.5vw", width: "30vw", borderRadius:"0.5vw",padding:"0.5vw"}} type="email" name="email" placeholder="Phone"/>
      </div>
      <div style={{ marginTop: "2vw", marginBottom:"2vw" }}>
        <textarea style={{marginRight:"3vw",fontSize: "1.5vw", width: "40vw", borderRadius:"1vw",padding:"0.5vw"}} type='text' rows='4' placeholder="Message"/>
        <p>* indicates required holder</p>
      </div>
      <div>
        <button style={{marginTop: "1vw",color: "white", background: "#2947a9", padding: "0.5vw 8vw", fontSize: "1.5vw", borderRadius:"0.5vw"}}>Submit</button>
      </div>
    </section>
  )
}

export default Support
