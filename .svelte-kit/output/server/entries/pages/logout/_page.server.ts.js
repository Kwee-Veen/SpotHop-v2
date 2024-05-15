const load = async ({ cookies }) => {
  cookies.delete("donation-user", { path: "/" });
};
export {
  load
};
