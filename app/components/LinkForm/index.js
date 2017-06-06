/**
*
* LinkForm
*
*/

import React from 'react';

import classNames from 'classnames';
import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.linkForm}>
        <div className={styles.heading}>
          Add a link
        </div>
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          placeholder="Your email"
          ref={(f) => {
            this.emailField = f;
          }}
          type="text"
        />

        {fieldError}

        <div className={styles.actionContainer}>
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
