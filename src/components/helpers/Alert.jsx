import React, {useEffect, useState} from 'react';
import { Modal } from 'reactstrap';
import {connect}from 'react-redux'

function Alert({alert}) {
    const [modal, setModal] = useState(alert ? true : false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        setModal(alert ? true : false)
        setTimeout(() => setModal(false), 3000)
    }, [])

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <div className="alert alert-danger" role="alert">
                {alert}
            </div>
        </Modal>
    )
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, null)(Alert)
