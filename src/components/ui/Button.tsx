

const Button = ({title, className}: {title: string, className?: string}) => {
  return (
    <button className={className}>{title}</button>
  )
}

export default Button