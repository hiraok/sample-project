import React from "react"
import './ImageList.css'

class ImageList extends React.Component {

    render() {
        return (
            <div className="list">
                {this.props.value}
            </div>
        )
    }
}

export default ImageList;