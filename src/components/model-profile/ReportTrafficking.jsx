import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from "./profile.module.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const ReportTraffickingModalWindow = (props) => {
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
          <h5>ANTI-TRAFFICKING ADVOCACY:</h5>
          <p>VibeCity is wholly committed to raising awareness on the issue of human trafficking and engages in best practices and advocacy. In the event we become aware of any incident of trafficking, we cooperate enthusiastically with law enforcement and agencies involved in combating the abuse of human rights.</p>
          <p><strong>Please report any suspected sexual exploitation of minors and/or human trafficking to the appropriate authorities.</strong></p>
          <div>
            <div>
              <h6>United States:</h6>
              <ul>
                <li><a href="http://www.missingkids.com/missingkids/servlet/PublicHomeServlet?LanguageCountry=en_US" target="_blank" rel="noopener noreferrer" className="text-info">National Center for Missing & Exploited Children (NCMEC)</a>
                  <ul>
                    <li><a href="http://www.missingkids.com/missingkids/servlet/PageServlet?LanguageCountry=en_US&PageId=2936" target="_blank" rel="noopener noreferrer" className="text-info">CyberTipline</a> - report child exploitation</li>
                    <li>24-Hour Hotline: 1-800-843-5678</li>
                  </ul>
                </li>
                <li><a href="http://www.polarisproject.org/index.php" target="_blank" rel="noopener noreferrer" className="text-info">Polaris Project - Report Human Trafficking</a>: 888-373-7888</li>
                <li><a href="http://www.hhs.gov/" target="_blank" rel="noopener noreferrer" className="text-info"> Dept. of Health & Human Services</a>: 888-373-7888</li>
                <li><a href="http://www.childrenofthenight.org/" target="_blank" rel="noopener noreferrer" className="text-info">Children of the Night</a>: 800-551-1300</li>
                <li><a href="http://www.acenational.org/" target="_blank" rel="noopener noreferrer" className="text-info"> ACE National</a>: 202-220-3019</li>
                <li><a href="http://www.ice.gov/index.htm" target="_blank" rel="noopener noreferrer" className="text-info"> Homeland Security Investigations Tip Line</a>: 866-DHS-2-ICE</li>
                <li><a href="http://www.justice.gov/" target="_blank" rel="noopener noreferrer" className="text-info"> Dept. of Justice</a>: 888-428-7581</li>
                <li>FBI Office: <a href="http://www.fbi.gov/contact-us/field" target="_blank" rel="noopener noreferrer" className="text-info">http://www.fbi.gov/contact-us/field</a></li>
              </ul>
            </div>
            <div>
              <h6>Germany:</h6>
              <ul>
                <li><a href="http://www.koetzfusbahn.de/" target="_blank" rel="noopener noreferrer" className="text-info"> YPA Agent - Jugendschutzbeauftragter: Rechtsanwalt Dr. Daniel Kötz</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h5>WARNING SIGNS OF POSSIBLE HUMAN TRAFFICKING:</h5>
            <ul>
              <li>Does an entertainer arrive accompanied by another individual?</li>
              <li>Does that individual speak for or appear to maintain control over the entertainer?</li>
              <li>Does the entertainer seem fearful of that individual?</li>
              <li>Does the entertainer have difficulty communicating, whether resulting from a language barrier or fear of interaction?</li>
              <li>Does the entertainer appear to be underage orclose to underage?</li>
            </ul>
          </div>
        </ModalBody>
        <ModalFooter className="bg-dark text-white border-top border-secondary">
          <p className="w-100 text-center">Use common sense, and contact the appropriate authorities if you suspect that someone is being trafficked.</p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReportTraffickingModalWindow;


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
