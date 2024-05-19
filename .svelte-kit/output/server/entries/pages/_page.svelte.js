import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle } from "../../chunks/spot-types.js";
const SplashScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight is-default is-bold" data-svelte-h="svelte-100w0h4"><div class="hero-head"></div> <div class="hero-body"><div class="container has-text-centered"><div class="columns is-vcentered"><div class="column is-narrow mr-6 ml-6"><box class="box has-background-danger-dark"><div class="column has-background-white"><box class="box has-background-link-dark"><h1 class="title is-2 mb-2 has-text-white"><span class="icon mr-6"><i class="fas fa-map-marker-alt"></i></span><span class="icon mr-3 mb-3"><i class="fas fa-vote-yea"></i></span> <p>SpotHop</p></h1></box> <h2 class="subtitle is-5 pl-3 pr-3 pb-3 is-italic">Make visual diaries of the places you&#39;ve been<br><br>Be
                inspired by the trips &amp; holidays of others<br><br><br>Create spots with photos &amp; descriptions,<br><br> with auto
                map marking by category</h2> <p class="has-text-centered pb-3"><a class="button is-medium is-danger mr-5" href="/signup"><span class="icon"><i class="fas fa-plus"></i></span><span>Sign Up</span></a> <a class="button is-medium is-primary ml-5" href="/login"><span class="icon"><i class="fas fa-sign-in-alt"></i></span><span>Login</span></a></p></div></box></div> <div class="column is-6"><box class="box has-background-light"><figure class="image"><img class="object-fit" src="/spotHop_init.jpg" alt="SpotHop welcome"></figure></box></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("SpotHop");
  return `${validate_component(SplashScreen, "SplashScreen").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
