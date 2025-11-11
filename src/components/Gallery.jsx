import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Gala2025/IMG (1).jpg";
import img2 from "../../assets/images/Gala2025/IMG (2).jpg";
import img3 from "../../assets/images/Gala2025/IMG (3).jpg";
import img4 from "../../assets/images/Gala2025/IMG (4).jpg";
import img5 from "../../assets/images/Gala2025/IMG (5).jpg";
import img6 from "../../assets/images/Gala2025/IMG (6).jpg";
import img7 from "../../assets/images/Gala2025/IMG (7).jpg";
import img8 from "../../assets/images/Gala2025/IMG (8).jpg";
import img9 from "../../assets/images/Gala2025/IMG (9).jpg";
import img10 from "../../assets/images/Gala2025/IMG (10).jpg";
import img11 from "../../assets/images/Gala2025/IMG (11).jpg";
import img12 from "../../assets/images/Gala2025/IMG (12).jpg";
import img13 from "../../assets/images/Gala2025/IMG (13).jpg";
import img14 from "../../assets/images/Gala2025/IMG (14).jpg";
import img15 from "../../assets/images/Gala2025/IMG (15).jpg";
import img16 from "../../assets/images/Gala2025/IMG (16).jpg";
import img17 from "../../assets/images/Gala2025/IMG (17).jpg";
import img18 from "../../assets/images/Gala2025/IMG (18).jpg";
import img19 from "../../assets/images/Gala2025/IMG (19).jpg";
import img20 from "../../assets/images/Gala2025/IMG (20).jpg";
import img21 from "../../assets/images/Gala2025/IMG (21).jpg";
import img22 from "../../assets/images/Gala2025/IMG (22).jpg";
import img23 from "../../assets/images/Gala2025/IMG (23).jpg";
import img24 from "../../assets/images/Gala2025/IMG (24).jpg";
import img25 from "../../assets/images/Gala2025/IMG (25).jpg";
import img26 from "../../assets/images/Gala2025/IMG (26).jpg";
import img27 from "../../assets/images/Gala2025/IMG (27).jpg";
import img28 from "../../assets/images/Gala2025/IMG (28).jpg";
import img29 from "../../assets/images/Gala2025/IMG (29).jpg";
import img30 from "../../assets/images/Gala2025/IMG (30).jpg";
import img31 from "../../assets/images/Gala2025/IMG (31).jpg";
import img33 from "../../assets/images/Gala2025/IMG (33).jpg";
import img34 from "../../assets/images/Gala2025/IMG (34).jpg";
import img35 from "../../assets/images/Gala2025/IMG (35).jpg";
import img36 from "../../assets/images/Gala2025/IMG (36).jpg";
import img37 from "../../assets/images/Gala2025/IMG (37).jpg";
import img38 from "../../assets/images/Gala2025/IMG (38).jpg";
import img39 from "../../assets/images/Gala2025/IMG (39).jpg";
import img40 from "../../assets/images/Gala2025/IMG (40).jpg";
import img41 from "../../assets/images/Gala2025/IMG (41).jpg";
import img42 from "../../assets/images/Gala2025/IMG (42).jpg";
import img43 from "../../assets/images/Gala2025/IMG (43).jpg";
import img44 from "../../assets/images/Gala2025/IMG (44).jpg";
import img45 from "../../assets/images/Gala2025/IMG (45).jpg";
import img46 from "../../assets/images/Gala2025/IMG (46).jpg";
import img47 from "../../assets/images/Gala2025/IMG (47).jpg";
import img48 from "../../assets/images/Gala2025/IMG (48).jpg";
import img49 from "../../assets/images/Gala2025/IMG (49).jpg";
import img50 from "../../assets/images/Gala2025/IMG (50).jpg";
import img51 from "../../assets/images/Gala2025/IMG (51).jpg";
import img53 from "../../assets/images/Gala2025/IMG (53).jpg";
import img54 from "../../assets/images/Gala2025/IMG (54).jpg";
import img55 from "../../assets/images/Gala2025/IMG (55).jpg";
import img56 from "../../assets/images/Gala2025/IMG (56).jpg";
import img57 from "../../assets/images/Gala2025/IMG (57).jpg";
import img58 from "../../assets/images/Gala2025/IMG (58).jpg";
import img59 from "../../assets/images/Gala2025/IMG (59).jpg";
import img60 from "../../assets/images/Gala2025/IMG (60).jpg";
import img61 from "../../assets/images/Gala2025/IMG (61).jpg";
import img62 from "../../assets/images/Gala2025/IMG (62).jpg";
import img64 from "../../assets/images/Gala2025/IMG (64).jpg";
import img65 from "../../assets/images/Gala2025/IMG (65).jpg";
import img66 from "../../assets/images/Gala2025/IMG (66).jpg";
import img67 from "../../assets/images/Gala2025/IMG (67).jpg";
import img68 from "../../assets/images/Gala2025/IMG (68).jpg";
import img69 from "../../assets/images/Gala2025/IMG (69).jpg";
import img71 from "../../assets/images/Gala2025/IMG (71).jpg";
import img72 from "../../assets/images/Gala2025/IMG (72).jpg";
import img74 from "../../assets/images/Gala2025/IMG (74).jpg";
import img75 from "../../assets/images/Gala2025/IMG (75).jpg";

const Gallery = () => {
  const images = [
    img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14,
    img15, img16, img17, img48, img49, img1, img2, img18, img19, img20, img21,
    img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img33,
    img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44,
    img45, img46, img47, img50, img51, img53, img54, img55, img56, img57, img58,
    img59, img60, img61, img62, img64, img65, img66, img67, img68, img69, img71,
    img72, img74, img75,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => setSelectedIndex((i) => (i + 1) % images.length);
  const prevImage = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  // ✅ Handle keyboard events (ESC, arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`IMHO UK Charity Gala 2025 ${index + 1}`}
            className="w-full rounded-2xl shadow-lg mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Preview Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)} // click outside to close
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <img
              src={images[selectedIndex]}
              alt="preview"
              className="w-full rounded-lg max-h-[90vh] object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Close ✕
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 text-white text-3xl px-4 py-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 text-white text-3xl px-4 py-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
