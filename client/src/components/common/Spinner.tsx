import React from 'react'

interface SpinnerType {
  className: string;
}

const Spinner: React.FC<SpinnerType> = ({ className }: SpinnerType): JSX.Element => {
  return (
    <div className={className}></div>
  )

}

export default Spinner