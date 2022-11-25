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

  /**
   * I was trying to test the mouse over functionality. After some trials,
   * I realized the script gets omitted from the tree during the test.
   */
  it('renders correctly', () => {
    /** I kept getting an error "palette of theme is undefined.
    wrapping the component in theme provider seems (themes :p) to be a functional workaround.*/

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
