import ExperienceBox from './experienceBox'
const Experience = () => {
    return(
        <section className='relative flex-row p-20 mt-10 lex ' style={{ background : "white", height: '50vw'}}>
            <div>
                <ExperienceBox src='/experience1.svg' div_top='10vw' div_left='35vw' top='-3vw' left='16vw' number='84' text='Happy Clients' index='4'/>
                <ExperienceBox src='/experience2.svg' div_top='16vw' div_left='22vw' top='-4vw' left='-3vw' number='123' text='Projects Completed' index='3'/>
                <ExperienceBox src='/experience3.svg' div_top='25vw' div_left='33vw' top='-2vw' left='16vw' number='37' text='Awards Win' index='4'/>
                <ExperienceBox src='/experience4.svg' div_top='34vw' div_left='25vw' top='-4vw' left='-5vw' number='30' text='Years in Business ' index='3'/>
            </div>
            <p style={{ position: "absolute", top: "13vw", left: "67vw", fontSize: "4vw", fontWeight: "bold", color: "#2947a9"}}>30 Years<br/>Experience</p>
            <p style={{position: "absolute", top: "23vw", left: "67vw", color: "#525b7a", fontSize: "1vw"}}>Our company has been the <br/> leading provided construction <br/>sevices to clients throughout <br/> the USA since 1988</p>
            <button style={{position: "absolute", top: "30vw", left: "67vw", color: "white", background: "#2947a9", padding: "0.5vw 1.5vw", fontSize: "1.5vw"}}>Contact Us</button>
        </section>
    )
}
export default Experience