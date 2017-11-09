import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import Lesson from './lesson.js'

class Day extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        // const {description,img,name,tempCelsius} = this.props.city;
        // console.log(this.props.text)


        return (


            <div className="col-xs-2">
                <div className="daysList">
                    <h3>{this.props.day}</h3>
                    <br />
                    <div className="topicsList">
                        {this.props.days.map((day, index) =>
                            <div key={index}>
                                <a className="topic">
                                    {day.Topic}
                                </a>

                            </div>)}
                    </div>
                </div>
            </div>



        )
    }
}

export default Day;