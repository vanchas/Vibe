import React, { Component } from 'react'
import s from './add-post.module.scss'

export default class AddPostFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      accountName: '',
      sex: '',
      age: '',
      email: '',
      phone: '',
      ethnicity: '',
      hair: '',
      eye: '',
      heigth: '',
      affiliation: '',
      availableTo: '',
      availability: '',
      summary: '',
      about: ''
     }
  }

  render() {
    return (
      <div className={`text-white ${s.add_post_wrap}`}>
        <div className={s.add_post_block}>
          <div className={s.add_post_block_title}>ADDING POST</div>
          <div className={s.add_post_block_info}>
            <form className={s.add_post_block_info_text}>
              <label className="form-group">
                First Name:
              <input type="text" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Second Name:
              <input type="text" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Account Name:
              <input type="text" className="form-control bg-light text-white" />
              </label>
              <div className="d-lg-flex d-md-block">
                <legend>Sex:</legend>
                <label className="form-group" name="sex" >
                  Male
              <input type="radio" value="male" className="form-control bg-light" />
                </label>
                <label className="form-group">
                  Female
              <input type="radio" value="female" className="form-control bg-light" name="sex" />
                </label>
              </div>
              <label className="form-group">
                Age:
              <input type="number" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Email:
              <input type="email" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Phone:
              <input type="text" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Ethnicity:
            <select className="form-control dropdown">
                  <option hidden value="default">-- select one --</option>
                  <optgroup label="White">
                    <option value="White English">English</option>
                    <option value="White Welsh">Welsh</option>
                    <option value="White Scottish">Scottish</option>
                    <option value="White Northern Irish">Northern Irish</option>
                    <option value="White Irish">Irish</option>
                    <option value="White Gypsy or Irish Traveller">Gypsy or Irish Traveller</option>
                    <option value="White Other">Any other White background</option>
                  </optgroup>
                  <optgroup label="Mixed or Multiple ethnic groups">
                    <option value="Mixed White and Black Caribbean">White and Black Caribbean</option>
                    <option value="Mixed White and Black African">White and Black African</option>
                    <option value="Mixed White Other">Any other Mixed or Multiple background</option>
                  </optgroup>
                  <optgroup label="Asian">
                    <option value="Asian Indian">Indian</option>
                    <option value="Asian Pakistani">Pakistani</option>
                    <option value="Asian Bangladeshi">Bangladeshi</option>
                    <option value="Asian Chinese">Chinese</option>
                    <option value="Asian Other">Any other Asian background</option>
                  </optgroup>
                  <optgroup label="Black">
                    <option value="Black African">African</option>
                    <option value="Black African American">African American</option>
                    <option value="Black Caribbean">Caribbean</option>
                    <option value="Black Other">Any other Black background</option>
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
            <select className="form-control dropdown">
                  <option value="brown">Brown</option>
                  <option value="blonde">Blonde</option>
                  <option value="black">Black</option>
                  <option value="auburn">Auburn</option>
                  <option value="color">Color</option>
                </select>
              </label>
              <label className="form-group">
                Eye Color:
            <select className="form-control dropdown">
                  <option value="brown">Brown</option>
                  <option value="grey">Grey</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>
              </label>
              <label className="form-group">
                Height:
              <input type="nubmer" className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                Affiliation:
            <select className="form-control dropdown">
                  <option value="independent">Independent</option>
                  <option value="else">Else</option>
                </select>
              </label>
              <div className="d-lg-flex d-md-block">
                <legend> Available To:</legend>
                <label className="form-group">
                  Men
                <input type="checkbox" className="form-control" />
                </label>
                <label className="form-group">
                  Wemen
                <input type="checkbox" className="form-control" />
                </label>
                <label className="form-group">
                  Couples
                <input type="checkbox" className="form-control" />
                </label>
              </div>
              <label className="form-group">
                Availability:
            <select className="form-control dropdown">
                  <option value="Incall/Outcall">
                    Incall / Outcall</option>
                </select>
              </label>
              <label className="form-group">
                Short Summary:
              <textarea rows="5"
                  className="form-control bg-light text-white" />
              </label>
              <label className="form-group">
                About:
              <textarea rows="10" className="form-control bg-light text-white" />
              </label>
              <div>
                <button className={`text-white ${s.save_btn}`}>SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
