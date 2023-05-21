import { render } from '@testing-library/react';

import {
  PlatformLink,
  AdriansLink,
  PlatformLinkedInLink,
  DreamStackRepoLink,
  PlatformRepoLink,
  PlatformBoardLink,
} from '../links';

describe('User is able to use common links when', () => {
  it('[FRAGILE] links contains urls and attributes', () => {
    const links = [
      () => (
        <PlatformLink motive="primary" variant="h6">
          Platform
        </PlatformLink>
      ),
      () => (
        <AdriansLink motive="primary" variant="b1">
          Adrian Połubiński
        </AdriansLink>
      ),
      () => (
        <PlatformLinkedInLink motive="primary" variant="b1">
          GreenOn Software Linkedin
        </PlatformLinkedInLink>
      ),
      () => (
        <DreamStackRepoLink motive="primary" variant="b1">
          Dream stack repo link
        </DreamStackRepoLink>
      ),
      () => (
        <PlatformRepoLink motive="primary" variant="b1">
          Platform repo link
        </PlatformRepoLink>
      ),
      () => (
        <PlatformBoardLink motive="primary" variant="b1">
          Platform board link
        </PlatformBoardLink>
      ),
    ];

    links.forEach((Link) => {
      const { asFragment } = render(<Link />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
