import React from 'react';
import { Link, PrimaryLink, SecondaryLink, SuccessLink } from '../Buttons';

export default {
  title: 'Components 1.0|Buttons/Link Button',
};

export const defaultStory = () => <Link href="default">Default Link</Link>;

defaultStory.story = {
  name: 'default',
};

export const primary = () => <PrimaryLink>Primary Link</PrimaryLink>;
export const secondary = () => <SecondaryLink>Secondary Link</SecondaryLink>;
export const success = () => <SuccessLink>Success Link</SuccessLink>;
