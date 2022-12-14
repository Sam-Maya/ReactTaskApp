import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}


export default Header