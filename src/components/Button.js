const Button = ({color, text, onClick, showAdd}) => {
  return (
    <button style={{backgroundColor: color}} className ='btn' onClick={onClick} showAdd={showAdd}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'black',
    text: 'Add'
}

export default Button