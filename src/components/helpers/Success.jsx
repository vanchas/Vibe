import React, {useEffect, useState} from 'react';
import { Modal } from 'reactstrap';
import {connect}from 'react-redux'
import s from './success.module.scss'

function Success({success}) {
    const [modal, setModal] = useState(success ? true : false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        setModal(success ? true : false)
        setTimeout(() => setModal(false), 3000)
    }, [])

    return (
        <Modal isOpen={modal} toggle={toggle}>
           <div className="alert alert-info" role="alert">
               {success}
           </div>
        </Modal>
    )
}

const mapStateToProps = state => ({
    success: state.app.success
})

export default connect(mapStateToProps, null)(Success)
