import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Post = () => {

    const [data, setData] = useState({})
    let { id } = useParams();

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const result = await response.json()
            setData(result)
        }

        fetchPosts();
    }, [id]);

    return (<div style={{ paddingTop: "300px", maxWidth: "400px" }}>
        Body: <div> {data.body} </div>
    </div>);
}

export default Post;