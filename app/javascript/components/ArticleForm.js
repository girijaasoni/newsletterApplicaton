import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, TextInput, Modal, ModalVariant } from '@patternfly/react-core';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownGroup, DropdownItem } from '@patternfly/react-core';
import PfButton from './pfButton';

const ArticleForm = ({ isOpen, handleModalToggle }) => {
  const [data, setData] = useState({
    title: '',
    body: '',
    creator: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/users')
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      })
      .catch((response) => console.log(response));
  }, [users.length]);
  const [selectedUser, setSelectedUser] = useState('');
  const handleChange = (value, key) => {
    setData({
      ...data,
      [key]: value
    });
  };
  const onToggle = (isDropdownOpen) => {
    setIsDropdownOpen(isDropdownOpen);
  };

  const onSelect = (event) => {
    const value = event.target.innerHTML;
    setSelectedUser(value);
    setIsDropdownOpen(false);
  };
  const dropdownItems = [
    <DropdownGroup key="group 1">
      {users.map((user) => (
        <DropdownItem key="group 1 action" component="button">
          {user.username}
        </DropdownItem>
      ))}
    </DropdownGroup>
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      title: data.title,
      body: data.body,
      creator: selectedUser
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
          <>
            <PfButton variant="primary" buttonText="Confirm" onBtnClick={handleSubmit} />
            <PfButton variant="secondary" buttonText="Cancel" onBtnClick={handleModalToggle} />
          </>
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
            <Dropdown
              onSelect={onSelect}
              toggle={
                <DropdownToggle id="toggle-groups" onToggle={onToggle}>
                  {selectedUser}
                </DropdownToggle>
              }
              isOpen={isDropdownOpen}
              dropdownItems={dropdownItems}
              isGrouped
            />
          </FormGroup>
        </Form>
      </Modal>
    </div>
  );
};

ArticleForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleModalToggle: PropTypes.func.isRequired
};

export default ArticleForm;
