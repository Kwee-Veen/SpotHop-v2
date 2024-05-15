import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
import "echarts";
import { S as SpotList } from "../../../chunks/SpotList.js";
const css$2 = {
  code: ".chart.svelte-sg3l42{height:100%;width:100%}",
  map: '{"version":3,"file":"Chart.svelte","sources":["Chart.svelte"],"sourcesContent":["<script context=\\"module\\">import * as echarts from \\"echarts\\";\\nconst DEFAULT_OPTIONS = {\\n  theme: void 0,\\n  renderer: \\"canvas\\"\\n};\\nexport function chartable(element, echartOptions) {\\n  const { theme, renderer, options } = {\\n    ...DEFAULT_OPTIONS,\\n    ...echartOptions\\n  };\\n  const echartsInstance = echarts.init(element, theme, { renderer });\\n  echartsInstance.setOption(options);\\n  function handleResize() {\\n    echartsInstance.resize();\\n  }\\n  window.addEventListener(\\"resize\\", handleResize);\\n  return {\\n    destroy() {\\n      echartsInstance.dispose();\\n      window.removeEventListener(\\"resize\\", handleResize);\\n    },\\n    update(newOptions) {\\n      echartsInstance.setOption({\\n        ...echartOptions.options,\\n        ...newOptions.options\\n      });\\n    }\\n  };\\n}\\n<\/script>\\n\\n<script>export let options;\\nexport let { theme, renderer } = DEFAULT_OPTIONS;\\n<\/script>\\n\\n<div class=\\"chart\\" use:chartable={{ renderer, theme, options }} />\\n\\n<style>\\n  .chart {\\n    height: 100%;\\n    width: 100%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsCE,oBAAO,CACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT"}'
};
const DEFAULT_OPTIONS = { theme: void 0, renderer: "canvas" };
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { theme: theme_1, renderer: renderer_1 } = DEFAULT_OPTIONS;
  let { theme = theme_1, renderer = renderer_1 } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  $$result.css.add(css$2);
  return `<div class="chart svelte-sg3l42"></div>`;
});
const css$1 = {
  code: ".app.svelte-1ju83l1{width:40vw;height:45vh}",
  map: `{"version":3,"file":"CategoryChart.svelte","sources":["CategoryChart.svelte"],"sourcesContent":["<script lang='ts'>import { onMount } from \\"svelte\\";\\nimport { Chart } from \\"svelte-echarts\\";\\nexport let data;\\nlet spotList = [];\\nlet options = {};\\nlet dataInput = [\\n  { value: 0, name: \\"Site\\" },\\n  { value: 0, name: \\"Locale\\" },\\n  { value: 0, name: \\"Activity\\" },\\n  { value: 0, name: \\"Scenery\\" },\\n  { value: 0, name: \\"Structure\\" },\\n  { value: 0, name: \\"Shopping\\" },\\n  { value: 0, name: \\"Uncategorised\\" }\\n];\\nonMount(async () => {\\n  spotList = data.spots;\\n  spotList.forEach((spot) => {\\n    if (spot.category == \\"Site\\") {\\n      dataInput[0].value += 1;\\n    }\\n    if (spot.category == \\"Locale\\") {\\n      dataInput[1].value += 1;\\n    }\\n    if (spot.category == \\"Activity\\") {\\n      dataInput[2].value += 1;\\n    }\\n    if (spot.category == \\"Scenery\\") {\\n      dataInput[3].value += 1;\\n    }\\n    if (spot.category == \\"Structure\\") {\\n      dataInput[4].value += 1;\\n    }\\n    if (spot.category == \\"Shopping\\") {\\n      dataInput[5].value += 1;\\n    }\\n    if (spot.category == \\"Uncategorised\\") {\\n      dataInput[6].value += 1;\\n    }\\n  });\\n  start();\\n});\\nfunction start() {\\n  let setOptions = {\\n    tooltip: {\\n      trigger: \\"item\\"\\n    },\\n    legend: {\\n      top: \\"0%\\",\\n      left: \\"center\\"\\n    },\\n    responsive: true,\\n    maintainAspectRatio: false,\\n    series: [\\n      {\\n        name: \\"Spot Category\\",\\n        type: \\"pie\\",\\n        radius: [\\"40%\\", \\"70%\\"],\\n        avoidLabelOverlap: false,\\n        itemStyle: {\\n          borderRadius: 7,\\n          borderColor: \\"#fff\\",\\n          borderWidth: 5\\n        },\\n        label: {\\n          show: false,\\n          position: \\"center\\"\\n        },\\n        emphasis: {\\n          label: {\\n            show: true,\\n            fontSize: 12,\\n            fontWeight: \\"bold\\"\\n          }\\n        },\\n        labelLine: {\\n          show: false\\n        },\\n        data: dataInput\\n      }\\n    ]\\n  };\\n  options = setOptions;\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"app\\">\\r\\n  <Chart {options} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .app {\\r\\n    width: 40vw;\\r\\n    height: 45vh;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0FE,mBAAK,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}`
};
const CategoryChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let options = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="app svelte-1ju83l1">${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} </div>`;
});
const css = {
  code: ".app.svelte-1jlfegy{width:42.25vw;height:45vh}",
  map: '{"version":3,"file":"UserChart.svelte","sources":["UserChart.svelte"],"sourcesContent":["<script lang=\'ts\'>import { onMount } from \\"svelte\\";\\nimport { Chart } from \\"svelte-echarts\\";\\nexport let data;\\nlet userList = [];\\nlet userSpotCount = [];\\nlet options = {};\\nonMount(async () => {\\n  userSpotCount = data.userSpots;\\n  const users = data.users;\\n  users.forEach((user) => {\\n    if (user.firstName && user.lastName) {\\n      let s = `${user.firstName} ${user.lastName}`;\\n      userList.push(s);\\n    }\\n  });\\n  start();\\n});\\nfunction start() {\\n  let setOptions = {\\n    tooltip: {\\n      trigger: \\"axis\\",\\n      axisPointer: {\\n        type: \\"shadow\\"\\n      }\\n    },\\n    grid: {\\n      left: \\"3%\\",\\n      right: \\"4%\\",\\n      bottom: \\"3%\\",\\n      top: \\"2%\\",\\n      containLabel: true\\n    },\\n    xAxis: [\\n      {\\n        type: \\"category\\",\\n        data: userList,\\n        axisTick: {\\n          alignWithLabel: true\\n        }\\n      }\\n    ],\\n    yAxis: [\\n      {\\n        type: \\"value\\"\\n      }\\n    ],\\n    series: [\\n      {\\n        name: \\"Direct\\",\\n        type: \\"bar\\",\\n        barWidth: \\"60%\\",\\n        data: userSpotCount\\n      }\\n    ]\\n  };\\n  options = setOptions;\\n}\\n<\/script>\\r\\n\\r\\n  <div class=\\"app\\">\\r\\n    <Chart {options} />\\r\\n  </div>\\r\\n  \\r\\n  <style>\\r\\n    .app {\\r\\n      width: 42.25vw;\\r\\n      height: 45vh;\\r\\n    }\\r\\n  </style>\\r\\n  "],"names":[],"mappings":"AAgEI,mBAAK,CACH,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IACV"}'
};
const UserChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let options = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="app svelte-1jlfegy">${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Spot Report");
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="columns is-mobile"><div class="column is-half"><div class="card"><div class="columns is-mobile" data-svelte-h="svelte-15exizn"><div class="column is-one-quarter"></div> <div class="column is-one-half"><div class="box has-background-danger-dark"><h4 class="text has-text-centered has-text-white">Spots by Category</h4></div></div> <div class="column is-one-quarter"></div></div> ${validate_component(CategoryChart, "CategoryChart").$$render($$result, { data }, {}, {})}</div></div> <div class="column is-half"><div class="card"><div class="columns is-mobile" data-svelte-h="svelte-17orlel"><div class="column is-one-quarter"></div> <div class="column is-one-half"><div class="box has-background-link-dark"><h4 class="text has-text-centered has-text-white">Spots by User</h4></div></div> <div class="column is-one-quarter"></div></div> ${validate_component(UserChart, "UserChart").$$render($$result, { data }, {}, {})}</div></div></div>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SpotList, "SpotList").$$render($$result, { spots: data.spots }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
