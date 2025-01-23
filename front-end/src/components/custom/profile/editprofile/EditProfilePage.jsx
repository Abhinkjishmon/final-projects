import React, { useEffect, useState } from "react";
import { Save } from "lucide-react";
import ImageUpload from "./ImageUpload";
import SocialMediaInput from "./SocialMediaInput";
import AddressForm from "./AddressForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "@/redux/userInfoSlice";
import { updateUserInfo } from "@/apiService.js/auth.service";
import { Spinner } from "../..";
import { toast } from "react-toastify";

function EditProfilePage() {
  const { profileInfo } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const { id } = useParams();

  // Initialize the state with default values
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    about: "",
    experience: "",
    profileImage: "",
    coverImage: "",
    socialMedia: [],
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });
  const [changesProfileInfo, setChangesProfileInfo] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    dispatch(fetchUserProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (profileInfo) {
      setProfile({
        fullName: profileInfo.fullname || "",
        email: profileInfo.email || "",
        about: profileInfo.about || "",
        experience: profileInfo.experience || "",
        profileImage: profileInfo?.profileImg || "",
        coverImage: profileInfo.coverImage || "",
        socialMedia: profileInfo.socialMedia || [],
        address: {
          street: profileInfo.address?.street || "",
          city: profileInfo.address?.city || "",
          state: profileInfo.address?.state || "",
          country: profileInfo.address?.country || "",
          zipCode: profileInfo.address?.zipCode || "",
        },
      });
    }
  }, [profileInfo]);

  const onChangeCoverFile = (file) => {
    setChangesProfileInfo((prevProfile) => ({
      ...prevProfile,
      coverImage: file,
    }));
  };

  const onChangeProfileFile = (file) => {
    setChangesProfileInfo((prevProfile) => ({
      ...prevProfile,
      profileImage: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append basic profile fields
    formData.append("fullname", profile.fullName);
    formData.append("email", profile.email);
    formData.append("about", profile.about);
    formData.append("experience", profile.experience);
    if (changesProfileInfo.profileImage) {
      formData.append("profileImg", changesProfileInfo.profileImage);
    }
    if (changesProfileInfo.coverImage) {
      formData.append("coverImg", changesProfileInfo.coverImage);
    }
    profile.socialMedia.forEach((link, index) => {
      formData.append(`socialMediaLinks[${index}][platform]`, link.platform);
      formData.append(`socialMediaLinks[${index}][url]`, link.url);
    });
    
    // Append address fields
    Object.entries(profile.address).forEach(([key, value]) => {
      formData.append(`address[${key}]`, value);
    });
    updateUserProfile(id, formData);
  };
  async function updateUserProfile(id, formData) {
    setLoader(true);
    const response = await updateUserInfo(id, formData);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
      setLoader(false);
    } else {
      toast.success(response.message);
      setLoader(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit}>
            <ImageUpload
              label="Cover Image"
              imageUrl={profileInfo?.coverImg}
              onChange={(file) => onChangeCoverFile(file)}
              className="mb-6"
            />

            <div className="px-8 py-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <ImageUpload
                    label="Profile Image"
                    imageUrl={profileInfo?.profileImg}
                    onChange={(file) => onChangeProfileFile(file)}
                    className="w-full h-full "
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Edit Profile
                  </h1>
                  <p className="text-gray-500">
                    Update your profile information
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) =>
                        setProfile({ ...profile, fullName: e.target.value })
                      }
                      className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    About
                  </label>
                  <textarea
                    value={profile.about}
                    onChange={(e) =>
                      setProfile({ ...profile, about: e.target.value })
                    }
                    rows={4}
                    className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Experience
                  </label>
                  <textarea
                    value={profile.experience}
                    onChange={(e) =>
                      setProfile({ ...profile, experience: e.target.value })
                    }
                    rows={4}
                    className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Media
                  </label>
                  <SocialMediaInput
                    socialMedia={profile.socialMedia}
                    onChange={(socialMedia) =>
                      setProfile({ ...profile, socialMedia })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <AddressForm
                    address={profile.address}
                    onChange={(address) => setProfile({ ...profile, address })}
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save size={20} />
                  {loader ? <Spinner /> : "Save Changes"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProfilePage;
