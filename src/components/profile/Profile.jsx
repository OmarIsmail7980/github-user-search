import user from "../../assets/react.svg";
import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";
import "./Profile.css";
import { useProfile } from "../../context/ProfileContext";
import { useEffect } from "react";

const Profile = () => {
  const {profile,setProfile} = useProfile();

  useEffect(()=>{
    const fetchDefault = async ()=>{
      try {
        const response = await fetch("https://api.github.com/users/octocat", {
          method: "GET",
        }).then((response) => response.json());

        setProfile(response);
        console.log(response);
      } catch (error) {
        alert(error);
      }
    }

    if(!profile.name){
      fetchDefault();
    }
  },[])

  const date = new Date(profile?.created_at).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });


  return (
    <section className="profile">
      <img className="profile__img" src={profile.avatar_url} alt="user" />

      <div className="profile__content">
        <div className="profile__content-user">
          <img src={profile.avatar_url} alt="user" />
          <div className="profile__content-user__info-wrapper">
            <div className="profile__content-user__info">
              <h1>{profile.name}</h1>
              <p>@{profile.login}</p>
            </div>
            <p className="profile__content-joined">Joined {date}</p>
          </div>
        </div>

        <p className="profile__content-bio">
          {profile.bio || "This profile has no bio"}
        </p>

        <div className="profile__content-details">
          <div>
            <h4>Repos</h4>
            <p>{profile.public_repos}</p>
          </div>

          <div>
            <h4>Followers</h4>
            <p>{profile.followers}</p>
          </div>

          <div>
            <h4>Following</h4>
            <p>{profile.following}</p>
          </div>
        </div>

        <div className="profile__content-links">
          <div className="profile__content-links-group">
            <div>
              <img src={locationIcon} alt="location icon" />
              <p>{profile.location || "Not Available"}</p>
            </div>

            <div>
              <img src={linkIcon} alt="location icon" />
              <p>{profile.blog || "Not Available"}</p>
            </div>
          </div>

          <div className="profile__content-links-group">
            <div>
              <img src={twitterIcon} alt="location icon" />
              <p>{profile.twitter || "Not Available"}</p>
            </div>

            <div>
              <img src={companyIcon} alt="location icon" />
              <p>{profile.company || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
