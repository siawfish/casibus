import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { IoMdAddCircleOutline, IoIosAdd, IoMdRemoveCircleOutline } from 'react-icons/io'

export default class PatientHistoryCard extends Component {

    constructor(){
        super()
        this.state= {
            gender:null,
            history:[],
            question:"",
            answer:"",
            answerArr:[],
            responseCount:1,
            callOnAddHistory:false
        }
    }

    addHistory = () => {
        this.setState({
            history:[...this.state.history, {
                q:this.state.question,
                a:this.state.answerArr
            }],
            question:"",
            answer:"",
            answerArr:[],
            responseCount:1,
            callOnAddHistory:true
        })
        let qinput = ReactDOM.findDOMNode(this).querySelectorAll(".addHistoryCard")
        qinput[0].firstChild.value=""
    }

    callOnAddHistory = () => {
        if(this.state.callOnAddHistory){
            this.props.onAddHistory({
                history:this.state.history,
                gender:this.state.gender
            })
            this.setState({
                callOnAddHistory:false
            })
        }
    }


    addResponse = (e) => {
        this.setState(prevState=>{
            return {
                answerArr:[...this.state.answerArr, {
                        id:this.state.responseCount, 
                        res:this.state.answer
                    }
                ],
                answer:"",
                responseCount:prevState.responseCount+1
            }
        })
        e.target.previousElementSibling.value = ""
    }

    removeResponse = (i) => {
        this.setState({
            answerArr:this.state.answerArr.filter(val=>i!==val.id)
        })
    }

    qInput = (e) => {
        let q = e.target.value
        this.setState({
            question:q
        })
    }

    aInput = (e) => {
        let a = e.target.value
        this.setState({
            answer: a
        })
    }

    onCheck = (e) => {
        var genders = ReactDOM.findDOMNode(this).querySelectorAll("input[type='checkbox']")
        genders.forEach(element => {
            element.checked=false
        })
        var gender  = e.target.previousElementSibling.value
        this.setState({
            gender:gender
        })
        e.target.previousElementSibling.checked=true
    }

    render() {
        let disabled = false
        if(this.state.question ==="" || this.state.answerArr.length < 1 || this.state.gender == null){
            disabled = true
        }
        let disableAddResponse = false
        if(this.state.answer==="" || this.state.question===""){
            disableAddResponse= true
        }
        this.callOnAddHistory()
        return (
            <div className="patientHistoryCon">
                <div className="patientHistory">
                    <label>Patient Gender</label>
                    <div className="genderRow">
                        <div className="gender">
                            <label>Male</label>
                            <input value="Male" type="checkbox" />
                            <button onClick={this.onCheck} className="checkmark"></button>
                        </div>
                        <div className="gender">
                            <label>Female</label>
                            <input value="Female" type="checkbox" />
                            <button onClick={this.onCheck} className="checkmark"></button>
                        </div>
                    </div>
                    <label>Populate Medical History</label>
                    <div className="addHistorycardCon">
                        <div className="addHistoryCard">
                            <input onChange={this.qInput} className="borderBottom" placeholder="eg: Currently taking any medication?" />
                            {
                                this.state.answerArr.map(res=>
                                    <div className="removeIcon">
                                        <button onClick={()=>this.removeResponse(res.id)}><IoMdRemoveCircleOutline /></button>
                                        <input value={res.res} placeholder="eg: No" />
                                    </div>
                                )
                            }
                            <input onChange={this.aInput} placeholder="eg: No" />
                            <button disabled={disableAddResponse} onClick={this.addResponse} className="addRes"><IoMdAddCircleOutline /> Add more responses</button>
                        </div>
                        <button onClick={this.addHistory} className="addhis" disabled={disabled}><IoIosAdd /></button>
                    </div>
                    {
                        this.state.history.map(history=>
                            <div className="displayHistoryCon">
                                {console.log(history)}
                                <div className="displayHistory">
                                    <span>Q: {history.q}?</span>
                                    {
                                        history.a.map(a=>
                                            <span className="answer">A: {a.res}</span>
                                        )
                                    }
                                </div>
                                <button><IoMdRemoveCircleOutline /></button>
                            </div>
                        )
                    }
                </div>
                <button onClick={this.props.onRemove} className="remove">Remove</button>
            </div>
        )
    }
}
