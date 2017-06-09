/**
 *
 * LinkForm
 *
 */

import React from 'react';

import TextInput from '../TextInput';
import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    addLinkCancelled: React.PropTypes.func.isRequired,
  };

  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;

    if (!url.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)) {
      urlError = 'Please provide a valid URL';
    }

    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>
          <TextInput
            placeHolder="URL"
            className={styles.input}
            errorText={this.state.urlError}
            ref={(f) => (this.url = f)}
          />

          <TextInput
            placeHolder="Description"
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={(f) => (this.description = f)}
          />
          <div className={styles.actionContainer}>
            <div
              className={styles.button}
              onClick={this.props.addLinkCancelled}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
