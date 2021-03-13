import { Component } from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <div style={{textAlign:'center',width:'100%',backgroundColor:'seagreen'}}>
                <Link to="/product">Product Catalogue  |</Link>
                <Link to="/contact">Contact US </Link>   
            </div>
        )
    }
}

export default NavBar;

