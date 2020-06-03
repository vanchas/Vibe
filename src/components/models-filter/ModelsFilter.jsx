import React from "react";
import s from "./form.module.scss";

export default function ModelsFilter({
  setSex,
  setAgeFrom,
  setAgeTo,
  setEthnicity,
  setHair,
  setEye,
  setAffiliation,
  setAvailableTo,
  setAvailability,
  applyFilter
}) {
  return (
    <form onSubmit={applyFilter} className={s.filter_form}>
      <div className={s.sex_block}>
        <legend>Sex</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            value="female"
            type="radio"
            name="sex"
            onChange={(e) => setSex(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Female
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="male"
            type="radio"
            name="sex"
            onChange={(e) => setSex(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Male
				</label>
      </div>

      <label className={`${s.age_block} form-group`}>
        <legend> Age</legend>
        <input
          min="18"
          className="mr-2"
          className="form-control"
          type="number"
          placeholder="from"
          onClick={(e) => setAgeFrom(e.target.value)}
        />
        <input
          className="mr-2"
          className="form-control"
          type="number"
          placeholder="to"
          onClick={(e) => setAgeTo(e.target.value)}
        />
      </label>

      <label className={`${s.ethnicity_block} form-group`}>
        <legend>Ethnicity:</legend>
        <select
          className="form-control dropdown"
          onClick={(e) => setEthnicity(e.target.value)}
        >
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
            <option value="White Other">Any other White background</option>
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

      <div className={s.hair_block}>
        <legend>Hair</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            value="brown"
            type="radio"
            name="hair"
            onClick={(e) => setHair(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Brown
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="blonde"
            type="radio"
            name="hair"
            onClick={(e) => setHair(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Blonde
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="black"
            type="radio"
            name="hair"
            onClick={(e) => setHair(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Black
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="auburn"
            type="radio"
            name="hair"
            onClick={(e) => setHair(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Auburn
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="color"
            type="radio"
            name="hair"
            onClick={(e) => setHair(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Color
				</label>
      </div>

      <div className={s.eye_block}>
        <legend>Eye</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            value="brown"
            type="radio"
            name="eye"
            onClick={(e) => setEye(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Brown
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="grey"
            type="radio"
            name="eye"
            onClick={(e) => setEye(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Grey
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="green"
            type="radio"
            name="eye"
            onClick={(e) => setEye(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Green
				</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="blue"
            type="radio"
            name="eye"
            onClick={(e) => setEye(e.target.value)}
          />
          <span className={s.checkmark}></span>
					Blue
				</label>
      </div>

      <div className={s.affiliation_block}>
        <legend>Affiliation</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            value="independent"
            type="radio"
            name="affiliation"
            onClick={(e) => setAffiliation(e.target.value)}
          />
          <span className={s.checkmark}></span>
						Independent
					</label>
        <label className={s.label}>
          <input
            className="mr-2"
            value="agencies"
            type="radio"
            name="affiliation"
            onClick={(e) => setAffiliation(e.target.value)}
          />
          <span className={s.checkmark}></span>
						Agencies
					</label>
      </div>

      <div className={s.availableTo_block}>
        <legend> Available To:</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={(e) => setAvailableTo(e.target.value)}
            value="men"
          />
          <span className={s.checksign}></span>
          Men
        </label>
        <label className={s.label}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={(e) => setAvailableTo(e.target.value)}
            value="wemen"
          />
          <span className={s.checksign}></span>
          Wemen
        </label>
        <label className={s.label}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={(e) => setAvailableTo(e.target.value)}
            value="couples"
          />
          <span className={s.checksign}></span>
          Couples
        </label>
      </div>

      <div className={s.availability_block}>
        <legend>Availability:</legend>
        <label className={s.label}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={(e) => setAvailability(e.target.value)}
            value="Incall"
          />
          <span className={s.checksign}></span>
          Incall
        </label>
        <label className={s.label}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={(e) => setAvailability(e.target.value)}
            value="Outcall"
          />
          <span className={s.checksign}></span>
          Outcall
        </label>
      </div>

      <button type="submit" className={`rounded border-0 ${s.btn_submit}`}>
        Show
			</button>
    </form>
  );
}
