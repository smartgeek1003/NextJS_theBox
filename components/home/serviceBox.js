const ServiceBox = ({ src, text, color, font }) => {
    return (
        <div className="flex flex-col items-center px-24 py-10 my-10 w-96" style={{ borderRadius : "5px", background: color}}>
            <img src={src} className="h-12 my-5"/>
            <img src="/rect.svg" className="w-2/5 my-3"/>
            <p className="my-3 text-2xl font-bold" style={{ color : font }}>{text}</p>
        </div>
    )
}
export default ServiceBox