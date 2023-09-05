import type { Story, Meta } from '@storybook/react';

import { CreatorLayout } from './creator-layout';
import { Box } from '../box';
import { Code } from '../code';
import { Font } from '../font';
import { Button } from '../button';
import { CloseIcon, CodeIcon, PageIcon } from '../icon';

export default {
  component: CreatorLayout,
  title: 'CreatorLayout',
} as Meta;

const Template: Story = () => {
  return (
    <CreatorLayout
      navigation={() => (
        <Box orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Button shape="rounded" size={1}>
            <CloseIcon />
          </Button>
        </Box>
      )}
      codeToolbox={({ expandPreview, expandBoth }) => (
        <>
          <Button shape="rounded" size={1} onClick={expandPreview}>
            <CodeIcon />
          </Button>
          <Button shape="rounded" size={1} onClick={expandBoth}>
            <PageIcon />
          </Button>
        </>
      )}
      previewToolbox={({ expandCode, expandBoth }) => (
        <>
          <Button shape="rounded" size={1} onClick={expandCode}>
            <CodeIcon />
          </Button>
          <Button shape="rounded" size={1} onClick={expandBoth}>
            <PageIcon />
          </Button>
        </>
      )}
    >
      <Code>
        {`"use strict"
// Abstraction with additional methods.
class List {
  items = [];
 
  constructor(length) {
    this.create(length);
  }
 
  create(length) {
    this.items = Array.from({ length }, (_, i) => i);
  }
   
  remove(idx) {
    this.items = this.items.filter((_, i) => i !== idx);
  }
}
 
// A specific list of users..
class UsersList {
  list = new List(10);
 
  handleRemove(idx) {
    // Removing a list item
    this.list.remove(idx); 
  }
}
 
const usersList = new UsersList();
usersList.handleRemove(9);
// Returns 9 elements.
console.log(usersList.list.items);"use strict"
// Abstraction with additional methods.
class List {
  items = [];
 
  constructor(length) {
    this.create(length);
  }
 
  create(length) {
    this.items = Array.from({ length }, (_, i) => i);
  }
   
  remove(idx) {
    this.items = this.items.filter((_, i) => i !== idx);
  }
}
 
// A specific list of users..
class UsersList {
  list = new List(10);
 
  handleRemove(idx) {
    // Removing a list item
    this.list.remove(idx); 
  }
}
 
const usersList = new UsersList();
usersList.handleRemove(9);
// Returns 9 elements.
console.log(usersList.list.items);"use strict"
// Abstraction with additional methods.
class List {
  items = [];
 
  constructor(length) {
    this.create(length);
  }
 
  create(length) {
    this.items = Array.from({ length }, (_, i) => i);
  }
   
  remove(idx) {
    this.items = this.items.filter((_, i) => i !== idx);
  }
}
 
// A specific list of users..
class UsersList {
  list = new List(10);
 
  handleRemove(idx) {
    // Removing a list item
    this.list.remove(idx); 
  }
}
 
const usersList = new UsersList();
usersList.handleRemove(9);
// Returns 9 elements.
console.log(usersList.list.items);`}
      </Code>
      <div>
        <Font variant="h5">Layout goes here</Font>
      </div>
    </CreatorLayout>
  );
};

export const Default = Template.bind({});
Default.args = {};
