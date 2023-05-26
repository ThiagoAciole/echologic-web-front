
export default function Video({link}){
    return(
        <div className="pt-p-56 relative overflow-hidden">
            <iframe className="absolute w-full h-full top-0 left-0" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}