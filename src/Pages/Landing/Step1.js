import ProfilePicture from "../../assets/img/profile-picture-default.png";
import LocationLogo from "../../assets/img/location_logo.svg";
import FollowIcon from "../../assets/img/follow_icon.svg";
import MessageIcon from "../../assets/img/message_icon.svg";
import DumbellIcon from "../../assets/img/dumbell_image.png";

const Step1 = ({ trainerData }) => {
  const getLocation = () => {
    return `${trainerData.address.city}, ${trainerData.address.country}`;
  };
  console.log(trainerData);

  return (
    <div className="step1__container">
      <div className="step1">
        <div className="step1__left">
          <img
            src={trainerData.media ? trainerData.media : ProfilePicture}
            alt="Profile pic"
          />
        </div>
        <div className="step1__right">
          <div className="step1__info">
            <h3>Hi I'm {trainerData.name}!</h3>
            <p>
              An <span>Independant {trainerData.role || "trainer"}</span> with{" "}
              {trainerData.years_working
                ? `over ${trainerData.years_working} years of experience`
                : " several years of experience"}
            </p>
            <div className="step1__info--location">
              <img src={LocationLogo} alt="Location Logo" />
              <p>
                {trainerData.address ? getLocation() : "No location set yet"}
              </p>
            </div>
          </div>
          <div className="step1__social-and-skills">
            <div className="step1__social--container">
              <div className="step1__social">
                <button className="step1__social--follow">
                  <img src={FollowIcon} alt="Follow Icon" />
                  <p>Follow</p>
                </button>
                <button className="step1__social--message">
                  <img src={MessageIcon} alt="Message Icon" />
                </button>
              </div>
            </div>
            <div className="step1__skills__container">
              <div className="step1__skills">
                <div className="step1__skills--main step1--card">
                  {trainerData.category ? (
                    <img
                      src={trainerData.category.image}
                      alt={trainerData.category.name}
                    />
                  ) : (
                    <img src={DumbellIcon} alt="" />
                  )}
                  <p>
                    <strong>
                      {trainerData.category
                        ? trainerData.category.name
                        : "No category selected"}
                    </strong>
                  </p>
                </div>
                {trainerData.specialties && (
                  <>
                    {trainerData.specialties.map((spec, key) => (
                      <p key={key} className="step1--card">
                        {spec.name}
                      </p>
                    ))}
                  </>
                )}
                {!trainerData.specialties && (
                  <p className="step1--card">No specialties</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
