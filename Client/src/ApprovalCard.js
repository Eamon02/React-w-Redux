import React from 'react'
// import { connect } from 'react-redux'
// import CommentDetail from './CommentDetail'

export const ApprovalCard = (props) => {
    // console.log(props.children)
    return (
        <div className='ui card'>
        <div className="contnet">{props.children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
            </div>
        </div>
        </div>
    )
}


export default ApprovalCard
