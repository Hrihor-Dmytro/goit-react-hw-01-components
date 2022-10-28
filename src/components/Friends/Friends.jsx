import { ImgList, BoxList, Status } from './Friends.module';

export const Friendens = ({ avatar, name, isOnline }) => {
  return (
    <BoxList>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <ImgList src={avatar} alt="User avatar" />
      <p> {name} </p>
    </BoxList>
  );
};
