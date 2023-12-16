import React from 'react';
import css from './FriendList.module.css';
import { RiRadioButtonLine } from "react-icons/ri";

const MarckupFriendlist = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends?.map(item => {
                return (
                    <li className={css.item} key={item.id}>
                        <FriendListItem
                            isOnline={item.isOnline}
                            avatar={item.avatar}
                            name={item.name}
                          /> 
                    </li>     
                );
             })}          
        </ul>
  );
};

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
            <>
                <RiRadioButtonLine style={{ color: isOnline === true ? 'green' : 'red'}} />
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
        
            </>
        );
}


export { MarckupFriendlist };