type valueprops={
   value : number | string
}

type pozitive = valueprops &{
    isPositive:boolean 
    isNegative?:never 
    isZero?:never
}
type negative = valueprops &{
    isNegative:boolean 
    isPositive?:never 
    isZero?:never
}
type zero = valueprops &{
    isZero:boolean
    isPositive?:never 
    isNegative?:never 
}






type RandomPropsType= pozitive | negative | zero


export default function RandomNumber({value,isPositive,isNegative,isZero}:RandomPropsType) {
  return (
    <div>
        {value}  {isPositive && 'positive'} {isNegative && 'negative'}{''} {isZero && 'zero'}
    </div>
  )
}
