type Buttonprops={
    variant:'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>   // children faqat string boladi (omit)


export default function CustomButton({variant,children,...rest}: Buttonprops) {
  return (
    <button  className={`btn-${variant}`} {...rest}>{children}</button>
  )
}
