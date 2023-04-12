import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Post = () =>{

const [data, setData] = useState({})
let {id} = useParams();

useEffect(() => {
    async function fetchPosts() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const result = await response.json()
        setData(result)
    }

    fetchPosts();
    }, []);

    return (<div>
    Body: <div> {data.body} </div>
    </div>);
}

export default Post;