import React from 'react';
import css from './FriendList.module.css';
import { RiRadioButtonLine } from "react-icons/ri";

const MarckupFriendlist = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends?.map(item => {
                return (
                    <li className={css.item} key={item.id}>
                        <RiRadioButtonLine style={{ color: item.isOnline === true ? 'green' : 'red'}} />
                        <span className={css.status}>{item.isOnline && ''}</span>
                        <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{item.name}</p>
                    </li>     
                );
             })}          
        </ul>
  );
};

export { MarckupFriendlist };