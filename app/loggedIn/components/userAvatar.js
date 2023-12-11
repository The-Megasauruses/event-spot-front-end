import React from 'react';
import { Avatar } from 'react-native-paper';
import { getAuth } from 'firebase/auth';

const UserAvatar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const nameArr = user.displayName.split(' ')

  let avatarUrl = user.photoURL;
  let firstName = nameArr[0];
  let lastName = nameArr[1];

  // Display the image if available, otherwise show initials
  const content = avatarUrl ? (
    <Avatar.Image size={50} source={{ uri: avatarUrl }} />
  ) : (
    <Avatar.Text size={50} label={`${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`} />
  );

  return content;
};

export default UserAvatar;
