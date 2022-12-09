import axios from 'axios';
import React, { useEffect, useRef, useState, useContext } from 'react'
import { Input } from '../../components/Input/Input';
import { Modal } from '../../components/Modal/Modal';
import { PostCard } from '../../components/PostCard/PostCard';
import { UserContext } from '../../context/UserContext';

export const Posts = () => {

    const { me } = useContext(UserContext)

    const titleRef = useRef()
    const bodyRef = useRef()

    const [createPostModal, setCreatePostModal] = useState(false);

    var currentData = new Date();

    const [posts, setPosts] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:8080/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [posts])

    const handleAddPost = (evt) => {
        evt.preventDefault();

        axios.post('http://localhost:8080/posts', {
            userId: me.id,
            title: titleRef.current.value,
            body: bodyRef.current.value
        }).then(res => {
            if (res.status === 201) {
                setCreatePostModal(false)
            }
        }).catch(err => err)
    }
    return (
        <>
            <div className="container">
                <h2 className='h2 text-center my-3'>Posts page</h2>
                <div className=''>
                    <button onClick={() => setCreatePostModal(true)} className='btn btn-primary'>+ Create post</button>
                    <div>
                        {
                            posts.length ?
                                (<ul className='list-unstyled my-5'>
                                    {
                                        posts.map(item => (
                                            <PostCard key={item.id} item={item} />
                                        ))
                                    }
                                </ul>)
                                :
                                <h1>Loading . . .</h1>
                        }
                    </div>
                </div>
                {
                    createPostModal &&
                    <Modal
                        createPostModal={createPostModal}
                        setCreatePostModal={setCreatePostModal}
                        title="Add"
                    >
                        <form onSubmit={handleAddPost}>
                            <Input ref={titleRef} type='text' placeholder="Title" />
                            <Input ref={bodyRef} type='text' placeholder="Body" />
                            <button className='btn btn-success'>Posts</button>
                        </form>
                    </Modal>
                }
            </div>
        </>
    )
}
