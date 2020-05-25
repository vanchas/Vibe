import React, { useState } from 'react'
import s from './customize.module.scss'

export default function Customize() {
    const [accountEditMode, setAccountEditMode] = useState(false);
    const [addressEditMode, setAddressEditMode] = useState(false);
    const [documentsEditMode, setDocumentsEditMode] = useState(false);

    const nameInput = <input className="form-control bg-dark text-white" type="text" placeholder="Name" />;
    const secondNameInput = <input className="form-control bg-dark text-white" type="text" placeholder="Second Name" />;
    const accountNameInput = <input className="form-control bg-dark text-white" type="text" placeholder="Account Name" />;
    const address1NameInput = <input className="form-control bg-dark text-white" type="text" placeholder="Address bar 1" />;
    const address2NameInput = <input className="form-control bg-dark text-white" type="text" placeholder="Address bar 2" />;
    const cityInput = <input className="form-control bg-dark text-white" type="text" placeholder="City" />;
    const regionInput = <input className="form-control bg-dark text-white" type="text" placeholder="Region" />;
    const countryInput = <input className="form-control bg-dark text-white" type="text" placeholder="Country" />;
    const postalInput = <input className="form-control bg-dark text-white" type="text" placeholder="Postal" />;
    const document1Input = <input className="form-control bg-dark text-white" type="text" placeholder="document 1" />;
    const document2Input = <input className="form-control bg-dark text-white" type="text" placeholder="document 2" />;

    return (
        <div className={`text-white ${s.customize_wrap}`}>
            <div className={s.customize_block}>
                <div className={s.customize_block_title}>ACCOUNT</div>
                <div className={s.customize_block_info}>
                    <div className={s.customize_block_info_text}>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{!accountEditMode
                                ? 'Name'
                                : nameInput}</dd>
                            <dt>Second Name:</dt>
                            <dd>{!accountEditMode
                                ? 'Second Name'
                                : secondNameInput}</dd>
                            <dt>Account Name:</dt>
                            <dd>{!accountEditMode
                                ? 'Account Name'
                                : accountNameInput}</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}
                            onClick={() => {
                                setAccountEditMode(!accountEditMode);
                            }} >
                            {!accountEditMode ? 'EDIT' : 'SAVE'}</span>
                    </div>
                </div>
            </div>

            <div className={s.customize_block}>
                <div className={s.customize_block_title}>ADDRESS</div>
                <div className={s.customize_block_info}>
                    <div className={s.customize_block_info_text}>
                        <dl>
                            <dt>Address bar 1:</dt>
                            <dd>{!addressEditMode ? 'Address bar 1' : address1NameInput}</dd>
                            <dt>Address bar 2:</dt>
                            <dd>{!addressEditMode ? 'Address bar 2' : address2NameInput}</dd>
                            <dt>City:</dt>
                            <dd>{!addressEditMode ? 'City' : cityInput}</dd>
                            <dt>Region:</dt>
                            <dd>{!addressEditMode ? 'Region' : regionInput}</dd>
                            <dt>Country/region:</dt>
                            <dd>{!addressEditMode ? 'Country/region' : countryInput}</dd>
                            <dt>Postal Code:</dt>
                            <dd>{!addressEditMode ? '123456' : postalInput}</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}
                            onClick={() => {
                                setAddressEditMode(!addressEditMode);
                            }}>
                            {!addressEditMode ? 'EDIT' : 'SAVE'}</span>
                    </div>
                </div>
            </div>

            <div className={s.customize_block}>
                <div className={s.customize_block_title}>DOCUMENTS</div>
                <div className={s.customize_block_info}>
                    <div className={s.customize_block_info_text}>
                        <dl>
                            <dt>Status:</dt>
                            <dd>Verified</dd>
                            <dt>Document name 1:</dt>
                            <dd>{!documentsEditMode ? 'Document name 1' : document1Input}</dd>
                            <dt>Document name 2:</dt>
                            <dd>{!documentsEditMode ? 'Document name 2' : document2Input}</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}
                            onClick={() => {
                                setDocumentsEditMode(!documentsEditMode);
                            }} >
                            {!documentsEditMode ? 'EDIT' : 'SAVE'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
