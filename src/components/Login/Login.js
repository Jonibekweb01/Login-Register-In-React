import axios from 'axios'
import { useEffect, useRef, useContext } from 'react'
import { Input } from '../Input/Input'
import { AuthContext } from '../../context/AuthContext'
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const { token, setToken } = useContext(AuthContext)
    const { me, setMe } = useContext(UserContext)

    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleFormSubmit = (evt) => {
        evt.preventDefault()

        axios
            .post("http://localhost:8080/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            .then(res => {
                if (res.status === 200) {
                    setToken(res.data.accessToken)
                    setMe(res.data.user)
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='w-50 mx-auto p-5 shadow mt-5'>
                <h1 className='text-center'>Login</h1>
                <p>Sizda account yo'qmi ? <Link to='/register'>Sign Up</Link ></p>
                <form onSubmit={handleFormSubmit}>
                    <Input ref={emailRef} type="email" placeholder='Email' />
                    <Input ref={passwordRef} type="password" placeholder='Password' />
                    <button type="submit" className="btn btn-danger col-12">Submit</button>
                </form>

            </div>
        </>
    )
}
