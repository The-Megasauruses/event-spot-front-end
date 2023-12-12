import React from 'react';
import { Avatar } from 'react-native-paper';
import { getAuth } from 'firebase/auth';

const UserAvatar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const nameArr = user ? user.displayName.split(' ') : null

  let avatarUrl = user ? user.photoURL : null;
  let firstName = nameArr ? nameArr[0] : 'None provided';
  let lastName = nameArr ? nameArr[1] : 'None provided';

  // Display the image if available, otherwise show initials
  const content = avatarUrl ? (
    <Avatar.Image size={50} source={{ uri: avatarUrl }} />
  ) : (
    <Avatar.Text size={50} label={`${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`} />
  );

  return content;
};

export default UserAvatar;
