// Card.stories.js
import React from 'react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
}

const Template = (args) => <Card {...args}/>;

export const XlCard = Template.bind({});
XlCard.args = {
  layout: 'card',
  variant: 'cardXl',
  label: 'XL Card'
};

export const MdCard = Template.bind({});
MdCard.args = {
  layout: 'card',
  variant: 'cardMd',
  label: 'Medium Card'
};

// export const XlCard = () => <Card color="card" size="cardXl">XL card</Card>;
// export const MdCard = () => <Card color="card" size="cardMd">Medium Card</Card>;
