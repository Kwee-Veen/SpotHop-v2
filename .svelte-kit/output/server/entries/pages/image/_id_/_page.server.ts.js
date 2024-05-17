import { s as spotService } from "../../../../chunks/spot-service.js";
import "../../../../chunks/index.js";
import "../../../../chunks/spot.js";
import { c as cloudinary_name, a as cloudinary_key, b as cloudinary_secret, d as cloudinary_preset } from "../../../../chunks/private.js";
const ssr = false;
const load = async ({ cookies, params }) => {
  const cookieStr = cookies.get("spot-user");
  if (cookieStr) {
    const id = encodeURI(params.id);
    const spot = await spotService.getSpotById(id);
    return {
      spot,
      cloudinary_name,
      cloudinary_key,
      cloudinary_secret,
      cloudinary_preset
    };
  }
};
export {
  load,
  ssr
};
