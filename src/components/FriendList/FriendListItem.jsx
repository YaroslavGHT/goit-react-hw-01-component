import { RiRadioButtonLine } from "react-icons/ri";
import React from 'react';


const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
            <>
                <RiRadioButtonLine style={{ color: isOnline === true ? 'green' : 'red'}} />
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
        
            </>
        );
}

export { FriendListItem };