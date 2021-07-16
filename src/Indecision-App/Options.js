import React from 'react';
import Option from "./Option";



// const fetchDairies = async (port,resource) => {
//     const accessPoint = `http://localhost:${port}/${resource}`;
//     const response = await fetch(accessPoint);
//     const data = await response.json();
//     return data;
// }


class Options extends React.Component{

    render() {
       // const [dairies,setDairies] = useState(null);
        return(
            <div>
            <button onClick={()=>this.props.handleRemoveAll()}>Remove All Dairies</button>
            <ol>
                {this.props.options.map(dairy=><li>
                    <Option
                        content={dairy}
                        Key={dairy}
                        handleRemoveItem = {this.props.handleRemoveItem}
                    />
                </li>)}
            </ol>
                {!this.props.options.length && <ol>This list is empty! Enter the first item to start.</ol>}
            </div>
        )
    }
}

export default Options;