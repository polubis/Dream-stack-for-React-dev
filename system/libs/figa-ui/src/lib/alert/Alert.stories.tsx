import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './alert';
import { ALERT_TYPES } from './consts';

export default {
    title: 'Alert',
    component: Alert,
  } as ComponentMeta<typeof Alert>;

  const Template: ComponentStory<typeof Alert> = ({variant}) => {
    return (
    <>
        {ALERT_TYPES.map(type => (
            <div style={{margin: '8px 0'}}>
                <Alert alertType={type} variant={variant} message={`this is a ${type} alert - check it out !`} />
            </div>
        ))}
    </>
    )
}

const EditableTemplate: ComponentStory<typeof Alert> = ({variant, message, alertType}) => {
    return (
        <Alert alertType={alertType} variant={variant} message={message}/>
    )
}

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Editable = EditableTemplate.bind({});
Editable.args = {
    variant: "outlined",
    message: 'add text',
    alertType: "error"
}

Editable.argTypes = {
    alertType: {
      control: { type: "select", options: ["error", "warning", "info", "success"] },
    },
  };
