export const tabelOfStates = {
  '#': [
    {
      nextState: 'q4',
      symbol: '#',
      direction: '-',
    },
    {
      nextState: 'q4',
      symbol: '#',
      direction: '-'
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    },
  ],
  0: [
    {
      nextState: 'q1',
      symbol: '0',
      direction: 'P',
    },
    {
      nextState: 'q1',
      symbol: '0',
      direction: 'P',
    },
    {
      nextState: 'q1',
      symbol: '0',
      direction: 'P',
    },
    {
      nextState: 'q1',
      symbol: '0',
      direction: 'P',
    },
    {
      nextState: 'SK'
    }
  ],
  1: [
    {
      nextState: 'q0',
      symbol: '1',
      direction: 'P',
    },
    {
      nextState: 'q2',
      symbol: '1',
      direction: 'P',
    },
    {
      nextState: 'q0',
      symbol: '1',
      direction: 'P',
    },
    {
      nextState: 'q3',
      symbol: '0',
      direction: 'L',
    },
    {
      nextState: 'SK',
    }
  ],
  2: [
    {
      nextState: 'q0',
      symbol: '2',
      direction: 'P',
    },
    {
      nextState: 'q0',
      symbol: '2',
      direction: 'P',
    },
    {
      nextState: 'q3',
      symbol: '0',
      direction: 'L',
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    }
  ]
};

export const properties = {
  allowedSymbols: '012',
  numberOfStates: 5
};
