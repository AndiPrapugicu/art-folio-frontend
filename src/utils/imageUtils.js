const BACKEND_URL = "https://art-folio-backend.onrender.com";

export function getImageUrl(imageUrl, folder = "") {
  if (!imageUrl) return "";
  if (imageUrl.startsWith("http")) return imageUrl;
  // Dacă imageUrl începe cu /uploads, nu mai adăuga folderul
  if (imageUrl.startsWith("/uploads")) {
    return `${BACKEND_URL}${imageUrl}`;
  }
  // fallback pentru cazuri vechi
  return `${BACKEND_URL}/uploads/${folder}/${imageUrl}`;
}
