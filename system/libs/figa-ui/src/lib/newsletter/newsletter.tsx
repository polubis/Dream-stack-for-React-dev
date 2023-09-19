import { Modal } from '../modal';
import { Image } from '../image';
import { Box } from '../box';
import { Font } from '../font';
import { Button } from '../button';
import { Input } from '../input';
import { Link } from '../link';

import { NewsletterProps } from './defs';
import { useState } from 'react';
import { doc } from 'prettier';
import cursor = doc.builders.cursor;

const Newsletter = ({
  title,
  src,
  description,
  onClose,

  ...props
}: NewsletterProps) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {open && (
        <Modal {...props} padding={[0, 0, 0, 0]} onClose={() => setOpen(false)}>
          <Box orientation="row" spacing={[200]}>
            <Image
              maxWidth="300px"
              maxHeight="400px"
              alt="My image"
              src={src}
            />

            <Box
              center={true}
              padding={[0, 0, 0, 0]}
              spacing={[200, 500, 200, 600]}
              minWidth="450px"
            >
              <Font variant="h3">{title}</Font>
              <Font variant="b2">{description}</Font>
              <Input
                placeholder="Your email"
                minWidth="350px"
                type={'email'}
              ></Input>
              <Button>Subscribe</Button>
              <Link
                variant="b3"
                motive="default"
                onClick={() => setOpen(false)}
                style={{ cursor: 'pointer' }}
              >
                No thanks, I don`t like gifts
              </Link>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};
export default Newsletter;
