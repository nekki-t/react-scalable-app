/**
 *
 * IconButton
 *
 */

import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import styles from './styles.css';

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <div
      className={classNames(styles.iconButton, buttonClass)}
      onClick={onClick}
    >
      <FontAwesome
        className={iconClass}
        name={icon}
      />
    </div>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
