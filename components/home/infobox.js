const Infobox = ({ src, number, text }) => {
  return (
    <div style={{ margin: "20px", border: "#e0e3eb solid 2px", padding: "40px 60px"}}>
      <img src={src} style={{ height: "50px"}}/>
      <div className='flex flex-col gap-3 py-5'>
        <h5 className='text-lg font-bold text-black'>{number}</h5>
        <p className='text-black '>{text}</p>
      </div>
    </div>
  )
}

export default Infobox
