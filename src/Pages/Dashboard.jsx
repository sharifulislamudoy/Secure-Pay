import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaSignOutAlt, FaSave, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const { userData, setUserData, logout } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const navigate = useNavigate();

  // Load userData from localStorage if not present
  useEffect(() => {
    if (!userData) {
      const savedData = localStorage.getItem('registrationData');
      if (savedData) {
        setUserData(JSON.parse(savedData));
      }
    }
  }, [userData, setUserData]);

  const [formData, setFormData] = useState({
    name: userData?.name || '',
    photo: userData?.photo || '',
    phone: userData?.phone || '',
    address: userData?.address || '',
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        photo: userData.photo || '',
        phone: userData.phone || '',
        address: userData.address || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setLoadingAction('edit');
    setTimeout(() => {
      setIsEditing(true);
      setLoadingAction(null);
    }, 500);
  };

  const handleCancel = () => {
    setLoadingAction('cancel');
    setTimeout(() => {
      setIsEditing(false);
      setFormData({
        name: userData?.name || '',
        photo: userData?.photo || '',
        phone: userData?.phone || '',
        address: userData?.address || '',
      });
      setLoadingAction(null);
    }, 500);
  };

  const handleSave = () => {
    setLoadingAction('save');
    setTimeout(() => {
      const updatedData = {
        ...userData,
        name: formData.name,
        photo: formData.photo,
        phone: formData.phone,
        address: formData.address,
      };
      setUserData(updatedData);
      localStorage.setItem('registrationData', JSON.stringify(updatedData));
      setIsEditing(false);
      setLoadingAction(null);
    }, 500);
  };

  const handleLogout = () => {
    setLoadingAction('logout');
    logout()
      .then(() => {
        localStorage.removeItem('registrationData');
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch((err) => {
        console.error(err);
        setLoadingAction(null);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={
              formData.photo && formData.photo.trim() !== ''
                ? formData.photo
                : 'https://i.ibb.co/5cL0gP7/avatar-placeholder.png'
            }
            alt="User"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
          />
          {isEditing ? (
            <>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="border p-2 rounded text-center mb-2 text-gray-500"
                placeholder="Photo URL"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded text-center text-gray-500"
                placeholder="Name"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-black">{userData?.name}</h2>
              <p className="text-gray-500">{userData?.email}</p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
          {isEditing ? (
            <>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-1 border p-2 rounded"
                placeholder="Phone"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="col-span-1 border p-2 rounded"
                placeholder="Address"
              />
            </>
          ) : (
            <>
              <div><strong>Phone:</strong> {userData?.phone || 'N/A'}</div>
              <div><strong>Address:</strong> {userData?.address || 'N/A'}</div>
            </>
          )}
          <div><strong>NID:</strong> {userData?.id || 'N/A'}</div>
          <div><strong>Date of Birth:</strong> {userData?.birth || 'N/A'}</div>
          <div><strong>Occupation:</strong> {userData?.occupation || 'N/A'}</div>
          <div><strong>Account Type:</strong> {userData?.accountType || 'Standard'}</div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex justify-center items-center gap-2"
                disabled={loadingAction === 'save'}
              >
                {loadingAction === 'save' ? (
                  <span className="loading loading-spinner text-success"></span>
                ) : (
                  <>
                    <FaSave /> Save
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 flex justify-center items-center gap-2"
                disabled={loadingAction === 'cancel'}
              >
                {loadingAction === 'cancel' ? (
                  <span className="loading loading-spinner text-neutral"></span>
                ) : (
                  <>
                    <FaTimes /> Cancel
                  </>
                )}
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex justify-center items-center gap-2"
              disabled={loadingAction === 'edit'}
            >
              {loadingAction === 'edit' ? (
                <span className="loading loading-spinner text-info"></span>
              ) : (
                <>
                  <FaEdit /> Edit Profile
                </>
              )}
            </button>
          )}

          <button
            onClick={handleLogout}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex justify-center items-center gap-2"
            disabled={loadingAction === 'logout'}
          >
            {loadingAction === 'logout' ? (
              <span className="loading loading-spinner text-error"></span>
            ) : (
              <>
                <FaSignOutAlt /> Logout
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
