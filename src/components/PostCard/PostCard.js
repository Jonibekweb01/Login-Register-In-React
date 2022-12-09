export const PostCard = ({ item }) => {
    return (
        <>
            <li className="d-flex align-items-center shadow p-3 mb-3 rounded">
                <p className="flex-grow-1 m-0">{item.title}</p>
                <button className="btn btn-warning ms-3">Edit</button>
            </li>
        </>
    )
}
