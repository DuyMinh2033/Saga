import BottomSheet from "../../../components/BottomSheet";
import "./styles.scss";
// eslint-disable-next-line react/prop-types
const ViewMapBottom = ({ isOpen, onClose }) => {
  const handleClick = () => {
    const url =
      "https://www.google.com/maps/place/5000+Yonge+St+b2,+North+York,+ON+M2N+7E9,+Canada/@43.766246,-79.412752,19z/data=!4m5!3m4!1s0x882b2d4e208c6a2d:0x7e978570243dfde7!8m2!3d43.7661592!4d-79.4129487?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D";
    window.open(url, "_blank"); // Mở trong tab mới
  };

  return (
    <BottomSheet open={isOpen} onClose={onClose}>
      <div className="view__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1440.6613686834214!2d-79.412949!3d43.766159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d4e208c6a2d%3A0x7e978570243dfde7!2s5000%20Yonge%20St%20b2%2C%20North%20York%2C%20ON%20M2N%207E9%2C%20Canada!5e0!3m2!1sen!2sus!4v1733493794807!5m2!1sen!2sus"
          width="100%"
          height="600px"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="response"
        ></iframe>
        <div className="link" onClick={handleClick} />
      </div>
    </BottomSheet>
  );
};

export default ViewMapBottom;
