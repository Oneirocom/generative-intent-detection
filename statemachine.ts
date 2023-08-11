const axios = require('axios');
const { Machine, assign } = require('xstate');

// Define the possible actions as an enum
const ActionType = {
  FETCH_DATA: 'fetchData',
  SET_INTENT: 'setIntent',
  GENERATE_MESSAGE: 'generateMessage',
};

// Define the possible intents as an enum
const Intent = {
  Funding: 'Funding',
  Acquisition: 'Acquisition',
  Hiring: 'Hiring',
  ProductLaunch: 'ProductLaunch',
  Partnership: 'Partnership',
  Innovation: 'Innovation',
  Expansion: 'Expansion',
  MarketEntry: 'MarketEntry',
  Collaboration: 'Collaboration',
  Research: 'Research',
  CSR: 'CSR',
  IPO: 'IPO',
  Merger: 'Merger',
  Rebranding: 'Rebranding',
  DigitalTransformation: 'DigitalTransformation',
  Sustainability: 'Sustainability',
  Restructuring: 'Restructuring',
  Bankruptcy: 'Bankruptcy',
  Liquidation: 'Liquidation',
  JointVenture: 'JointVenture',
  Franchising: 'Franchising',
  Outsourcing: 'Outsourcing',
  Insourcing: 'Insourcing',
  Offshoring: 'Offshoring',
  Reshoring: 'Reshoring',
  SpinOff: 'SpinOff',
  Diversification: 'Diversification',
};

// Define the shape of our context for API calls
const ApiContext = {
  data: null,
  intent: null,
};

// Define the shape of our events
const ReportEvent = [
  { type: 'PROCESS_INTENT', intent: Intent },
  { type: 'FETCH', organizationUuid: '', historicalPeriod: '' },
];

// Define the state machine for API calls
const apiMachine = Machine(
  {
    id: 'apiMachine',
    initial: 'loaded',
    context: ApiContext,
    states: {
      loaded: {
        on: {
          PROCESS_INTENT: {
            target: 'processingIntent',
            actions: [ActionType.SET_INTENT],
          },
        },
      },
      processingIntent: {
        on: {
          RETRY: {
            target: 'loading',
            actions: [ActionType.FETCH_DATA],
          },
        },
        after: {
          5000: { target: 'processed', actions: [ActionType.GENERATE_MESSAGE] },
        },
      },
      loading: {
        // Define what should happen in the loading state here
      },
      processed: {},
    },
  },
  {
    actions: {
      [ActionType.FETCH_DATA]: assign(async (context, event) => {
        if (event.type === 'FETCH') {
          const response = await axios.get(
            `https://api.crunchbase.com/v4/entities/organizations/${event.organizationUuid}`
          );
          return { ...context, data: response.data };
        }
        return context;
      }),
      [ActionType.SET_INTENT]: assign((context, event) => {
        if (event.type === 'PROCESS_INTENT') {
          return { ...context, intent: event.intent };
        }
        return context;
      }),
      [ActionType.GENERATE_MESSAGE]: assign((context, event) => {
        let message = '';
        switch (context.intent) {
          case Intent.Funding:
            message = 'Looking for funding.';
            break;
          case Intent.Acquisition:
            message = 'Planning to acquire smaller startups in the industry.';
            break;
          case Intent.Hiring:
            message = 'Expanding the engineering team.';
            break;
          case Intent.ProductLaunch:
            message = 'Preparing for a new product launch.';
            break;
          case Intent.Partnership:
            message = 'Seeking strategic partnerships with firms.';
            break;
          case Intent.Innovation:
            message = 'Developing a new technology for sustainable energy.';
            break;
          case Intent.Expansion:
            message = 'Plans to expand services to more cities globally.';
            break;
          case Intent.MarketEntry:
            message = 'Plans to enter the Asian market.';
            break;
          case Intent.Collaboration:
            message = 'Open to collaborations on projects.';
            break;
          case Intent.Research:
            message = 'Investing heavily in research.';
            break;
          case Intent.CSR:
            message = 'Launching a new CSR initiative.';
            break;
          case Intent.IPO:
            message = 'Considering an IPO.';
            break;
          case Intent.Merger:
            message = 'Merging with another company.';
            break;
          case Intent.Rebranding:
            message = 'Undergoing a rebranding process.';
            break;
          case Intent.DigitalTransformation:
            message = 'Embarking on a digital transformation journey.';
            break;
          case Intent.Sustainability:
            message = 'Implementing sustainability measures.';
            break;
          case Intent.Restructuring:
            message = 'Restructuring operations.';
            break;
          case Intent.Bankruptcy:
            message = 'Has filed for bankruptcy.';
            break;
          case Intent.Liquidation:
            message = 'Liquidating assets.';
            break;
          case Intent.JointVenture:
            message = 'Entering a joint venture with another company.';
            break;
          case Intent.Franchising:
            message = 'Offering franchising opportunities.';
            break;
          case Intent.Outsourcing:
            message = 'Outsourcing customer service.';
            break;
          case Intent.Insourcing:
            message = 'Insourcing IT department.';
            break;
          case Intent.Offshoring:
            message = 'Offshoring manufacturing.';
            break;
          case Intent.Reshoring:
            message = 'Reshoring production.';
            break;
          case Intent.SpinOff:
            message = 'Spinning off a new business unit.';
            break;
          case Intent.Diversification:
            message = 'Diversifying product portfolio.';
            break;
          default:
            message = 'No specific intent detected.';
        }
        return { ...context, message };
      }),
    },
  }
);

let currentApiState = apiMachine.initialState;

function send(event) {
  currentApiState = apiMachine.transition(currentApiState, event);
}

send({
  type: 'FETCH',
  organizationUuid: 'some-uuid',
  historicalPeriod: 'yearly',
});

send({ type: 'PROCESS_INTENT', intent: Intent.Acquisition });
