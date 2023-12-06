import type { Story, Meta } from '@storybook/react';
import type { LayoutProps } from './defs';

import { Layout } from './layout';
import { Logo } from '../logo';
import { Font } from '../font';
import { Nav } from '../nav';
import { TopNavItem } from '../top-nav-item';
import { PlusCircleIcon } from '../icon';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

const Header = () => (
  <Nav
    logo={<Logo />}
    actions={
      <>
        <TopNavItem active>
          Create <PlusCircleIcon />
        </TopNavItem>
        <TopNavItem active>
          Create <PlusCircleIcon />
        </TopNavItem>
      </>
    }
  >
    <a href="/">
      <TopNavItem active>
        Create <PlusCircleIcon />
      </TopNavItem>
    </a>
    <a href="/">
      <TopNavItem active>
        Create <PlusCircleIcon />
      </TopNavItem>
    </a>
    <a href="/">
      <TopNavItem active>
        Create <PlusCircleIcon />
      </TopNavItem>
    </a>
    <a href="/">
      <TopNavItem active>
        Create <PlusCircleIcon />
      </TopNavItem>
    </a>
  </Nav>
);

const BigText = (
  <Font variant="h6">
    . Why do we use it? It is a long established fact that a reader will be
    distracted by the readable content of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a more-or-less normal distribution
    of letters, as opposed to using 'Content here, content here', making it look
    like readable English. Many desktop publishing packages and web page editors
    now use Lorem Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy. Various versions
    have evolved over the years, sometimes by accident, sometimes on purpose
    (injected humour and the like). Where does it come from? Contrary to popular
    belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
    looked up one of the more obscure Latin words, consectetur, from a Lorem
    Ipsum passage, and going through the cites of the word in classical
    literature, discovered the undoubtable source. Lorem Ipsum comes from
    sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
    Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
    treatise on the theory of ethics, very popular during the Renaissance. The
    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
    in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
    is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
    "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
    original form, accompanied by English versions from the 1914 translation by
    H. Rackham. Where can I get some? There are many variations of passages of
    Lorem Ipsum available, but the majority have suffered alteration in some
    form, by injected humour, or randomised words which don't look even slightly
    believable. If you are going to use a passage of Lorem Ipsum, you need to be
    sure there isn't anything embarrassing hidden in the middle of text. All the
    Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
    necessary, making this the first true generator on the Internet. It uses a
    dictionary of over 200 Latin words, combined with a handful of model
    sentence structures, to generate Lorem Ipsum which looks reasonable. The
    generated Lorem Ipsum is therefore always free from repetition, injected
    humour, or non-characteristic words etc. 5 paragraphs words bytes lists
    Start with 'Lorem ipsum dolor sit amet...' . Why do we use it? It is a long
    established fact that a reader will be distracted by the readable content of
    a page when looking at its layout. The point of using Lorem Ipsum is that it
    has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many
    desktop publishing packages and web page editors now use Lorem Ipsum as
    their default model text, and a search for 'lorem ipsum' will uncover many
    web sites still in their infancy. Various versions have evolved over the
    years, sometimes by accident, sometimes on purpose (injected humour and the
    like). Where does it come from? Contrary to popular belief, Lorem Ipsum is
    not simply random text. It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old. Richard McClintock, a
    Latin professor at Hampden-Sydney College in Virginia, looked up one of the
    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
    through the cites of the word in classical literature, discovered the
    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
    written in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
    dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
    of Lorem Ipsum used since the 1500s is reproduced below for those
    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
    Malorum" by Cicero are also reproduced in their exact original form,
    accompanied by English versions from the 1914 translation by H. Rackham.
    Where can I get some? There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in some form, by
    injected humour, or randomised words which don't look even slightly
    believable. If you are going to use a passage of Lorem Ipsum, you need to be
    sure there isn't anything embarrassing hidden in the middle of text. All the
    Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
    necessary, making this the first true generator on the Internet. It uses a
    dictionary of over 200 Latin words, combined with a handful of model
    sentence structures, to generate Lorem Ipsum which looks reasonable. The
    generated Lorem Ipsum is therefore always free from repetition, injected
    humour, or non-characteristic words etc. 5 paragraphs words bytes lists
    Start with 'Lorem ipsum dolor sit amet...' . Why do we use it? It is a long
    established fact that a reader will be distracted by the readable content of
    a page when looking at its layout. The point of using Lorem Ipsum is that it
    has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many
    desktop publishing packages and web page editors now use Lorem Ipsum as
    their default model text, and a search for 'lorem ipsum' will uncover many
    web sites still in their infancy. Various versions have evolved over the
    years, sometimes by accident, sometimes on purpose (injected humour and the
    like). Where does it come from? Contrary to popular belief, Lorem Ipsum is
    not simply random text. It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old. Richard McClintock, a
    Latin professor at Hampden-Sydney College in Virginia, looked up one of the
    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
    through the cites of the word in classical literature, discovered the
    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
    written in 45 BC. This book is a treatise on the theory of ethics, very
    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
    dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
    of Lorem Ipsum used since the 1500s is reproduced below for those
    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
    Malorum" by Cicero are also reproduced in their exact original form,
    accompanied by English versions from the 1914 translation by H. Rackham.
    Where can I get some? There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in some form, by
    injected humour, or randomised words which don't look even slightly
    believable. If you are going to use a passage of Lorem Ipsum, you need to be
    sure there isn't anything embarrassing hidden in the middle of text. All the
    Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
    necessary, making this the first true generator on the Internet. It uses a
    dictionary of over 200 Latin words, combined with a handful of model
    sentence structures, to generate Lorem Ipsum which looks reasonable. The
    generated Lorem Ipsum is therefore always free from repetition, injected
    humour, or non-characteristic words etc. 5 paragraphs words bytes lists
    Start with 'Lorem ipsum dolor sit amet...'
  </Font>
);

