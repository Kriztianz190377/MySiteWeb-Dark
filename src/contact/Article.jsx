

const Article = ({icons, title, href, msn}) => {
    return (
        <article>

            <i className="icon">{icons}</i>
            <h5 className='title'>{title}</h5>
            <a
                href={href}
                target="_blank"
                className="email"
            >
                {msn}
            </a>

        </article>
    )
}

export default Article