import { Link } from "react-router-dom"
import "./styles.css"

const ListItem = ({ title, index }) => {
    return (<div className="list-item">
        <li> {title} <button>
            <Link to={"post/" + (index + 1).toString()}>Go to post! {index + 1}</Link>
        </button>
        </li>
    </div>);
}

export default ListItem;