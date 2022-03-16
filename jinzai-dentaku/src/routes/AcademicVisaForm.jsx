import React from "react";
import { render } from "react-dom";

class AcademicVisaForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasPHD: false,
            hasMA: false,
            hasBA: false,
            hasAdditionalDegrees: false,
            score: 0
        };

        this.handleChanged = this.handleChanged.bind(this);
        this.calculateVisaPoints = this.calculateVisaPoints.bind(this);
    }

    handleChanged(event){
        this.setState({
            [event.target.name]: event.target.checked
        }, this.calculateVisaPoints);
    }

    calculateVisaPoints() {
        let currentScore = 0;
        if ( this.state.hasPHD ){
            currentScore += 30;
        } else if ( this.state.hasMA ) {
            currentScore += 20;
        } else if ( this.state.hasBA ){
            currentScore += 10;
        }
        if ( this.state.hasAdditionalDegrees){
            currentScore += 5;
        }
        console.log(this.state);

        this.setState({
            score: currentScore
        });
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <label>Academic Background:
                            <ul>
                                <li>
                                    <label>Doctors Degree: 
                                    <input type="checkbox"
                                    name="hasPHD"
                                    checked={this.state.hasPHD}
                                    onChange={this.handleChanged}
                                    />
                                    </label>
                                </li>
                                <li>
                                    <label>Masters Degree: </label>
                                    <input type="checkbox"
                                    name="hasMA"
                                    checked={this.state.hasMA}
                                    onChange={this.handleChanged}
                                    />
                                </li>
                                <li>
                                    <label>Bachelors Degree:
                                    <input type="checkbox"
                                    name="hasBA"
                                    checked={this.state.hasBA}
                                    onChange={this.handleChanged}
                                    />
                                    </label>
                                </li>
                                <li>
                                    <label>Additional Degrees:
                                    <input type="checkbox"
                                    name="hasAdditionalDegrees"
                                    checked={this.state.hasAdditionalDegrees}
                                    onChange={this.handleChanged}
                                    />
                                    </label>
                                </li>
                            </ul>
                        </label>
                    </form>
                </div>
                <div>
                    <h2>{this.state.score}</h2>
                </div>
            </div>
        )
    }
}

export default AcademicVisaForm;