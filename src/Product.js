import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import mobile from './mobile.jpeg';
import fridge from './fridge.jpg';
import tv from './tv.jpg';
import tablet from './tablet.jpg';
import laptop from './laptop.jpg';

class Product extends Component{

    products = [
        {
          
            name:'Mobile',
            price:36000,
            desc:'Mi A3 features 4GB RAM and 64GB ROM in mobile along with Corning Gorilla glass 5 screen which supports HD+ display.',
            image:<img style={{height:'150px',width:'150px'}} src={mobile}></img>
        },
        {
            
            name:'Laptop',
            price:56000,
            desc:'Hp Laptop has 8GB RAM and 1024GB ROM in its latest laptops series which has inbuilt Nvidia graphics card to support all high performance games.',
            image:<img style={{height:'150px',width:'150px'}} src={laptop}></img>
        },
        {
            
            name:'Tablet',
            price:10000,
            desc:'Samsung features 4GB RAM and 64GB ROM in tablet which also has corning gorilla glass 4.',
            image:<img style={{height:'150px',width:'150px'}} src={tablet}></img>
        },
        {
            
            name:'TV',
            price:14000,
            desc:'Mi TV features new HD contents and tv channels which has Ultra HD+ display LED screen.',
            image:<img style={{height:'150px',width:'150px'}} src={tv}></img>
        },
        {
            
            name:'Fridge',
            price:18500,
            desc:'LG fridge features new kind of technology for cooling the interiors.',
            image:<img style={{height:'150px',width:'150px'}} src={fridge}></img>
        },
    ]

    render(){
        let newArr=this.products.map((p)=>
            <tr>
                <td>{p.image}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td><Link to={`/Product/${p.name}/${p.price}/${p.desc}`}>Details</Link></td>
            </tr>
        )
        return(
            <div style={{textAlign:'center',position:'absolute',left:'500px',padding:'10px'}}>
                <table border='3px' cellPadding='10'>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>See More Details</th>
                    </tr>
                    {newArr}                    
                </table>                
            </div>
        )
    }
}

export default Product;

