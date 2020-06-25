import React, { Component } from "react";
import s from "./add-post.module.scss";
import Alert from "../test/Alert";

export default class AddPostFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: '',
			age: '',
			ethnicity_id: '',
			hair_id: '',
			eye_id: '',
			height: '',
			affiliation_id: '',
			availableto_ids: [],
			availability_ids: [],
			number: '',
			email: '',
			model_name: '',
			photo: [],
			about: '',
			video_link: "https://www.youtube.com/watch?v=HoK9shIJ2xQ",
			summary: '',
			second_name: '',
			account_name: '',
			category_id: '',
			state_id: '',
			city_id: '',
			photo_vertical: '',
			photo_horizontal: '',
		};
	}

	submitHandler = (e) => {
		e.preventDefault();
		if (this.state.gender.length,
			+this.state.age >= 18,
			this.state.ethnicity_id,
			this.state.hair_id,
			this.state.eye_id,
			this.state.height,
			this.state.affiliation_id,
			this.state.availableto_ids.length,
			this.state.availability_ids.length,
			this.state.number,
			this.state.email.length,
			this.state.model_name.length,
			this.state.photo.length,
			this.state.about.length,
			this.state.video_link.length,
			this.state.summary.length,
			this.state.second_name.length,
			this.state.account_name.length,
			this.state.category_id,
			this.state.state_id,
			this.state.city_id,
			this.state.photo_vertical,
			this.state.photo_horizontal) {

			this.props.addProviderPost({
				gender: this.state.gender,
				age: this.state.age,
				ethnicity_id: this.state.ethnicity_id,
				hair_id: this.state.hair_id,
				eye_id: this.state.eye_id,
				height: this.state.height,
				affiliation_id: this.state.affiliation_id,
				availableto_ids: this.state.availableto_ids,
				availability_ids: this.state.availability_ids,
				number: this.state.number,
				email: this.state.email,
				model_name: this.state.model_name,
				photo: this.state.photo,
				about: this.state.about,
				video_link: this.state.video_link,
				summary: this.state.summary,
				second_name: this.state.second_name,
				account_name: this.state.account_name,
				category_id: this.state.category_id,
				state_id: this.state.state_id,
				city_id: this.state.city_id,
				photo_vertical: this.state.photo_vertical,
				photo_horizontal: this.state.photo_horizontal,
			});
			this.setState({
				gender: '',
				age: '',
				ethnicity_id: '',
				hair_id: '',
				eye_id: '',
				height: '',
				affiliation_id: '',
				availableto_ids: [],
				availability_ids: [],
				number: '',
				email: '',
				model_name: '',
				photo: [],
				about: '',
				video_link: "https://www.youtube.com/watch?v=HoK9shIJ2xQ",
				summary: '',
				second_name: '',
				account_name: '',
				category_id: '',
				state_id: '',
				city_id: '',
				photo_vertical: '',
				photo_horizontal: ''
			});
		} else {
			this.props.showAlert("Fill in all fields, please");
		}
	};

	render() {
		return (
			<div className={`${s.add_post_wrap}`}>
				<div className={s.add_post_block}>
					<div className={s.add_post_block_title}>ADDING POST</div>
					<div className={s.add_post_block_info}>
						{this.props.alert && <Alert text={this.props.alert} />}

						<form
							encType="multipart/form-data"
							onSubmit={this.submitHandler}
							className={s.add_post_block_form}
						>
							<label className="form-group">
								First Name:
								<input
									value={this.state.model_name}
									required
									onChange={(e) =>
										this.setState({ model_name: e.target.value })
									}
									type="text"
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Second Name:
								<input
									value={this.state.second_name}
									required
									onChange={(e) =>
										this.setState({ second_name: e.target.value })
									}
									type="text"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Account Name:
								<input
									value={this.state.account_name}
									required
									onChange={(e) =>
										this.setState({ account_name: e.target.value })
									}
									type="text"
									className="form-control bg-light "
								/>
							</label>
							<div className="d-lg-flex d-md-block">
								<legend>Gender:</legend>
								<label className="form-check">
									Male
									<input
										onChange={(e) => this.setState({ gender: e.target.value })}
										type="radio"
										value="male"
										name="gender"
										className="form-check-input bg-light"
									/>
								</label>
								<label className="form-check">
									Female
									<input
										required
										onChange={(e) => this.setState({ gender: e.target.value })}
										type="radio"
										value="female"
										className="form-check-input bg-light"
										name="gender"
									/>
								</label>
							</div>
							<label className="form-group">
								Age:
								<input
									required
									value={this.state.age}
									onChange={(e) => this.setState({ age: e.target.value })}
									type="number"
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Email:
								<input
									required
									value={this.state.email}
									onChange={(e) => this.setState({ email: e.target.value })}
									type="email"
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Phone:
								<input
									required
									value={this.state.number}
									onChange={(e) => this.setState({ number: e.target.value })}
									type="text"
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Categories
								<select
									className="form-control"
									onChange={(e) => this.setState({ category_id: e.target.value })}
								>
									<option value="default" hidden>
										-- select category --
								</option>
									{this.props.categories.map((c) => (
										<option key={c.id} value={c.id}>
											{c.name}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								States
								<select
									className="form-control"
									onChange={(e) => {
										this.setState({ state_id: e.target.value });
										this.props.getCities(e.target.value);
									}}
								>
									<option value="default" hidden>
										-- select state --
								</option>
									{this.props.states.map((s) => (
										<option key={s.id} value={s.id}>
											{s.name}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								Cities
								<select
									className="form-control"
									onChange={(e) => this.setState({ city_id: e.target.value })}
								>
									<option value="default" hidden>
										-- select city --
								</option>
									{this.props.cities.map((c) => (
										<option key={c.id} value={c.id}>
											{c.name}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								Ethnicity:
								<select
									required
									className="form-control dropdown"
									onChange={(e) =>
										this.setState({ ethnicity_id: e.target.value })
									}
								>
									<option hidden value="default">
										-- select ethnicity --
									</option>
									{this.props.ethnicity.map((e) => (
										<option key={e.id} value={e.id}>
											{e.value}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								Hair Color:
								<select
									required
									className="form-control dropdown"
									onChange={(e) => this.setState({ hair_id: e.target.value })}
								>
									<option value="default" hidden>-- select hair color --</option>
									{this.props.hair.map((h) => (
										<option key={h.id} value={h.id}>
											{h.value}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								Eye Color:
								<select
									required
									className="form-control dropdown"
									onChange={(e) => this.setState({ eye_id: e.target.value })}
								>
									<option value="default" hidden>-- select eyes color --</option>
									{this.props.eyes.map((eye) => (
										<option key={eye.id} value={eye.id}>
											{eye.value}
										</option>
									))}
								</select>
							</label>
							<label className="form-group">
								Height:
								<input
									required
									value={this.state.height}
									onChange={(e) => this.setState({ height: e.target.value })}
									type="number"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								Affiliation:
								<select
									required
									className="form-control dropdown"
									onChange={(e) =>
										this.setState({ affiliation_id: e.target.value })
									}
								>
									<option value="default" hidden>-- select affiliation color --</option>
									{this.props.affiliation.map((a) => (
										<option key={a.id} value={a.id}>
											{a.value}
										</option>
									))}
								</select>
							</label>
							<div className="d-lg-flex d-md-block">
								<legend>Available To:</legend>
								{this.props.available_to.map((a) => (
									<label key={a.id} className="form-check">
										{a.value}
										<input
											value={a.id}
											type="checkbox"
											onChange={(e) =>
												this.setState({
													availableto_ids: [
														...this.state.availableto_ids,
														e.target.value,
													],
												})
											}
											className="form-check-input"
										/>
									</label>
								))}
							</div>
							<div className="d-lg-flex d-md-block">
								<legend>Availability:</legend>
								{this.props.availability.map((a) => (
									<label key={a.id} className="form-check">
										{a.value}
										<input
											value={a.id}
											type="checkbox"
											onChange={(e) =>
												this.setState({
													availability_ids: [
														...this.state.availability_ids,
														e.target.value,
													],
												})
											}
											className="form-check-input"
										/>
									</label>
								))}
							</div>
							<label className="form-group">
								Video link:
								<input type="url"
									value={this.state.video_link}
									onChange={(e) => this.setState({ video_link: e.target.value })}
									className="form-control bg-light"
								/>
							</label>
							<label className="form-group">
								Short Summary:
								<textarea
									required
									value={this.state.summary}
									onChange={(e) => this.setState({ summary: e.target.value })}
									rows="5"
									className="form-control bg-light "
								/>
							</label>
							<label className="form-group">
								About:
								<textarea
									required
									value={this.state.about}
									onChange={(e) => this.setState({ about: e.target.value })}
									rows="10"
									className="form-control bg-light "
								/>
							</label>
							<div className="form-group">
								<label>
									Upload horizontal photo
									<input
										required
										type="file"
										onChange={(e) =>
											this.setState({ photo_horizontal: e.target.files[0] })
										}
										className="form-control-file"
									/>
								</label>
								<label>
									Upload vertical photo
									<input
										required
										type="file"
										onChange={(e) =>
											this.setState({ photo_vertical: e.target.files[0] })
										}
										className="form-control-file"
									/>
								</label>
								<label>
									Upload another photo
									<input
										multiple
										type="file"
										onChange={(e) =>
											this.setState({
												photo: [...this.state.photo, e.target.files],
											})
										}
										className="form-control-file"
									/>
								</label>
							</div>
							<div>
								<button type="submit" className={` ${s.save_btn}`}>
									SAVE
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
