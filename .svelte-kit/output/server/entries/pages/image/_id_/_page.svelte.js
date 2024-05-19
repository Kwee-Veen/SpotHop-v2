import { c as create_ssr_component, v as validate_component, a as add_attribute, d as each } from "../../../../chunks/ssr.js";
import "devalue";
import "../../../../chunks/client.js";
import { s as subTitle } from "../../../../chunks/spot-types.js";
import { C as Chart } from "../../../../chunks/Chart.js";
import { L as LeafletMap } from "../../../../chunks/LeafletMap.js";
const css = {
  code: ".app.svelte-qhw3u1{width:auto;height:45vh}",
  map: '{"version":3,"file":"ForecastChart.svelte","sources":["ForecastChart.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { Chart } from \\"svelte-echarts\\";\\nexport let data;\\nlet tempTrend;\\nlet trendLabels;\\nlet options = {};\\nonMount(async () => {\\n  tempTrend = data.weatherTrends.tempTrend;\\n  trendLabels = data.weatherTrends.trendLabels;\\n  start();\\n});\\nfunction start() {\\n  let setOptions = {\\n    title: {\\n      text: `${data.spot.name}: Five-day Temperature Forecast`\\n    },\\n    tooltip: {\\n      trigger: \\"axis\\",\\n      axisPointer: {\\n        type: \\"cross\\",\\n        label: {\\n          backgroundColor: \\"#a1360b\\"\\n        }\\n      }\\n    },\\n    toolbox: {\\n      feature: {\\n        dataZoom: {},\\n        saveAsImage: {}\\n      }\\n    },\\n    grid: {\\n      left: \\"3%\\",\\n      right: \\"4%\\",\\n      bottom: \\"3%\\",\\n      containLabel: true\\n    },\\n    xAxis: [\\n      {\\n        type: \\"category\\",\\n        boundaryGap: false,\\n        data: trendLabels\\n      }\\n    ],\\n    yAxis: [\\n      {\\n        type: \\"value\\"\\n      }\\n    ],\\n    series: [\\n      {\\n        name: `\\\\xB0C`,\\n        type: \\"line\\",\\n        stack: \\"Total\\",\\n        areaStyle: {},\\n        emphasis: {\\n          focus: \\"series\\"\\n        },\\n        data: tempTrend,\\n        color: [\\n          \\"#f7d50f\\",\\n          \\"#73a373\\",\\n          \\"#73b9bc\\",\\n          \\"#7289ab\\",\\n          \\"#91ca8c\\",\\n          \\"#f49f42\\"\\n        ]\\n      }\\n    ]\\n  };\\n  options = setOptions;\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"app\\">\\r\\n  <Chart {options} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .app {\\r\\n    width: auto;\\r\\n    height: 45vh;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+EE,kBAAK,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'
};
const ForecastChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let options = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="app svelte-qhw3u1">${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Weather & Images");
  let { widget } = $$props;
  let { imageFiles } = $$props;
  let { data } = $$props;
  let spot = data.spot;
  let returnedURL;
  let map;
  if ($$props.widget === void 0 && $$bindings.widget && widget !== void 0)
    $$bindings.widget(widget);
  if ($$props.imageFiles === void 0 && $$bindings.imageFiles && imageFiles !== void 0)
    $$bindings.imageFiles(imageFiles);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="box has-background-warning"><div class="columns has-background-white is-vcentered"><div class="column is-half">${validate_component(ForecastChart, "ForecastChart").$$render($$result, { data }, {}, {})}</div> <div class="column is-half">${validate_component(LeafletMap, "LeafletMap").$$render(
      $$result,
      {
        height: 44,
        zoom: 7,
        activeLayer: "Terrain",
        data,
        this: map
      },
      {
        this: ($$value) => {
          map = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <form method="POST" action="?/uploadImage"${add_attribute("this", imageFiles, 0)}><input type="hidden" placeholder="Image URL" name="returnedURL"${add_attribute("value", returnedURL, 0)}></form> <section class="content box has-background-link-light"><div class="columns is-centered mt-2 mb-4"><box class="box"><button class="button is-danger is-medium has-text-weight-bold" data-svelte-h="svelte-rn1jhp">Upload New Image</button></box></div> <div class="columns is-centered"><div class="column is-10">${spot.img ? `<div class="columns is-multiline is-mobile">${each(spot.img, (image) => {
      return `<div class="column is-6"><div class="box p-2"><img${add_attribute("src", image, 0)} class="image" alt="uploaded spot"> <div class="column is-narrow has-text-centered"><b data-svelte-h="svelte-1j30tal">Delete</b> <form method="POST" action="?/deleteImage"><input type="hidden" name="deleteImageId"${add_attribute("value", image, 0)}> <div class="text has-text-centered" data-svelte-h="svelte-u22lu3"><button class="button"><span class="icon is-small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FF0000" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg> </span></button> </div></form> </div></div> </div>`;
    })}</div>` : ``}</div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
