type RandomNumberType = {
    value: number
}
type PositiveProps = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeProps = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroProps = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}
type RandomNumberProps = PositiveProps | NegativeProps | ZeroProps


export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    let valueType;
    if (value < 0) {
        valueType = 'negative';
    } else if (value > 0) {
        valueType = 'positive';
    } else {
        valueType = 'zero';
    }
  return (
    <div>
        <h1>Random Number</h1>
        <div>Value is {value}</div>
        <div>{isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}</div>
        <div>{valueType}</div>
    </div>
  )
}