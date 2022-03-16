import { useState } from "react";
import ReactDOM from 'react-dom';



export default function AcademicVisaForm() {

    const [inputs, setInputs] = useState({});
    const [score, setScore] = useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        
        setScore(calculateVisaPoints(inputs));
      };

    return (
        <div>
            <div>
                <form>
                    <label>Academic Background:
                        <input type="checkbox"
                        value={inputs.hasPHD || false}
                        name="hasPHD"
                        onChange={handleChange}
                        />
                        <input type="checkbox"
                        value={inputs.hasMA || false}
                        name="hasMA"
                        onChange={handleChange}
                        />
                        <input type="checkbox"
                        value={inputs.hasBA || false}
                        name="hasBA"
                        onChange={handleChange}
                        />
                        <input type="checkbox"
                        value={inputs.hasAdditionalDegrees || false}
                        name="hasAdditionalDegrees"
                        onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
            <div>
                <h2>{score}</h2>
            </div>
        </div>
        
    )
}

const calculateVisaPoints = (inputs) => {
    alert(inputs);

    let score = 0;
    if ( inputs.hasPHD ){
        score += 30;
    } else if ( inputs.hasBA ) {
        score += 20;
    } else if ( inputs.hasBA ){
        score += 10;
    } else if ( inputs.hasAdditionalDegrees){
        score += 5;
    }
    
    alert(score);

    return score;
  }