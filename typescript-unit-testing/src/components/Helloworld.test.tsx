import { render, screen } from '@testing-library/react'
import Helloworld from './Helloworld'

describe('testing my first react component', () => {

    test("testing helloworld component", () => {
        render(<Helloworld text={"Lucky"} />);
        expect(screen.getByText("Hello Lucky")).toBeInTheDocument();
    })

})