import { Video } from "../utils/videos";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";

export default function VideoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="video-modal-main"
    >
      <Modal.Body className="video-modal">
        <button class="close" onClick={props.onHide}>
          <span>&times;</span>
        </button>
        <div className="video-main">
          <video width="100%" height="100%" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal.Body>
    </Modal>
  );
}
