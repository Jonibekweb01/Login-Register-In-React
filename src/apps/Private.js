import { Route, Routes } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Posts } from "../pages/Posts/Posts"

export const Private = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <div>
                        <h2>Welcome to the Home page</h2>
                    </div>
                } />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </>
    )
}
