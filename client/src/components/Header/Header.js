import React from 'react';
import s from './header.module.scss';
import SignInButton from './SignInButton/SignInButton';

import UserProfile from './UserProfile/UserProfile';
import PropTypes from 'prop-types';

const Header = ({
  isSignedIn,
  toggleModal,
  username,
  imageUrl,
  signOutWithGoogle,
}) => {
  const buttonClass = isSignedIn ? s.hidden : s.visible;

  return (
    <header className={s.header}>
      {isSignedIn ? (
        <UserProfile
          username={username}
          imageUrl={imageUrl}
          signOutWithGoogle={signOutWithGoogle}
        />
      ) : !isSignedIn && isSignedIn !== null ? (
        <SignInButton
          toggleModal={toggleModal}
          buttonClass={buttonClass}
        />
      ) : null}
    </header>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func,
  isSignedIn: PropTypes.bool,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  signOutWithGoogle: PropTypes.func.isRequired,
};

export default Header;
