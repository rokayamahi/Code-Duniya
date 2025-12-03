

const Button = ({title, className, onClick}: {title: string, className?: string, onClick?: () => void;}) => {
  return (
    <button className={className} onClick={onClick} >{title}</button>
  )
}

export default Button