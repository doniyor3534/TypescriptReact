type HorizontalProps= 'left'  | 'right'
type VertikalProps= 'top' | 'center' | 'bottom'

type positionProps = {
    position: Exclude<`${HorizontalProps}-${VertikalProps}`,'center-center'> | 'center'
}


export default function Toast({position}:positionProps) {
  return (
    <div>Toast notification Position - {position}</div>
  )
}
