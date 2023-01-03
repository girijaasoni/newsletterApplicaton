import React from 'react';
import { Form, FormGroup, TextInput, TextArea, ActionGroup, Button } from '@patternfly/react-core';

const FullArticle = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTitleChange = (title) => {
    setTitle(title);
  };
  const handleDescriptionChange = (description) => {
    setDescription(description);
  };
  return (
    <>
      <Form isWidthLimited>
        <FormGroup
          label="Article title"
          isRequired
          fieldId="horizontal-form-name"
          helperText="Include the title of the article.">
          <TextInput
            value={title}
            isRequired
            type="text"
            id="horizontal-form-name"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={handleTitleChange}
          />
        </FormGroup>
        <FormGroup label="Article description" fieldId="horizontal-form-exp">
          <TextArea
            value={description}
            onChange={handleDescriptionChange}
            id="horizontal-form-exp"
            name="horizontal-form-exp"
          />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
      </Form>
    </>
  );
};
export default FullArticle;
