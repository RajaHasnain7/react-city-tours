import React, { Component } from 'react';
import "./Tour.scss";

export default class tour extends Component {
    state ={
        showInfo:false
    };

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    render() {
        const {id,city,img,name,info}= this.props.tour;
        const {removeTour}= this.props;
        return (
            <article className="tour">
<div className="img-container">
<img src={img} alt="tour logo here"></img>
<span className="close-btn" onClick={()=>removeTour(id)}>
    <i className="fas fa-window-close"/>
</span>
</div>

<div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>info <span onClick={this.handleInfo}><i class="fas fa-caret-down"></i></span></h5>
        {this.state.showInfo && <p>{info}</p>}
</div>


            </article>
        )
    }
}
