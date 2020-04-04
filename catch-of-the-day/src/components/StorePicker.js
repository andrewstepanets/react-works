import React from "react";
import { getFunName} from "../helpers";

class StorePicker extends React.Component {
    render() {
        return (
            // return back just one element
            // if you want to return two adjacent elements
            // you can use React.Fragment
            // <Fragment>
            // <p>Fish!</p>
            //     <form className="store-selector">
            //         <h2>Please Enter A Store</h2>
            //     </form>
            // </Fragment>
            
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit store</button>
            </form>
        );
    }
}

export default StorePicker;