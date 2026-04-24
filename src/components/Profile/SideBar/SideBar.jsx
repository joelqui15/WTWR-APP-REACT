import "../SideBar/SideBar.css";
import AvatarPic from "../../../images/user-avatar.png";

function SideBar() {
  return (
    <>
      <section className="sideBar">
        <div className="sideBar__header">
          <img src={AvatarPic} alt="" className="sideBar__avatar" />
          <p className="sideBar__avatar-name">Terrence Tegegne</p>
        </div>
      </section>
    </>
  );
}

export default SideBar;
