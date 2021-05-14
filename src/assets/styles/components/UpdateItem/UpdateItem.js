import GuyTraining from "../../../img/guy_training.png";

const UpdateItem = ({ image, title, text }) => {
  return (
    <div className="step2__item">
      <img src={image ? image : GuyTraining} alt="Guy Training" />
      <h5>{title ? title : "My latest session"}</h5>
      <p>{text ? text : "video preview"}</p>
    </div>
  );
};

export default UpdateItem;
