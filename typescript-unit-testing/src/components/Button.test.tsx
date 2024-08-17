import { render } from '@testing-library/react'
import Button from './Button'

test('renders correctly and matches the snapshot', () => {
   const { asFragment } = render(<Button label='MyButton' />);

   expect(asFragment()).toMatchSnapshot('Button with "Click me" label');
})