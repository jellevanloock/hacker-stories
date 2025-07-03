export default function ListItem({
    item: { title, url, author, num_comments: numComments, points, objectID: objectId },
}) {
    return (
        <li key={objectId}>
            <p></p>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{numComments}</span>
            <span>{points}</span>
        </li>
    );
}
