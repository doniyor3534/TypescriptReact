import React from "react"

type textOwnProps<E extends React.ElementType>={
    size?:'sm' | 'md' | 'lg'
    color?:'secondary' | 'primary'
    children:React.ReactNode
    as?: E
}

type textProps<E extends React.ElementType> = textOwnProps<E> & Omit<React.ComponentProps<E>,keyof textOwnProps<E>>

export const Textpolimoghic = <E extends React.ElementType = 'div' > ({size,color,children,as}:textProps<E>) => {
    const Component = as || 'div'
  return (
    <Component  className={`width-${size} text-${color}`} >{children}</Component>
  )
}
