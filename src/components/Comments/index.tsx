import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meublog-5"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
