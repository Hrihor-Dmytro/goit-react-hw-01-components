import { ImgList, BoxList, Status } from './Friends.module';
import PropTypes from 'prop-types';
export const Friendens = ({ avatar, name, isOnline }) => {
  return (
    <BoxList>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <ImgList src={avatar} alt="User avatar" />
      <p> {name} </p>
    </BoxList>
  );
};
Friendens.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
