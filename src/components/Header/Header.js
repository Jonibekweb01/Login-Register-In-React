import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthContext } from "../../context/AuthContext"

export const Header = () => {

    const { me, setMe } = useContext(UserContext)
    const { token, setToken } = useContext(AuthContext)
    console.log(me.firstName.charAt(0));
    const navigate = useNavigate()

    return (
        <>
            <header className="bg-light py-3 shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <Link className="navbar-brand" to="#">Hidden brand</Link>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to='/posts'>Posts</NavLink>
                                    </li>
                                </ul>
                                <button onClick={
                                    () => {
                                        setMe('')
                                        setToken('')
                                        navigate('/')
                                    }}
                                    className="btn btn-warning rounded-circle">
                                    {
                                        me.firstName.charAt(0)
                                        +
                                        me.lastName.charAt(0)
                                    }
                                </button>
                            </div>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    )
}
