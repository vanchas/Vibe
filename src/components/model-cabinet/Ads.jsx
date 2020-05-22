import React from 'react'
import s from './ads.module.scss'
import EscortGrid from '../home-page/EscortGrid'
import model from '../../assets/images/main/vertical/model-1.png'

export default function Ads(props) {
    return (
        <div className={s.ads_block}>
            <div className={s.ads_filter_control}>
                <div>FILTER</div>
                <div>SORT BY</div>
                <div></div>
            </div>
            <EscortGrid models={[model]} />
        </div>
    )
}
