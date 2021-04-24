// Libraries
import React from 'react';

// Render
export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="copyright">
					<img src="logo.png" />
					<p style={{fontWeight: 'bold'}}>&copy; Personify 2021</p>
				</div>
				<div className="contact">
					<p style={{fontSize: '1.2rem'}}><strong>Contact Information</strong></p>
					<p><strong>Website: </strong><a href="https://personifyinc.com/">personifyinc.com</a></p>
					<p><strong>Address:</strong> Waseco Building, 10 Pho Quang street, Tan Bình District, Ho Chi Minh City, Vietnam</p>
					<p><strong>Phone Number:</strong> 028 3811 5966</p>
				</div>
			</footer>
		)
	}
}

export default Footer;