import {ReactComponent as MoblyLogo} from './logo.svg';
import {BsFillCartFill} from 'react-icons/bs'

const headerStyle = {
  paddingTop: "10px"
}
const logoStyle = {
  height: "40px",
}
const textInputStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  paddingLeft: "10px",
  height: "35px",
  position: "absolute",
  right: "150px",
}
const cartStyle = {
  position: "absolute",
  top: "15px",
  right: "100px",
  fontSize: "25px",
}

function Header () {
    return (
      <div className="Header" style={headerStyle}>

        <MoblyLogo style={logoStyle}/>
        <input type="text" placeholder="Seach..." style={textInputStyle}/>
        <BsFillCartFill style={cartStyle}/>
 
      </div>
    );
  }

export default Header;