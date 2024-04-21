import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem"

function FriendList({friends}) {
    return (
        <ul style=
            {{
                display:"flex",
                flexDirection:"column",
                gap:10,
                minWidth:350,
            }}>
        
            {
                friends.map(({ id, avatar, name, isOnline })=> 
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            }
        </ul>
    );
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array
}