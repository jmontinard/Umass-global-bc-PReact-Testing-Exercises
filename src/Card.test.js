import { render } from "@testing-library/react";
import Card from './Card';

// Smoke Test
test('renders Card component without crashing', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});

// Snapshot Test
test('Card component snapshot', () => {
  const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});


// Additional Test
test('renders Card component with correct content', () => {
  const { getByText, getByAltText } = render(
    <Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />
  );

  // ... other assertions ...

  // Check if the image is rendered with the correct alt text
  const imageElement = getByAltText('Test Caption');
  expect(imageElement).toBeInTheDocument();

  // Check if the image source contains the expected filename
  expect(imageElement.src).toContain('test.jpg');

  // ... other assertions ...
});

