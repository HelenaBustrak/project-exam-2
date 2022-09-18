
import { useNavigate } from 'react-router-dom'
export default function UserContext({loggedIn}) {

    const navigate = useNavigate()
    if({loggedIn} === false) {
        navigate("/");
    }
}
