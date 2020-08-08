import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { FaPager, FaUser, FaSlackHash, FaHospital, FaBell, FaRegAddressCard, FaPhotoVideo, FaSignature } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import { RiShareForwardBoxLine } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import avi from '../assets/images/avi.jpg'
import caseImg from '../assets/images/caseImg.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="left">
                    <div className="logoCon">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul>
                        <li><Link to="#"><span><FaHospital /></span>Interests</Link></li>
                        <li><Link to="#"><span><FaSlackHash /></span>Cases</Link></li>
                        <li><Link to="#"><span><FaBell /></span>Notifications</Link></li>
                        <li><Link to="#"><span><FaPager /></span>Pagers</Link></li>
                        <li><Link to="#"><span><FaUser /></span>Profile</Link></li>
                    </ul>
                    <button className="btnFill">Post</button>
                </div>
                <div className="mid">

                    <div className="header">
                        <h4>Home</h4>
                    </div>

                    <div className="homePostCon">
                        <div className="avatarCon">
                            <img src={avi} alt="avatar"/>
                        </div>
                        <div className="inputCol">
                            <textarea type="text" placeholder="Share here..."/>
                            <div className="postBtnsCon">
                                <div className="leftBtns">
                                    <span><FaPhotoVideo /></span>
                                    <span><FaRegAddressCard /></span>
                                </div>
                                <button className="btnFill">Share</button>
                            </div>
                        </div>
                    </div>

                    <div className="casesCon">
                        <div className="casesAvatarCon">
                            <img src={avi} alt="avatar"/>
                        </div>
                        <div className="inputCol">
                            <div className="caseAuthor">
                                <span className="author">Dr. Gerald Amanor</span>
                                <div className="dot"></div>
                                <span className="timestamp">20m</span>
                            </div>
                            <p>
                                Qui id dolor do duis labore aliquip qui quis velit. 
                                Lorem et consectetur pariatur nisi occaecat nulla magna do ut pariatur occaecat. 
                                Consequat eu do sit et est qui.
                            </p>
                            <div className="mediaCon">
                                <img src={caseImg} alt="caseMedia"/>
                                <img src={caseImg} alt="caseMedia"/>
                                <img src={caseImg} alt="caseMedia"/>
                                <img src={caseImg} alt="caseMedia"/>
                            </div>
                            <div className="actionBtns">
                                <span><GoComment /></span>
                                <span><RiShareForwardBoxLine /></span>
                                <span><FaSignature /></span>
                            </div>
                        </div>
                    </div>

                    <div className="casesCon">
                        <div className="casesAvatarCon">
                            <img src={avi} alt="avatar"/>
                        </div>
                        <div className="inputCol">
                            <div className="caseAuthor">
                                <span className="author">Dr. Amma Darkoa</span>
                                <div className="dot"></div>
                                <span className="timestamp">20m</span>
                            </div>
                            <p>
                                Qui id dolor do duis labore aliquip qui quis velit. 
                                Lorem et consectetur pariatur nisi occaecat nulla magna do ut pariatur occaecat. 
                                Consequat eu do sit et est qui.
                            </p>
                            <div className="actionBtns">
                                <span><GoComment /></span>
                                <span><RiShareForwardBoxLine /></span>
                                <span><FaSignature /></span>
                            </div>
                        </div>
                    </div>

                </div>
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
