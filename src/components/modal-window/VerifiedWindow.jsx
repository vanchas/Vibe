import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

const VerifiedWindow = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="" className={`p-0 text-white`} onClick={toggle}>{buttonLabel}</Button>
      </Form>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={{ fontFamily: 'Audiowide, cursive' }} className="bg-dark text-info border-bottom border-secondary" >Vibe City Verified</ModalHeader>
        <ModalBody className="bg-dark text-white">
          <p>In order for an Eros advertiser to be eligible to have the Verified seal affixed to their advertisement or to be placed in Eros' Verified category, the Eros Guide must have received tangible information that the individual appearing in the photographs on any specific advertisement intended to be advertised on the Eros Guide is an individual providing adult companionship. Such proof could include comparing the pictures submitted to the Eros Guide on an advertisement with either government issued ID’s other photographic evidence.</p>
          <p>However, please be aware that the Eros Guide cannot and does not make any guarantees or warranties that either (a) the advertiser in the pictures on any particular ad will be the same individual who shows up for any date arranged between an advertiser and yourself, (b) that any of the text, including the name of the advertiser, or stats that appears on an advertisement, is accurate or truthful. Finally, the term “Verified” does not mean that Eros Guide has reviewed or confirmed any licensure or permits issued to the advertiser.</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VerifiedWindow;


Modal.propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  scrollable: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  unmountOnClose: PropTypes.bool,
  returnFocusAfterClose: PropTypes.bool
}
