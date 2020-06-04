import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from "./profile.module.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const ReportFakePhotosModalWindow = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="" className={`font-weight-bold text-white w-100 ${s.report_btn}`} onClick={toggle}>{buttonLabel}</Button>
      </Form>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={{ fontFamily: 'Audiowide, cursive' }} className="bg-dark text-info border-bottom border-secondary" >{buttonLabel}</ModalHeader>
        <ModalBody className="pb-0 bg-dark text-white">
          <p>Want to report fake photos on this ad? If so, use the box below to enter a link to the webpage that provides potential evidence of misuse, and VibeCity will investigate your claim. If you are owner of the photos in question, follow the DMCA link at the bottom of the page.</p>
          <p><small><strong>IMPORTANT</strong>: VibeCity takes the misuse of photographs seriously and will investigate any reasonable evidence of misuse provided to us. However, because it is not uncommon for well known models and adult stars to advertise on VibeCity, or for adult entertainers to advertise on numerous adult websites, often times under alternate names, the information you provide may or may not always result in the removal of the advertisement, or in any action at all. Please also be aware that the VibeCity Guide cannot and does not make any guarantees or warranties that either (a) the advertiser in the pictures on any particular ad will be the same individual who shows up for any date arranged between an advertiser and yourself, (b) that any of the text, including the name of the advertiser, or stats that appears on an advertisement is accurate or truthful.</small></p>
        </ModalBody>
        <Form className="container bg-dark text-white">
          <FormGroup>
            <Label className="w-100 d-block">
              Link for Evidence of Misuse:
              <Input type="text" onChange={() => { }} className="w-100 d-block bg-dark text-white boredr border-secondary" placeholder="http://..." />
            </Label>
          </FormGroup>
        </Form>
        <ModalFooter className="bg-dark text-white border-top border-secondary">
          <Button color="info" onClick={toggle}>SEND REPORT</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReportFakePhotosModalWindow;


Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle: PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // if body of modal should be scrollable when content is long
  scrollable: PropTypes.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: PropTypes.bool, // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: PropTypes.bool // defaults to true
}
