import UpdateItem from "../../assets/styles/components/UpdateItem/UpdateItem";

const Step2 = () => {
  return (
    <div className="step2__container">
      <div className="step2">
        <h2>What I've been up to</h2>
        <h4>Check out my latest updates</h4>
        <div className="step2__item--container">
          <UpdateItem text="slides" />
          <UpdateItem title="Instagram post" text="@trainer" />
          <UpdateItem title="Yesterday's sesh" />
          <UpdateItem title="Twitter" />
          <UpdateItem text="slides" />
          <UpdateItem title="Instagram post" text="@trainer" />
          <UpdateItem title="Yesterday's sesh" />
          <UpdateItem title="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
