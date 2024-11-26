const Alert = ({children}) => {
  return <div className="modal show">
  <div className="dialog-content">
    <div className="Overlay"/>
    <div className="Alert">
      {children}
    </div>
    </div>
  </div>
}

export default Alert;