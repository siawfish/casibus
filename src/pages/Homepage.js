import React, { Component } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import avi from '../assets/images/avi.jpg'

import Sidepane from '../components/hpComponents/Sidepane'
import Midpane from '../components/hpComponents/Midpane'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Sidepane />
                
                <Midpane />
                <div className="right">

                    <div className="searchCon">
                        <input placeholder="&#128269; Search Casibus" type="text" />
                    </div>

                    <div className="rightCardsCon">

                        <div className="header">
                            <h5>Trending discussions</h5>
                            <AiOutlineSetting />
                        </div>

                        <div className="trendsCard">
                            <div className="trendIntroCon">
                                <div className="trendIntro">
                                    <small>1</small>
                                    <div className="dot"></div>
                                    <small>Discussion</small>
                                </div>
                                <FiChevronDown />
                            </div>
                            <p>#COVID19</p>
                            <small>1,980 cases</small>
                        </div>

                        <div className="trendsCard">
                            <div className="trendIntroCon">
                                <div className="trendIntro">
                                    <small>2</small>
                                    <div className="dot"></div>
                                    <small>Discussion</small>
                                </div>
                                <FiChevronDown />
                            </div>
                            <p>#PPE</p>
                            <small>1,980 cases</small>
                        </div>

                        <div className="trendsCard">
                            <div className="trendIntroCon">
                                <div className="trendIntro">
                                    <small>3</small>
                                    <div className="dot"></div>
                                    <small>Discussion</small>
                                </div>
                                <FiChevronDown />
                            </div>
                            <p>#WHO</p>
                            <small>1,980 cases</small>
                        </div>

                        <div className="trendsCard">
                            <div className="trendIntroCon">
                                <div className="trendIntro">
                                    <small>4</small>
                                    <div className="dot"></div>
                                    <small>Discussion</small>
                                </div>
                                <FiChevronDown />
                            </div>
                            <p>#PantangHospital</p>
                            <small>1,980 cases</small>
                        </div>

                        <div className="trendsCard">
                            <div className="trendIntroCon">
                                <div className="trendIntro">
                                    <small>5</small>
                                    <div className="dot"></div>
                                    <small>Discussion</small>
                                </div>
                                <FiChevronDown />
                            </div>
                            <p>#Nurses</p>
                            <small>1,980 cases</small>
                        </div>
                        <div className="trendsShowMore">
                            Show more
                        </div>
                    </div>

                    <div style={{marginTop:20}} className="rightCardsCon">
                            <div className="header">
                                <h5>Follow suggestions</h5>
                            </div>
                        <div className="suggestCard">
                            <div className="suggestInfoCon">
                                <img src={avi} alt="suggestImg"/>
                                <div className="suggestInfo">
                                    <p>Dr. Riane Amanor</p>
                                    <small>Dentist</small>
                                </div>
                            </div>
                            <button className="btnBorder">Follow</button>
                        </div>
                        <div className="suggestCard">
                            <div className="suggestInfoCon">
                                <img src={avi} alt="suggestImg"/>
                                <div className="suggestInfo">
                                    <p>Dr. Jerome Siaw</p>
                                    <small>Doctor</small>
                                </div>
                            </div>
                            <button className="btnBorder">Follow</button>
                        </div>
                        <div className="suggestCard">
                            <div className="suggestInfoCon">
                                <img src={avi} alt="suggestImg"/>
                                <div className="suggestInfo">
                                    <p>Dr. Kuuku Richard</p>
                                    <small>Pharmacist</small>
                                </div>
                            </div>
                            <button className="btnBorder">Follow</button>
                        </div>
                        <div className="trendsShowMore">
                            Show more
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
