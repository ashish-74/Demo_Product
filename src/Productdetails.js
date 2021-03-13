import React,{Component} from 'react';
 
class Productdetails extends Component{
    onSubmit = () => {
        this.props.history.push('/product')
    }    
    render(){
        return(
            <div align='center'>
                <div style={{padding:'10px',position:'absolute',left:'500px'}}>
                    <section style={{'padding':'30px','border':'2px solid','backgroundColor':'pink','width':'400px','height':'400px'}}>
                         <h2 style={{'color':'green'}}>Product Details Are Below</h2>  
                            <div>
                            <h3>
                            <b>Name</b>: {this.props.match.params.name}<br></br>         
                            <b>Price</b>: {this.props.match.params.price}<br></br>
                            </h3>         
                            <b>Description</b>: {this.props.match.params.desc}<br></br><br></br>                            
                            </div>
                        <button onClick={this.onSubmit}><b>Back</b></button>
                    </section>       
                 </div>            
            </div>
        )
    }
}
export default Productdetails;