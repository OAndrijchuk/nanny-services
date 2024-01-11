import { useSelector } from 'react-redux';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import {
  AvatarContainer,
  NameStyle,
  UserInfoContainer,
} from './UserInfo.styled';

const UserInfo = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  return (
    <UserInfoContainer>
      <AvatarContainer>
        <SpriteSVG name="avatar" />
      </AvatarContainer>
      <NameStyle>{userEmail}</NameStyle>
    </UserInfoContainer>
  );
};

export default UserInfo;
