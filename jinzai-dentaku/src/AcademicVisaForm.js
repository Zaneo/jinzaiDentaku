import { useState } from "react";
import ReactDOM from 'react-dom';

function AcademicVisaForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    return (
        <form on onSubmit={calculateVisaPoints}>
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
    )
}

const calculateVisaPoints = (event) => {
    event.preventDefault();
    alert(inputs);

    score = 0;
    if ( input.hasPHD ){
        score += 30;
    } else if ( input.hasBA ) {
        score += 20;
    } else if ( input.hasBA ){
        score += 10;
    } else if ( input.hasAdditionalDegrees){
        score += 5;
    }
    
    alert(score);
  }

ReactDOM.render(<AcademicVisaForm />, document.getElementById('root'));