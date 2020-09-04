import React, { Component } from 'react'
import { FaCommentMedical } from 'react-icons/fa'
import ShareCaseModal from './ShareCaseModal'

export default class ZeroCases extends Component {
    render() {
        return (
            <div className="zeroCases">
                <FaCommentMedical />
                <strong>(0) Cases Found!</strong>
                <p>You are either not following any interests nor posted any cases yet.</p>
                <ShareCaseModal size="sm" />
            </div>
        )
    }
}
