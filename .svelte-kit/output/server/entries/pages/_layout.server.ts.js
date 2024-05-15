const load = ({ cookies }) => {
  const cookieStr = cookies.get("spot-user");
  if (cookieStr) {
    const session = JSON.parse(cookieStr);
    return {
      session
    };
  }
};
export {
  load
};
