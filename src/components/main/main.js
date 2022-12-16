import './main.css'


const Main = (props) => {
  return(
    <div className='div-main'>
      <p id='texto' className='text-p' style={{color: 'yellow'}}>{props.texto}</p>
    </div>
  )
  }

  Main.defaultProps ={
    color: 'blue'
  }

  export default Main