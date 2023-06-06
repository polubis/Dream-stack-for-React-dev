import { BlackquoteProps } from './defs';

const Blackquote = ({ title }: BlackquoteProps) => {
  return (
    <blockquote className="blackquote">
      <em>{title}</em>
    </blockquote>
  );
};

export { Blackquote };
