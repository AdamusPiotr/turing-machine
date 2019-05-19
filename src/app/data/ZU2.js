export const tableOfStates = {
  '#': [
    {
      nextState: 'SK',
    },
    {
      nextState: 'q2',
      symbol: '#',
      direction: 'L'
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    }
  ],
  0: [
    {
      nextState: 'q3',
      symbol: '0',
      direction: '-'
    },
    {
      nextState: 'q1',
      symbol: '1',
      direction: 'P'
    },
    {
      nextState: 'q3',
      symbol: '1',
      direction: '-'
    },
    {
      nextState: 'SK'
    }
  ],
  1: [
    {
      nextState: 'q1',
      symbol: '1',
      direction: 'P'
    },
    {
      nextState: 'q1',
      symbol: '0',
      direction: 'P'
    },
    {
      nextState: 'q2',
      symbol: '0',
      direction: 'L'
    },
    {
      nextState: 'SK'
    }
  ],
  '.': [
    {
      nextState: 'SK',
    },
    {
      nextState: 'q1',
      symbol: '.',
      direction: 'P'
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    },
  ],
  ',': [
    {
      nextState: 'SK'
    },
    {
      nextState: 'q1',
      symbol: ',',
      direction: 'P',
    },
    {
      nextState: 'q2',
      symbol: ',',
      direction: 'L',
    },
    {
      nextState: 'SK'
    },
  ]
};

export const properties = {
  allowedSymbols: '01.,',
  numberOfStates: 4
};
