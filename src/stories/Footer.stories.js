// Footer.stories.js
import React from 'react';

import { Footer } from './Footer';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Footer',
  component: Footer,
};

export const FooterLeft = () => <Footer align='textLeft'>Copyright - Arun</Footer>;
export const FooterCenter = () => <Footer align='textCenter'>Copyright - Arun</Footer>;
export const FooterRight = () => <Footer align='textRight'>Copyright - Arun</Footer>;