import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

it('should have Docs text', () => {
	render(<Home />); //ARRANGE

	const myElem = screen.getAllByText('Docs'); //ACT

	expect(myElem).toBeInTheDocument(); //ASSERT
});
