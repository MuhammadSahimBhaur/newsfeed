import ListItem from "./ListItem.js"

export async function loadPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const titles = data.map((post) => post.title);
    const newPosts = titles.map((title, index) => <ListItem title={title} index={index} ></ListItem>);

    return newPosts
}