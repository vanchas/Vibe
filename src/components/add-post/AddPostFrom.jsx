import React, { Component } from "react";
import s from "./add-post.module.scss";
import Alert from "../test/Alert";
import { showAlert } from "../../redux/actions/actions";
import { addProviderPost } from '../../redux/actions/providerActions';
// import Router from 'next/router'

export default class AddPostFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			model_name: "",
			second_name: "",
			account_name: "",
			gender: "",
			age: "",
			email: "",
			number: "",
			ethnicity: "",
			hair_color: "",
			eye_color: "",
			heigth: "",
			video_link: "",
			affiliation: "",
			available_to: "",
			availability: "",
			summary: "",
			about: "",
			photo: "",
			status: "other",
			category: 'escort'
		};
	}

	static getInitialProps = async ({ ctx }) => {
		return { showAlert }
	}

	submitHandler = e => {
		e.preventDefault();
		// Router.push('/api/provider/post');
		// (this.state.gender.length && +this.state.age >= 18 && this.state.ethnicity.length && this.state.hair_color.length && this.state.eye_color.length && this.state.height.toString().length && this.state.affiliation.length && this.state.number.toString().length > 9 && this.state.number.toString().length < 12 && this.state.email.length && this.state.model_name.length && this.state.video_link.length && this.state.about.length && this.state.available_to.length && this.state.availability.length && this.state.summary.length && this.state.second_name.length && this.state.account_name.length && this.state.category.length) ?
		addProviderPost({
			gender: 'female',
			age: 25,
			ethnicity: 'some',
			hair_color: 'some',
			eye_color: 'some',
			height: 'some',
			affiliation: 'some',
			number: '+0123456789',
			email: 'some@mail.com',
			model_name: 'some',
			video_link: 'some',
			about: 'some',
			available_to: ['some', 'some'],
			availability: ['some', 'some'],
			summary: 'some',
			second_name: 'some',
			account_name: 'some',
			category: 'some',
			status: 'other'
		})
		// : this.props.showAlert('ALERT');
	}

	render() {
		return (
			<div className={`${s.add_post_wrap}`}>
				<div className={s.add_post_block}>
					<div className={s.add_post_block_title}>ADDING POST</div>
					<div className={s.add_post_block_info}>

						{this.props.alert && <Alert text={this.props.alert} />}

						<form onSubmit={this.submitHandler} className={s.add_post_block_info_text}>
							<label className="form-group">
								First Name:
								<input onChange={e => this.setState({ model_name: e.target.value })}
									type="text"
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Second Name:
								<input onChange={e => this.setState({ second_name: e.target.value })}
									type="text"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Account Name:
								<input onChange={e => this.setState({ account_name: e.target.value })}
									type="text"
									className="form-control bg-light "
								/>
							</label>
							<div className="d-lg-flex d-md-block">
								<legend>Gender:</legend>
								<label className="form-check">
									Male
									<input onChange={e => this.setState({ gender: e.target.value })}
										type="radio"
										value="male"
										name="gender"
										className="form-check-input bg-light"
									/>
								</label>
								<label className="form-check">
									Female
									<input onChange={e => this.setState({ gender: e.target.value })}
										type="radio"
										value="female"
										className="form-check-input bg-light"
										name="gender"
									/>
								</label>
							</div>
							<label className="form-group">
								Age:
								<input onChange={e => this.setState({ age: e.target.value })}
									type="number"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Email:
								<input onChange={e => this.setState({ email: e.target.value })}
									type="email"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Phone:
								<input onChange={e => this.setState({ number: e.target.value })}
									type="text"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Ethnicity:
								<select className="form-control dropdown" onChange={e => this.setState({ ethnicity: e.target.value })}>
									<option hidden value="default">
										-- select one --
									</option>
									<optgroup label="White">
										<option value="White English">English</option>
										<option value="White Welsh">Welsh</option>
										<option value="White Scottish">Scottish</option>
										<option value="White Northern Irish">Northern Irish</option>
										<option value="White Irish">Irish</option>
										<option value="White Gypsy or Irish Traveller">
											Gypsy or Irish Traveller
										</option>
										<option value="White Other">
											Any other White background
										</option>
									</optgroup>
									<optgroup label="Mixed or Multiple ethnic groups">
										<option value="Mixed White and Black Caribbean">
											White and Black Caribbean
										</option>
										<option value="Mixed White and Black African">
											White and Black African
										</option>
										<option value="Mixed White Other">
											Any other Mixed or Multiple background
										</option>
									</optgroup>
									<optgroup label="Asian">
										<option value="Asian Indian">Indian</option>
										<option value="Asian Pakistani">Pakistani</option>
										<option value="Asian Bangladeshi">Bangladeshi</option>
										<option value="Asian Chinese">Chinese</option>
										<option value="Asian Other">
											Any other Asian background
										</option>
									</optgroup>
									<optgroup label="Black">
										<option value="Black African">African</option>
										<option value="Black African American">
											African American
										</option>
										<option value="Black Caribbean">Caribbean</option>
										<option value="Black Other">
											Any other Black background
										</option>
									</optgroup>
									<optgroup label="Other ethnic groups">
										<option value="Arab">Arab</option>
										<option value="Hispanic">Hispanic</option>
										<option value="Latino">Latino</option>
										<option value="Native American">Native American</option>
										<option value="Pacific Islander">Pacific Islander</option>
										<option value="Other">Any other ethnic group</option>
									</optgroup>
								</select>
							</label>
							<label className="form-group">
								Hair Color:
								<select className="form-control dropdown" onChange={e => this.setState({ hair_color: e.target.value })}>
									<option value="brown">Brown</option>
									<option value="blonde">Blonde</option>
									<option value="black">Black</option>
									<option value="auburn">Auburn</option>
									<option value="color">Color</option>
								</select>
							</label>
							<label className="form-group">
								Eye Color:
								<select className="form-control dropdown" onChange={e => this.setState({ eye_color: e.target.value })}>
									<option value="brown">Brown</option>
									<option value="grey">Grey</option>
									<option value="green">Green</option>
									<option value="blue">Blue</option>
								</select>
							</label>
							<label className="form-group">
								Height:
								<input onChange={e => this.setState({ height: e.target.value })}
									type="nubmer"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Affiliation:
								<select className="form-control dropdown" onChange={e => this.setState({ affiliation: e.target.value })}>
									<option value="independent">Independent</option>
									<option value="agencies">Agencies</option>
								</select>
							</label>
							<div className="d-lg-flex d-md-block">
								<legend> Available To:</legend>
								<label className="form-check">
									Men
									<input type="checkbox" onChange={e => this.setState({ available_to: e.target.value })} className="form-check-input" />
								</label>
								<label className="form-check">
									Wemen
									<input type="checkbox" onChange={e => this.setState({ available_to: e.target.value })} className="form-check-input" />
								</label>
								<label className="form-check">
									Couples
									<input type="checkbox" onChange={e => this.setState({ available_to: e.target.value })} className="form-check-input" />
								</label>
							</div>
							<label className="form-group">
								Availability:
								<select className="form-control dropdown" onChange={e => this.setState({ availability: e.target.value })}>
									<option value="incall">Incall</option>
									<option value="outcall">Outcall</option>
								</select>
							</label>
							<label className="form-group">
								Short Summary:
								<textarea onChange={e => this.setState({ summary: e.target.value })}
									rows="5"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								About:
								<textarea onChange={e => this.setState({ about: e.target.value })}
									rows="10"
									className="form-control bg-light "
								/>
							</label>
							<div className="form-group">
								<label>
									Upload photo
									<input type="file" onChange={e => this.setState({ photo: e.target.value })} className="form-control-file" />
								</label>
							</div>
							<div>
								<button type="submit" className={` ${s.save_btn}`}>SAVE</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


