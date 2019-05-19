export const tableOfStates = {
  '#': [{
    nextState: 'q7',
    symbol: '#',
    direction: 'P'
  }, {
    nextState: 'q2',
    symbol: '#',
    direction: 'L'
  },
    {
      nextState: 'q7',
      symbol: '#',
      direction: '-'
    },
    {
      nextState: 'q0',
      symbol: '#',
      direction: 'P'
    },
    {
      nextState: 'q5',
      symbol: '#',
      direction: 'L'
    },
    {
      nextState: 'q7',
      symbol: '#',
      direction: '-'
    },
    {
      nextState: 'SK'
    },
    {
      nextState: 'SK'
    }
  ],
  a: [
    {
      nextState: 'q1',
      direction: 'P',
      symbol: '#',
    },
    {
      nextState: 'q1',
      direction: 'P',
      symbol: 'a',
    },
    {
      nextState: 'q3',
      direction: 'L',
      symbol: '#',
    },
    {
      nextState: 'q3',
      direction: 'L',
      symbol: 'a',
    },
    {
      nextState: 'q4',
      direction: 'a',
      symbol: 'P',
    },
    {
      nextState: 'q6',
      direction: 'a',
      symbol: '-',
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK'
    }
  ],
  b: [
    {
      nextState: 'q4',
      direction: 'P',
      symbol: '#',
    },
    {
      nextState: 'q1',
      direction: 'P',
      symbol: 'b',
    },
    {
      nextState: 'q6',
      symbol: 'b',
      direction: '-',
    },
    {
      nextState: 'q3',
      symbol: 'b',
      direction: 'L',
    },
    {
      nextState: 'q4',
      symbol: 'b',
      direction: 'P',
    },
    {
      nextState: 'q3',
      symbol: '#',
      direction: 'L',
    },
    {
      nextState: 'SK',
    },
    {
      nextState: 'SK',
    },
  ]
};

export const properites = {
  allowedSymbols: 'ab',
  numberOfStates: 8
};


