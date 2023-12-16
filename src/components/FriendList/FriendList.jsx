import React from 'react';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem.jsx';

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



export { MarckupFriendlist };