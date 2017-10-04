import React, { Component } from 'react';

class Logo extends Component {
	render() {
		return (
			<a href="inemaa.eu">
				<img data-interchange={"[logo_small.png, small], [logo_medium.png, medium], [logo_large.png, large]"} />
			</a>
		);
	}
}

export default Logo;