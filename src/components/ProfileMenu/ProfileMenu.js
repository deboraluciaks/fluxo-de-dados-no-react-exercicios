import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={props.profile.icon} alt="Profile Image" />
      <ProfileName>{props.profile.name}</ProfileName>
      <ProfileBio>{props.profile.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
