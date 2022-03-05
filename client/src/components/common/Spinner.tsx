import React from 'react'
import '../../styles/scss/Spinner.scss'
interface SpinnerType {
  className: string;
}

const Spinner: React.FC<SpinnerType> = ({ className }: SpinnerType): JSX.Element => {
  return (
    <div className={className}></div>
  )

}

export default Spinner