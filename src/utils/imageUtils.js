const API_URL =
  import.meta.env.VITE_API_URL || "https://art-folio-backend.onrender.com/api";

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/placeholder-image.jpg";

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  if (imagePath.startsWith("/uploads")) {
    return `${API_URL}${imagePath}`;
  }

  return `${API_URL}/uploads/${imagePath}`;
};
