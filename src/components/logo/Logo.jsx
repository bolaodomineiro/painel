import Image_logo from "../../assets/logo.png"

const Logo = ({$width}) => {
    return (
        <img 
            src={Image_logo} 
            alt="Logo Bolão do Mineiro" 
            style={{width: $width}}
        />
    )
}

export default Logo