import React from 'react'
import s from './customize.module.scss'

export default function Customize() {
    return (
        <div className={`text-white ${s.customize_wrap}`}>
            <div className={s.customize_block}>
                <div className={s.customize_block_title}>ACCOUNT</div>
                <div className={s.customize_block_info}>
                    <div className={s.customize_block_info_text}>
                        <dl>
                            <dt>Name:</dt>
                            <dd>Name</dd>
                            <dt>Second Name:</dt>
                            <dd>Second Name</dd>
                            <dt>Account Name:</dt>
                            <dd>Account Name</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}>EDIT</span>
                    </div>
                </div>
            </div>

            <div className={s.customize_block}>
                <div className={s.customize_block_title}>ADDRESS</div>
                <div className={s.customize_block_info}>
                    <div className={s.customize_block_info_text}>
                        <dl>
                            <dt>Address bar 1:</dt>
                            <dd>Address bar 1</dd>
                            <dt>Address bar 2:</dt>
                            <dd>Address bar 2</dd>
                            <dt>City:</dt>
                            <dd>City</dd>
                            <dt>Region:</dt>
                            <dd>Region</dd>
                            <dt>Country/region:</dt>
                            <dd>Country/region</dd>
                            <dt>Postal Code:</dt>
                            <dd>123456</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}>EDIT</span>
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
                            <dd>Document name 1</dd>
                            <dt>Document name 1:</dt>
                            <dd>Document name 1</dd>
                        </dl>
                    </div>
                    <div>
                        <span className={s.btn_edit}>EDIT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
