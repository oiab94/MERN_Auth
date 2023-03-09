import { Button, Form } from "react-bootstrap";

const Signup = () => {
	// ! Handle Submit
	const handleSubmit = (e) => {
		const {email, password} = e.target.elements;
		
		e.preventDefault();
		console.log(email, password);
	}

	return (
		<>
			<h1>Signup</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password" />
				</Form.Group>

				<Button type="submit" >Signup</Button>
			</Form>
		</>
	);
}
export default Signup;