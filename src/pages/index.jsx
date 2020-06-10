import * as React from 'react';
import Location from '../components/home-page/Location';
import Search from '../components/home-page/Search';
import Categories from '../components/home-page/Categories';
import EscortContent from '../components/home-page/EscortContent';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/actions';
import { userInfo } from 'os';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentWillMount() {
		this.props.getCategories();
	}

	componentDidMount = () => {
		this.setState({ categories: this.props.categories }); 
	}

	render() {
		return (
			<div>
				<Location />
				<Search />
				<Categories categories={this.state.categories} />
				<EscortContent />
			</div>
		);
	}
}


const mapStateToProps = state => {
	return {
		...state,
		categories: state.user.categories
	};
};

const mapDispatchToPops = {
	getCategories
}

export default connect(mapStateToProps, mapDispatchToPops)(Home);
