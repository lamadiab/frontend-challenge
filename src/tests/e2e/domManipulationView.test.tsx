/**
 * @jest-environment jsdom
 */
import 'expect-puppeteer';

import { createTheme, ThemeProvider } from '@mui/material';
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DomManipulationView } from '@views/user/DomManipulationView';
import renderer from 'react-test-renderer';

describe('super awesome end to end tests', () => {
  jest.setTimeout(20000);

  //   it('show tooltip on mouse over', async () => {
  //     const theme = createTheme();
  //     const MockDomManipulationView = () => {
  //       return (
  //         <ThemeProvider theme={theme}>
  //           <DomManipulationView />
  //         </ThemeProvider>
  //       );
  //     };

  //     render(<MockDomManipulationView />);

  //     fireEvent.mouseOver(screen.getByTestId('budgetContainer'));

  //     await waitFor(() => screen.getByTestId('tooltipContainer'));
  //     expect(screen.getByTestId('tooltip')).toBeInTheDocument();
  //   });
  it('renders correctly', () => {
    const theme = createTheme();
    const MockDomManipulationView = () => {
      return (
        <ThemeProvider theme={theme}>
          <DomManipulationView />
        </ThemeProvider>
      );
    };
    const tree = renderer.create(<MockDomManipulationView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
