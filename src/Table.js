import React, { Component } from 'react';
import './Table.css';

// class Table extends Component {

//     render() {
//         const tableContent = this.props;
//         console.log(tableContent)


//             return (
                
//                 <div className="main-container">
//                 {
//                     Object.keys(tableContent).map((post) => (
    
//                    <div className="subject">xxxxx</div> 
//                 )
//                 )}
    
//                 </div>
                


     
                
//             );

//     }


// }

const data = [
    {
    name :1,
    subject:'science'
    },
    {name:2,
    subject:'maths'
}
    ];


export const Table = (props) =>(
   

                    <div className="main-container">
                {
                    
                    data.map((post) => (
    
                   <div className="subject">{post.subject}</div> 
                )
                )}
    
                </div>

)

export const TableHeader = (props) =>(
    
                        <div className="main-container">
                    {
                        Object.keys(props).map((post) => (
        
                       <div className="subject">ppppppp</div> 
                    )
                    )}
        
                    </div>
    
    )

// export default Table;