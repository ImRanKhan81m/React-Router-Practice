import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] =useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[friendId])
    return (
        <div>
            <h2>This is detail of a bondhu : {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>User Name: {friend.username}</h4>
            <h4>Email: {friend.email}</h4>
            <h4>Website: {friend.website}</h4>
            <h4>Phone No: {friend.phone}</h4>
            <h4>City: {friend.address?.city}</h4>
            <h4>Company: {friend.company?.name}</h4>

        </div>
    );
};

export default FriendDetail;