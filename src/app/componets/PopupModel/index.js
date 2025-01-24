import React, { useState, useEffect } from "react";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  // Show the modal automatically after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 15 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden sm:flex">
          {/* Modal Content */}
          <div
            className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url('/images/1.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;


