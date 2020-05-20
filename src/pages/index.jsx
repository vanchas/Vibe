import * as React from 'react';
import Location from '../components/home-page/Location';
import Search from '../components/home-page/Search';
import Categories from '../components/home-page/Categories';
import EscortContent from '../components/home-page/EscortContent';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// static async getInitialProps({ store }: { store: any }) {
	// 	return {};
	// }

	render() {
		return (
			<div>
				<Location />
				<Search />
				<Categories />
				<EscortContent />
			</div>
		);
	}
}


export default Home;
