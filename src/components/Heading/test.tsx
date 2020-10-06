import { screen } from '@testing-library/react';
import { Heading } from '.';
import { customRender } from '../../utils/custom-render';

describe('<Heading />', () => {
  it('should render a heading', () => {
    customRender(<Heading>Oi</Heading>);
    const element = screen.getByRole('heading', { name: /oi/i });
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
