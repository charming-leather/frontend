import './dashboard.css'
import {getUser} from "../../services/storage.service.js";

const Dashboard = () => {
   const user = getUser()

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Hello {user.name} !</h3>
        </div>
    )
}

export default Dashboard