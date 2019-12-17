const { getRandomElementInArray } = require('../getRandomElementInArray')

const operationElements = {
  operators: ['add'],
  operands: {
    preOperator: [
      'all',
      //'some',
      'latestOperationResult',
      'lines',
      'rectangles',
      'circles',
      'triangles'
    ],
    postOperator: ['line', 'rectangle', 'circle', 'triangle']
  },
  resultIsVisible: () => Math.random() > 0.25
}

module.exports.createOperationSequence = operationSequenceLength => {
  let operationSequence = [
    {
      operator: 'initialize',
      resultIsVisible: operationElements.resultIsVisible()
    }
  ]
  for (let i = 0; i < operationSequenceLength; i++) {
    operationSequence.push({
      preOperatorOperand: getRandomElementInArray(
        operationElements.operands.preOperator
      ),
      operator: getRandomElementInArray(operationElements.operators),
      postOperatorOperand: getRandomElementInArray(
        operationElements.operands.postOperator
      ),
      resultIsVisible: operationElements.resultIsVisible()
    })
  }
  return operationSequence
}
