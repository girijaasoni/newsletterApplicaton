import axios from 'axios';
import React, { useState } from 'react';
import { Form, FormGroup, TextInput, Modal, ModalVariant, Button } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const ArticleForm = ({ isOpen, handleModalToggle }) => {
  const [data, setData] = useState({
    title: '',
    body: '',
    creator: ''
  });

  const handleChange = (value, key) => {
    setData({
      ...data,
      [key]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      title: data.title,
      body: data.body,
      creator: data.creator
    };
    axios
      .post('/articles', userData)
      .then((response) => {
        console.log('response.data: ' + JSON.stringify(response.data));
        alert('Article created successfully.');
      })
      .catch((error) => {
        if (error.response) {
          console.log('error: ' + error);
          console.log('server responded');
        } else if (error.request) {
          console.log('network error');
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <Modal
        variant={ModalVariant.small}
        title="Create article"
        description="Enter the details below to post an article."
        isOpen={isOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="create" variant="primary" form="modal-with-form-form" onClick={handleSubmit}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}>
        <Form id="modal-with-form-form">
          <FormGroup label="Title" isRequired fieldId="modal-with-form-form-title">
            <TextInput
              isRequired
              id="modal-with-form-form-title"
              type="text"
              value={data.title}
              onChange={(value) => handleChange(value, 'title')}
            />
          </FormGroup>
          <FormGroup label="Body" isRequired>
            <TextInput
              isRequired
              id="modal-with-form-form-body"
              type="text"
              value={data.body}
              onChange={(value) => handleChange(value, 'body')}
            />
          </FormGroup>
          <FormGroup label="Creator" isRequired>
            <TextInput
              isRequired
              id="modal-with-form-form-creator"
              type="text"
              value={data.creator}
              onChange={(value) => handleChange(value, 'creator')}
            />
          </FormGroup>
        </Form>
      </Modal>
    </div>
  );
};

ArticleForm.propTypes = {
  isOpen: PropTypes.string.isRequired,
  handleModalToggle: PropTypes.string.isRequired
};

export default ArticleForm;
