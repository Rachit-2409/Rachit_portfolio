import propTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title, label,
    tags, projectLink, classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors" + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
            src={imgSrc}
            alt={title} 
            loading="lazy"
            className="img-cover"
            />
        </figure>
        <div className="flex items-center justify-between gap-4">
            <h3 className="title-1 mb-3">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
             {tags.map((label, key)=>{
           return( <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                    {label}
            </span>
        )})}
     
        </div>

            <div className="">
                <span className="material-symbols-rounded" aria-hidden="true"
                >   
                arrow_outward
                </span>         
            </div>



        </div>

            <a href={projectLink}
            className=""
            target="_blank"></a>

    </div>
  )
}


ProjectCard.prototype = {
    imgSrc :  propTypes.string.isRequired,
    title  : propTypes.string.isRequired,
    tags :  propTypes.string.isRequired,
    projectLink : propTypes.string.isRequired,
    classes : propTypes.string.isRequired
}

export default ProjectCard