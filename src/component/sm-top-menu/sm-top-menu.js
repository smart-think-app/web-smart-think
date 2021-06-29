import './sm-top-menu.css'
function SmTopMenu(){

    const title = "Smart Think"
    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-padding w3-card sm-top-header">
                <a href="#home" className="w3-bar-item w3-button sm-menu-header">{title}</a>
                <div className="w3-right w3-hide-small">
                    <a href="#about" className="w3-bar-item w3-button sm-menu-header">About</a>
                    <a href="#menu" className="w3-bar-item w3-button sm-menu-header">Menu</a>
                    <a href="#contact" className="w3-bar-item w3-button sm-menu-header">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default SmTopMenu;