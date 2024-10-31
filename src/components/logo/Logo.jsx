import Image_logo from "../../assets/logo.png"

const Logo = ({ style }) => {
    return (
        <img style={{width:style, height:style}} src={Image_logo} alt="Logo Bolão do Mineiro" />
    )
}

export default Logo