const Template: Story<LayoutProps> = (props) => <Layout {...props} />;

export const Default = Template.bind({});
Default.args = {
  topNav: <Header />,
  children: (
    <div>
      <Font variant="h6">Custom header</Font>
    </div>
  ),
  footer: <div>Footer</div>,
};

export const ALotOfContent = Template.bind({});
ALotOfContent.args = {
  topNav: <Header />,
  children: <div>{BigText}</div>,
  footer: <div>Footer</div>,
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  topNav: <Header />,
  children: <div>{BigText}</div>,
};

export const WhenPageIsFull = Template.bind({});
WhenPageIsFull.args = {
  topNav: <Header />,
  children: <div style={{ background: 'red' }}>Text</div>,
};

export const WhenPageIsFullWithFooter = Template.bind({});
WhenPageIsFullWithFooter.args = {
  topNav: <Header />,
  children: <div style={{ background: 'red' }}>Text</div>,
  footer: <div>Footer</div>,
};

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
  topNav: <Header />,
  children: <div style={{ background: 'red' }}>Text</div>,
  footer: <div>Footer</div>,
  offPadding: true,
};

export const AsidedWithoutPadding = Template.bind({});
AsidedWithoutPadding.args = {
  topNav: <Header />,
  children: (
    <div>
      <Font variant="h2">The content</Font>
    </div>
  ),
  footer: <div>Footer</div>,
  sidebar: (toggler) => (
    <aside onClick={toggler.toggle}>
      <Font variant="h5">The sidebar</Font>
    </aside>
  ),
  offPadding: true,
};

export const Asided = Template.bind({});
Asided.args = {
  topNav: <Header />,
  children: (
    <div>
      <Font variant="h2">The content</Font>
    </div>
  ),
  footer: <div>Footer</div>,
  sidebar: (toggler) => (
    <aside onClick={toggler.toggle}>
      <Font variant="h5">The sidebar</Font>
    </aside>
  ),
};
