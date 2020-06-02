import React from 'react'

export default function ModelsFilter({ setSex, setAgeFrom, setAgeTo, setEthnicity, setHair, setEye, setAffiliation, setAvailableTo, setAvailability, applyFilter }) {
  return (
    <form onSubmit={applyFilter} className="form-group container pt-4">
      <div className="d-flex justify-content-center">
        <div className="form-check pr-3">
          <label className="form-check-label">
            <input value="female" className="form-check-input" type="radio" name="sex"
              onChange={e => setSex(e.target.value)} />
                Female
            </label>
        </div>
        <div className="form-check pr-3">
          <label className="form-check-label">
            <input value="male" className="form-check-input" type="radio" name="sex"
              onChange={e => setSex(e.target.value)} />
                Male
            </label>
        </div>
      </div>

      <label className="form-group text-center d-block">
        Age
            <div className="d-flex justify-content-center">
          <input className="form-control" type="number" placeholder="from"
            onClick={e => setAgeFrom(e.target.value)} />
              &nbsp;
              <input className="form-control" type="number" placeholder="to"
            onClick={e => setAgeTo(e.target.value)} />
        </div>
      </label>

      <label className="form-group text-center d-block">
        Ethnicity:
            <select className="form-control dropdown" onClick={e => setEthnicity(e.target.value)} >
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

      <div className="text-center">
        <legend>Hair</legend>
        <div className="d-flex justify-content-between">
          <label className="form-check-label">
            <input value="brown" className="" type="radio" name="hair"
              onClick={e => setHair(e.target.value)} />
                Brown
            </label>
          <label className="form-check-label">
            <input value="blonde" className="" type="radio" name="hair"
              onClick={e => setHair(e.target.value)} />
                Blonde
            </label>
          <label className="form-check-label">
            <input value="black" className="" type="radio" name="hair"
              onClick={e => setHair(e.target.value)} />
                Black
            </label>
          <label className="form-check-label">
            <input value="auburn" className="" type="radio" name="hair"
              onClick={e => setHair(e.target.value)} />
                Auburn
            </label>
          <label className="form-check-label">
            <input value="color" className="" type="radio" name="hair"
              onClick={e => setHair(e.target.value)} />
                Color
            </label>
        </div>
      </div>

      <div className="form-check text-center">
        <legend>Eye</legend>
        <div className="d-flex justify-content-around">
          <label className="form-check-label">
            <input value="brown" className="form-check-input" type="radio" name="eye"
              onClick={e => setEye(e.target.value)} />
                Brown
            </label>
          <label className="form-check-label">
            <input value="grey" className="form-check-input" type="radio" name="eye"
              onClick={e => setEye(e.target.value)} />
                Grey
            </label>
          <label className="form-check-label">
            <input value="green" className="form-check-input" type="radio" name="eye"
              onClick={e => setEye(e.target.value)} />
                Green
            </label>
          <label className="form-check-label">
            <input value="blue" className="form-check-input" type="radio" name="eye"
              onClick={e => setEye(e.target.value)} />
                Blue
            </label>
        </div>
      </div>

      <div className="text-center">
        <legend>Affiliation</legend>
        <div className="d-flex justify-content-center">
          <label className="form-check-label pr-3">
            <input value="independent" className="" type="radio" name="affiliation"
              onClick={e => setAffiliation(e.target.value)} />
                Independent
            </label>
          <label className="form-check-label pr-3">
            <input value="else" className="" type="radio" name="affiliation"
              onClick={e => setAffiliation(e.target.value)} />
                Else
            </label>
        </div>
      </div>

      <div className="form-check text-center">
        <legend> Available To:</legend>
        <div className="d-flex justify-content-center">
          <label className="form-check">
            Men
                <input type="checkbox" className="" onClick={e => setAvailableTo(e.target.value)} value="men" />
          </label>
          <label className="form-check">
            Wemen
                <input type="checkbox" className="" onClick={e => setAvailableTo(e.target.value)} value="wemen" />
          </label>
          <label className="form-check">
            Couples
                <input type="checkbox" className="" onClick={e => setAvailableTo(e.target.value)} value="couples" />
          </label>
        </div>
      </div>

      <div className="form-check text-center">
        <legend>Availability:</legend>
        <label className="form-check">
          Incall / Outcall
                <input type="checkbox" className="" onClick={e => setAvailability(e.target.value)} value="Incall / Outcall" />
        </label>
      </div>
      <button type="submit" className="btn btn-light">Show</button>
    </form>
  )
}
