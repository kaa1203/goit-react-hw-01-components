import PropTypes from "prop-types";
import css from "./FriendListItem.module.css"

function FriendListItem({ id, avatar, name, isOnline }) {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img src={avatar} alt="User-Avatar" className={css.avatar} />
            <p className={css.name}>{name}</p>
        </li>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}