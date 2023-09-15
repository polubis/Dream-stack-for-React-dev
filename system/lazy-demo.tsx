import dynamic from 'next/dynamic';

// Allows to lazy load the component.
// Splits the component to separate chunk with
// unique hash - [312dasdasdas31231dsad].js
// and loads it on client.
const ComponentWithUseLayoutEffect = dynamic(
  () => import('../components/ComponentWithUseLayoutEffect')
);

const ImRenderedOnSSR = () => {
  // Don't worry, I'm not rendered on the server.
  return <ComponentWithUseLayoutEffect />;
};
