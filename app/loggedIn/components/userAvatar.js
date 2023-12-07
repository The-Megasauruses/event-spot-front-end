import React from 'react';
// import { useSelector } from 'react-redux';
import { Avatar } from 'react-native-paper';

const UserAvatar = () => {
//   const { firstName, lastName, avatarUrl } = useSelector((state) => state.user);
    let avatarUrl = null;
    let firstName = "John";
    let lastName = "Doe";

  // Display the image if available, otherwise show initials
  const content = avatarUrl ? (
    <Avatar.Image size={50} source={{ uri: avatarUrl }} />
  ) : (
    <Avatar.Text size={50} label={`${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`} />
  );

  return content;
};

export default UserAvatar;
