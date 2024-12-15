import React, { useState } from "react";
import { Save } from "lucide-react";
import ImageUpload from "./ImageUpload";
import SocialMediaInput from "./SocialMediaInput";
import AddressForm from "./AddressForm";

function EditProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    about: "",
    experience: "",
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    socialMedia: [],
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile updated:", profile);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Cover Image */}
            <ImageUpload
              label="Cover Image"
              imageUrl={profile.coverImage}
              onChange={(file) => console.log("Cover image:", file)}
              className="mb-6"
            />

            <div className="px-8 py-6">
              {/* Profile Image */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <ImageUpload
                    label="Profile Image"
                    imageUrl={profile.profileImage}
                    onChange={(file) => console.log("Profile image:", file)}
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

              {/* Basic Information */}
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

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save size={20} />
                  Save Changes
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
