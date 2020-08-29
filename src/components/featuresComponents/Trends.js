import React, { Component } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'

export default class Trends extends Component {
    render() {
        return (
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
        )
    }
}
