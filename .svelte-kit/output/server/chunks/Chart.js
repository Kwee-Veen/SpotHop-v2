import { c as create_ssr_component } from "./ssr.js";
import "echarts";
const css = {
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
  $$result.css.add(css);
  return `<div class="chart svelte-sg3l42"></div>`;
});
export {
  Chart as C
};
