console.log('Contentscript injected');

var styles = `
    .divStyle {
        display: flex;
        background-color: darkblue;
        color: white;
        width: fit-content;
        float: right;
        padding: 10px;
        border-radius: 5px;
        margin-right: 50px;
    }

    .tooltipContainer {
        text-align: center;
        margin-right: 50px;
    }

    .tooltip {
        display: none;
        color: white;
        background-color: darkblue;
        border-radius: 5px;
        padding: 10px;
    }
`;

var styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const section = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section',
);

const budgetLabel = section.querySelector('div:nth-child(3) > p:nth-child(2)').textContent;
const budgetValue = section.querySelector('div:nth-child(3) > p:nth-child(3)').textContent;

let element = document.createElement('div');
element.className = 'divStyle';

const injectedText = document.createTextNode(`${budgetLabel}: ${budgetValue}`);

const logoWrapper = document.createElement('div');
logoWrapper.style.padding = '2px 7px 0';

const logo = document.createElement('IMG');
logo.setAttribute('src', '/images/eco.mio_icon_white.png');
logo.style.width = '20px';

const tooltipContainer = document.createElement('div');
tooltipContainer.className = 'tooltipContainer';
tooltipContainer.setAttribute('data-testid', 'tooltipContainer');

const tooltip = document.createElement('p');
tooltip.className = 'tooltip';
tooltip.textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
tooltip.setAttribute('data-testid', 'tooltip');

element.setAttribute('data-testid', 'budgetContainer');
element.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
});

element.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

logoWrapper.appendChild(logo);
element.appendChild(logoWrapper);
element.appendChild(injectedText);
tooltipContainer.appendChild(tooltip);

section.insertBefore(element, section.children[0]);
section.insertBefore(tooltipContainer, section.children[2]);
