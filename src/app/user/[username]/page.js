"use client";
import Loader from "@/components/Loader";
import useSingleUser from "@/hooks/useSingleUser";
import { useParams } from "next/navigation";
import "./reg.css";
import { formatDateToDDMMMYYYY } from "@/components/DateFormat";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const params = useParams();
  const { username } = params;
  const [singleUser, isLoading, isError] = useSingleUser(username);
  const router = useRouter();

  // console.log(singleUser);

  if (isError) return <p>Failed to load user 😢</p>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="backHome relative">
            <button
              onClick={() => router.back()}
              className=" absolute top-3 left-7 !bg-red-600 text-white rounded-md px-6 py-2 cursor-pointer"
            >
              Go Back
            </button>
          </div>
          <section className="cover-image-section">
            <header className="cover-hader-site">
              <img src="/assets/img/bg/service_bg_1.jpg" />
            </header>
          </section>

          <section className="profile-section">
            <div className="profile-section-in">
              <div className="profile-image-site">
                <div className="profile-image-div">
                  <a id="profile-link">
                    <img
                      id="Profile_images"
                      src={
                        singleUser?.photo
                          ? singleUser?.photo
                          : singleUser?.gender === "পুরুষ"
                          ? "/assets/img/avater/male.png"
                          : "/assets/img/avater/female.png"
                      }
                    />
                  </a>
                  <span className="fas fa-camera"></span>
                </div>
              </div>
              <div className="profile-name-info">
                <h6 style={{ fontSize: "1.4em", margin: "10px 0 0 0 " }}>
                  <span className="pro-txt" id="profile_name">
                    {singleUser?.name}
                    <span className="ms-2 text-black">{`(${singleUser?.userName})`}</span>
                  </span>
                </h6>
              </div>
              <div className="profile-button-site">
                <div className="btn-site-pro">
                  <span>
                    <i className="fas fa-share"></i>
                    Share Your Profile
                  </span>
                  <span
                    className="edit-profile-btn"
                    title="Edit Profile to Contact Admin"
                  >
                    <i className="fas fa-pen"></i>
                    Edit Profile
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="post-section">
            <div className="post-section-in">
              <section className="info-section">
                <div className="profile-lock-div">
                  <div className="icon-pld">
                    <i className="fab fa-keycdn"></i>
                  </div>
                  <div className="pld-text">
                    <h3>You locked your profile</h3>
                    <a href="#">Learn More</a>
                  </div>
                </div>

                <div className="about-info">
                  <h4>Intro</h4>

                  <p id="bio-text" style={{ textAlign: "center" }}>
                    bio
                  </p>

                  <button id="bio-edit-btn" className="edit-bio btn">
                    Edit Bio
                  </button>

                  <ul>
                    <li>
                      <i className="fa-solid fa-clock"></i>যোগদান করেছেনঃ
                      <span>
                        {formatDateToDDMMMYYYY(singleUser?.createdAt)}
                      </span>
                    </li>{" "}
                    <li>
                      <i class="fa-solid fa-user"></i>লিঙ্গঃ
                      <span>
                        {singleUser?.gender === "male" ? "পুরুষ" : "মহিলা"}
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-mobile"></i>মোবাইলঃ
                      <span>{singleUser?.contNum}</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-droplet"></i>ব্লাড গ্রুপঃ
                      <span>{singleUser?.bloodGroup}</span>
                    </li>
                    <li>
                      <i className="fas fa-briefcase"></i> পেশা:
                      <span> {singleUser?.["বর্তমান পেশা"]}</span>
                    </li>{" "}
                    <li>
                      <i className="fa-solid fa-building"></i> প্রতিষ্ঠান এর
                      নাম:
                      <span> {singleUser?.["প্রতিষ্ঠান এর নাম"]}</span>
                    </li>
                    <li>
                      <i className="fas fa-graduation-cap"></i> স্কুলঃ
                      <span></span>
                    </li>{" "}
                    <li>
                      <i className="fas fa-graduation-cap"></i> কলেজঃ
                      <span> </span>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>ঠিকানাঃ
                      <span>{singleUser?.address}</span>
                    </li>
                    <li>
                      <i className="fas fa-badge"></i>ব্যাজঃ
                      <span>{singleUser?.badge}</span>
                    </li>
                    {/* <li>
                  <i className="fas fa-globe"></i>{" "}
                  <a href={pathname}> প্রোফাইল লিঙ্ক </a>
                </li> */}
                  </ul>
                </div>
              </section>

              <section className="post-info">
                <div className="box-design">
                  <div className="post-upload-T">
                    <div className="profil-ing-div">
                      <a href="#" id="profile-link">
                        <img
                          id="Profile_images"
                          src={
                            singleUser?.["ছবির লিঙ্ক"]
                              ? singleUser?.["ছবির লিঙ্ক"]
                              : singleUser?.["লিঙ্গ"] === "পুরুষ"
                              ? "/assets/img/avater/male.png"
                              : "/assets/img/avater/female.png"
                          }
                        />
                      </a>
                    </div>
                    <div className="text-post">
                      <span>What's on your mind?</span>
                    </div>
                  </div>
                  <div className="photo-upload">
                    <div className="post-upl">
                      <p>
                        <i className="fas fa-video"></i> Live Video
                      </p>
                    </div>
                    <div className="post-upl">
                      <p>
                        <i className="fas fa-images"></i> Photo/Video
                      </p>
                    </div>
                    <div className="post-upl">
                      <p>
                        <i className="fas fa-flag"></i> Life Event
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box-design post-div">
                  <div className="post-infarmation">
                    <div>
                      <div className="profil-ing-div post-profile-img">
                        <a href="#" id="profile-link">
                          <img
                            id="Profile_images"
                            src={
                              singleUser?.["ছবির লিঙ্ক"]
                                ? singleUser?.["ছবির লিঙ্ক"]
                                : singleUser?.["লিঙ্গ"] === "পুরুষ"
                                ? "/assets/img/avater/male.png"
                                : "/assets/img/avater/female.png"
                            }
                          />
                        </a>
                      </div>
                    </div>
                    <div className="post-three-dot">
                      <h2>
                        <a href="#" id="profile_name">
                          {singleUser?.নাম}
                        </a>
                      </h2>
                      <p>
                        <span>5d</span>
                        <span>
                          <i
                            id="public-btn-i"
                            className="fas fa-user-friends"
                          ></i>
                        </span>
                      </p>

                      <span className="thre-dto-btn fas fa-ellipsis-h"></span>
                    </div>
                  </div>

                  <p className="post-hader-text" id="post_h_T">
                    Hello World.
                  </p>
                  <img
                    id="post-image-12"
                    className="post-images"
                    src="/screenshoot.jpg"
                  />

                  <div className="post-info-input">
                    <div className="lilowow-cs">
                      <div className="llw-count">
                        <div className="icon-show top">
                          <img src="images/icon/wow.png" />
                        </div>
                        <div className="icon-show mid like-icon-bg">
                          <i className="fas fa-thumbs-up"></i>
                        </div>
                        <div className="icon-show low love-icon-bg">
                          <i className="fas fa-heart"></i>
                        </div>
                        <div>
                          <p className="l-count">
                            <span>11</span>
                          </p>
                        </div>
                      </div>

                      <div>
                        <p>
                          <a href="#">0 Comment</a> <a href="#">596 Share</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="actavite">
                    <div className="lcs-btn lcs-btn_i">
                      <p>
                        <i
                          id="post-icon-btn_i"
                          className="far fa-thumbs-up"
                        ></i>
                        <span id="post-icon-text_i">Like</span>
                      </p>
                    </div>
                    <div className="lcs-btn">
                      <p>
                        <i className="far fa-comment-alt"></i> Comment
                      </p>
                    </div>
                    <div className="lcs-btn">
                      <p>
                        <i className="fas fa-share"></i> Share
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default UserProfile;
