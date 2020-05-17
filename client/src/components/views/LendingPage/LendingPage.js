import React, { useEffect } from 'react'
import axios from 'axios';

function LendingPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
            .then(res => console.log(res.data))
    }, [])
    const onLogOutHandler = (e) => {
        axios.get('/api/users/logout')
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                    props.history.push('/login')
                }else{
                    alert("로그아웃 실패")
                }
            })
    }
    return (
        <div>
            landing page...
            <button onClick={onLogOutHandler}>로그아웃</button>
        </div>
    )
}

export default LendingPage
