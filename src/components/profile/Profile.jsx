import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";
import { useProfile } from "../../context/ProfileContext";
import { useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    const fetchDefault = async () => {
      try {
        const response = await fetch("https://api.github.com/users/octocat", {
          method: "GET",
        }).then((response) => response.json());

        setProfile(response);
        console.log(response);
      } catch (error) {
        alert(error);
      }
    };

    if (!profile.name) {
      fetchDefault();
    }
  }, []);

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const date = new Date(profile?.created_at).toLocaleDateString(
    "en-GB",
    options
  );

  function extractDomain(url) {
    // Remove protocol (http:// or https://) from the beginning of the URL
    let domain = url.replace(/^(https?:\/\/)?/, "");

    // Remove everything after the first forward slash ("/")
    domain = domain.split("/")[0];

    // Remove www. from the beginning of the domain if present
    domain = domain.replace(/^www\./, "");

    return domain;
  }

  return (
    <section className="profile">
      <img className="profile__img" src={profile.avatar_url} alt="user" />

      <div className="profile__content">
        <div className="profile__content-user">
          <img src={profile.avatar_url} alt="user" />
          <div className="profile__content-user__info-wrapper">
            <div className="profile__content-user__info">
              <h1>{profile.name || profile.login}</h1>
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
              <img
                style={profile.location ? {} : { opacity: 0.6 }}
                src={locationIcon}
                alt="location icon"
              />
              <p>{profile.location || "Not Available"}</p>
            </div>

            <div>
              <img
                style={profile.blog ? {} : { opacity: 0.6 }}
                src={linkIcon}
                alt="link icon"
              />
              <p>
                {profile.blog ? (
                  <a
                    className={profile.blog ? "underline" : ""}
                    style={
                      profile.blog
                        ? {
                            color: "var(--light-secondary-text)",
                            textDecoration: "none",
                          }
                        : {}
                    }
                    href={`${profile.blog}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {extractDomain(profile.blog)}
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
          </div>

          <div className="profile__content-links-group">
            <div>
              <img
                style={profile.twitter_username ? {} : { opacity: 0.6 }}
                src={twitterIcon}
                alt="twitter icon"
              />
              <p>
                {profile.twitter_username ? (
                  <a
                    className={profile.twitter_username ? "underline" : ""}
                    style={
                      profile.twitter_username
                        ? {
                            color: "var(--light-secondary-text)",
                            textDecoration: "none",
                          }
                        : {}
                    }
                    href={`https://twitter.com/${profile.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.twitter_username}
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>

            <div>
              <img
                style={profile.company ? {} : { opacity: 0.6 }}
                src={companyIcon}
                alt="company icon"
              />
              <p>{profile.company || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
