// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component{
    state={isHappy:false}

    onClickHappy=()=>{
        this.setState({isHappy:true})
    }

    getFeedbackScreen=()=>{
        const {resources}=this.props
        const {emojis}=resources
        return(
        <div className="feedback-container">
        <h1 className="heading">How satisfied are you with our customer support performance</h1>
        <ul className="emojis">
        {emojis.map((eachEmoji)=>(
        <li key={eachEmoji.id}>
        <div>
        <button className="emoji-button" type="button" onClick={this.onClickHappy}>
        <img src={eachEmoji.imageUrl} alt={eachEmoji.name} className="emoji-img"/>
        <p className="emoji-name">{eachEmoji.name}</p>
        </button>
        </div>
        </li>
        ))}
        </ul>
        </div>
    )   
    }

    getThankYouScreen=()=>{
        const {resources}=this.props
        const {loveEmojiUrl}=resources
        return(
            <div className="thankyou-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji"/>
            <h1 className="thankyou-heading">Thank You!</h1>
            <p className="desc">We will use your feedback and improve our customer support performance.</p>
            </div>
        )
    }

    render(){
        const {isHappy}=this.state
        return(
            <div className="bg-container">
            {isHappy ? this.getThankYouScreen() : this.getFeedbackScreen()}
            </div>
        )
    }
}
export default Feedback