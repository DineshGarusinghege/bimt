import React, { useState, useEffect } from "react";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  // Show the modal automatically after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // Change to 15000 for 15 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
          onClick={handleClose} // Close when clicking outside modal
        >
          {/* Modal Content */}
          <div
            className="relative rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-h-[80vh] aspect-video bg-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Background Image */}
            <div 
              className="w-full h-full absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/AE_Meet-Ravi-Ravi-1024x576 (1).png')"
              }}
            ></div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center z-10"
              onClick={handleClose}
            >
              &times;
            </button>

            {/* Transparent Overlay for Content */}
            <div className="relative p-4 text-center text-white z-10">
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
