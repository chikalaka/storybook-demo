import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import Form from './Form'
import './index.css'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

storiesOf('Button', module)
  .add('Normal', () => (
    <Button>Button</Button>
  ))
  .add('Disabled', () => (
    <Button disabled={true}>Button</Button>
  ))
  .add('No text', () => (
    <Button />
  ))
  .addDecorator(withKnobs)
  .add('With Knobs', () => (
    <Button disabled={boolean('Disabled', false)}>
      {text('Label', 'Button')}
    </Button>
  ))

// storiesOf('Form', module)
//   .add('Normal', () => (
//     <Form />
//   ))