import React from "react"

const ContactUs = () => {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            timeTravel: "",
            tour: "",
            timeline: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}
		className='contactUsForm'>
            <div className="form">
				<h1 className="contactHeader">Contact Us</h1>
					<input
						type="text"
						placeholder="first name"
						onChange={handleChange}
						name="firstName"
						value={formData.firstName}
					/>
					<input
						type="text"
						placeholder="last name"
						onChange={handleChange}
						name="lastName"
						value={formData.lastName}
					/>
					<input
						type="email"
						placeholder="email"
						onChange={handleChange}
						name="email"
						value={formData.email}
					/>
					<textarea 
						value={formData.comments}
						placeholder="comments"
						onChange={handleChange}
						name="comments"
						className="comments"
					/>
					<br />

					<fieldset>
						<legend>
							we offer custom tours as well. 
							<br />
							who would you like to make a tour about?</legend>
						<input 
							type="radio"
							id="yourself"
							name="tour"
							value="yourself"
							checked={formData.tour === "yourself"}
							onChange={handleChange}
						/>
						<label htmlFor="yourself">Yourself</label>
						<br />
						
						<input 
							type="radio"
							id="relative/friend"
							name="tour"
							value="relative/friend"
							checked={formData.tour === "relative/friend"}
							onChange={handleChange}
						/>
						<label htmlFor="relative/friend">Relative / Friend</label>
						<br />
						
						<input 
							type="radio"
							id="historicalIndividual"
							name="tour"
							value="historicalIndividual"
							checked={formData.tour === "historicalIndividual"}
							onChange={handleChange}
						/>
						<label htmlFor="historicalIndividual">Historical Individual</label>
						<br />
					</fieldset>
					<br />
					
					<label htmlFor="favColor">When would you like to embark on your Life Tour?</label>
					<br />
					<select 
						id="timeline" 
						value={formData.timeline}
						onChange={handleChange}
						name="timeline"
					>
						<option value="asap">ASAP</option>
						<option value="3-7Months">3 - 7 Months from Now</option>
						<option value="1year">1 Year or more from Now</option>
					</select>
					<br />
				<button className="contactButton">Submit</button>
			</div>
        </form>
    )
}

export default ContactUs;