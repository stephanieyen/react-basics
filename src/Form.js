import React, {Component} from 'react'

class Form extends Component {
    // Initial state is an object with empty properties
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        
        // Update the state every time a field is changed
        this.setState({
            [name]: value,
        })
    }

    submitForm = (event) => {
        event.preventDefault()

        // Pass the modified Form state as a new person to the App state,
        // which will update the Table
        this.props.handleSubmit(this.state)
        // Clear the form after submission
        this.setState(this.initialState)
    }

    render() {
        const {name, job} = this.state; 

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />

                <label htmlFor="job">Job</label>
                <input 
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;