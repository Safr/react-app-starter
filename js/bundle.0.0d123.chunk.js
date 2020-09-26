/*! For license information please see bundle.0.0d123.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(12)},12:function(e,t,n){"use strict";(function(e){var t=n(14);n(15);var r=t(n(18)),o=t(n(19)),a=t(n(22)),i=n(26),s=t(n(30)),l=(0,i.getEnv)(),c=l.isProduction;function u(e){a.default.render(e,window.document.getElementById("root"))}l.withHot&&e.hot.accept(["./core/Root"],(function(){var e=n(30).Root;u(o.default.createElement(o.default.StrictMode,null,o.default.createElement(e,null)))})),u(o.default.createElement(s.default,null)),c&&r.default.install()}).call(this,n(13)(e))},143:function(e,t,n){"use strict";var r=n(27);t.__esModule=!0,t.SelectWrapper=t.Select=t.Overlay=t.Option=t.CurrentLanguage=t.ArrowElement=void 0;var o=r(n(66)),a=n(144),i=o.default.div.withConfig({componentId:"sc-1lsnnu1-0"})((function(e){var t=e.reverse,n=e.theme.palette.secondary;return(0,o.css)(["width:0;height:0;margin-left:0.3em;opacity:0.9;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid ",";transition:transform 400ms ease;&:hover{opacity:1;}transform:",";"],n,void 0!==t&&t&&"rotate(180deg)")}));t.ArrowElement=i;var s=o.default.div.withConfig({componentId:"sc-1lsnnu1-1"})(["font-size:12px;color:#000;"]);t.CurrentLanguage=s;var l=o.default.div.withConfig({componentId:"sc-1lsnnu1-2"})((function(){return(0,o.css)(["display:flex;padding-right:15px;padding-left:10px;justify-content:flex-start;width:100%;min-height:35px;font-size:80%;line-height:35px;text-decoration:none;transition:all 200ms ease-in-out;cursor:pointer;color:#000;&:hover{color:#ccc;}"])}));t.Option=l;var c=o.default.div.withConfig({componentId:"sc-1lsnnu1-3"})((function(e){var t=e.showed;return(0,o.css)(["display:",";position:fixed;left:0;right:0;top:0;z-index:2;height:100%;background-color:rgba(0,0,0,0.3);"],void 0!==t&&t?"block":"none")}));t.Overlay=c;var u=o.default.div.withConfig({componentId:"sc-1lsnnu1-4"})((function(e){var t=e.showed,n=void 0!==t&&t;return(0,o.css)(["position:absolute;left:auto;bottom:auto;top:18px;right:1px;z-index:4;width:auto;margin-top:40px;font-size:14px;border-radius:0;overflow-y:hidden;visibility:",";opacity:",";& > div{position:static;overflow-y:hidden;height:auto;}"],n?"visible":"hidden",n?"1":"0")}));t.Select=u;var p=o.default.div.withConfig({componentId:"sc-1lsnnu1-5"})((function(){return(0,o.css)(["display:flex;padding:1px 15px 0 10px;justify-content:flex-start;align-items:center;min-height:36px;margin-left:10px;color:rgba(255,255,255,0.7);font-size:12px;line-height:1.3em;font-weight:400;text-align:center;text-transform:none;border-radius:0;background-color:transparent;cursor:pointer;transition:",";&:hover{color:#fff;}"],(0,a.createTransition)(["background-color"],{duration:200,easing:"ease-in"}))}));t.SelectWrapper=p},144:function(e,t,n){"use strict";n(145),n(84),t.__esModule=!0,t.createTransition=function(e,t){void 0===e&&(e=["all"]);var n=void 0===t?{}:t,r=n.duration,o=void 0===r?m.animations.duration:r,a=n.easing,i=void 0===a?m.animations.easing:a,s=n.delay,l=void 0===s?0:s,c=function(e){return Math.round(e)+"ms"};return(Array.isArray(e)?e:[e]).map((function(e){return e+" "+("string"==typeof o?o:c(o))+" "+i+" "+("string"==typeof l?l:c(l))})).join(",")},t.theme=void 0;var r,o,a,i,s,l,c,u,p=n(147),d=n(148),f=n(149),g=n(150),m=(a=(o=r||{}).palette,i=void 0===a?{}:a,s=o.typography,l=void 0===s?{}:s,c=(0,p.createPalette)(i),u=(0,d.createTypography)(l),{animations:{duration:100,easing:"ease-in-out"},palette:c,spacing:g.spacing,typography:u,zIndex:f.zIndex});t.theme=m},147:function(e,t,n){"use strict";t.__esModule=!0,t.createPalette=void 0;t.createPalette=function(e){var t=e.white,n=void 0===t?"#fff":t,r=e.grey,o=void 0===r?"#f7f9fa":r,a=e.black,i=void 0===a?"#222":a,s=e.primary,l=void 0===s?"#6d30e7":s,c=e.secondary;return{white:n,grey:o,black:i,primary:l,secondary:void 0===c?"#dfdded":c}}},148:function(e,t,n){"use strict";t.__esModule=!0,t.createTypography=void 0;t.createTypography=function(e){var t=e.fontFamily,n=void 0===t?"'PX Grotesk', sansSerif":t,r=e.fontSize,o=void 0===r?14:r,a=e.htmlFontSize,i=void 0===a?16:a,s=e.fontWeightNormal,l=void 0===s?400:s,c=e.fontWeightLight,u=void 0===c?300:c,p=e.fontWeightBold,d=void 0===p?700:p,f=function(e){return e/i*(o/14)+"rem"};return{fontFamily:n,fontSizeH1:f(96),fontSizeH2:f(60),fontSizeH3:f(48),fontSizeH4:f(34),fontSizeH5:f(24),fontSizeH6:f(20),fontSizeButton:f(14),fontWeightNormal:l,fontWeightLight:u,fontWeightBold:d}}},149:function(e,t,n){"use strict";t.__esModule=!0,t.zIndex=void 0;t.zIndex={modal:1300,tooltip:1500}},150:function(e,t,n){"use strict";t.__esModule=!0,t.spacing=void 0;t.spacing={unit:8}},151:function(e,t,n){"use strict";var r=n(14);t.__esModule=!0,t.BaseLayoutWrapper=void 0;var o=r(n(66)).default.div.withConfig({componentId:"rggvy4-0"})(["height:100%;display:flex;flex-direction:column;min-height:100vh;"]);t.BaseLayoutWrapper=o},152:function(e,t,n){"use strict";var r=n(153);t.__esModule=!0,t.routes=void 0,t.routes=r.routes},153:function(e,t,n){"use strict";n(154),n(158),t.__esModule=!0,t.routes=void 0;var r=n(179),o=[{component:(0,r.lazy)((function(){return Promise.all([n.e(6),n.e(3)]).then(n.t.bind(null,189,7))})),exact:!0,path:"/"},{component:(0,r.lazy)((function(){return Promise.all([n.e(6),n.e(5)]).then(n.t.bind(null,213,7))})),exact:!0,path:"/about"},{component:(0,r.lazy)((function(){return Promise.all([n.e(6),n.e(4)]).then(n.t.bind(null,214,7))}))}];t.routes=o},180:function(e,t,n){"use strict";var r=n(14);t.__esModule=!0,t.GlobalStyles=void 0;var o=r(n(181)),a=n(66),i=r(n(70));function s(){var e=(0,o.default)(["\n  ","\n\n  html {\n    box-sizing: border-box;\n    height: 100%;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  #root,\n  body,\n  html {\n    min-width: 320px;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    font-family: 'Tt norms', sans-serif;\n    scroll-behavior: smooth;\n    text-rendering: optimizeSpeed;\n  }\n\n  #root {\n    flex: 1;\n    height: 100%;\n  }\n\n  textarea {\n    resize: none;\n    overflow: auto;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  [type='button'],\n  [type='reset'],\n  [type='submit'],\n  button {\n    -webkit-appearance: button;\n    -webkit-tap-highlight-color: transparent;\n  }\n"]);return s=function(){return e},e}var l=(0,a.createGlobalStyle)(s(),i.default);t.GlobalStyles=l},182:function(e,t,n){"use strict";var r=n(14);n(154),n(183),t.__esModule=!0,t.ErrorBoundary=void 0;var o=r(n(185)),a=r(n(19)),i=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={hasError:!1,error:null},t}(0,o.default)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){var e=this.state,t=e.hasError,n=e.error,r=this.props.children;return t?a.default.createElement("div",null,a.default.createElement("h1",null,"Something went wrong."),a.default.createElement("pre",null,n.toString())):r},t}(a.default.Component);t.ErrorBoundary=i},186:function(e,t,n){"use strict";var r=n(14)(n(187)),o=n(144);t.__esModule=!0,t.ProgressBar=r.default,r.default.config({barColors:{0:o.theme.palette.primary,.7:o.theme.palette.black},shadowBlur:2,barThickness:2})},26:function(e,t,n){"use strict";var r=n(27)(n(29));t.__esModule=!0,t.getEnv=function(){var e=r.version;return{isAnalyze:!1,isProduction:!0,isDevelopment:!1,withHot:!1,appVersion:e,API_URL:"",PUBLIC_URL:"/"}}},29:function(e){e.exports=JSON.parse('{"name":"@safr/react-starter","version":"1.0.0","description":"Fully enhanced React Starter for SPA apps","keywords":["babel","jest","react","storybook","styled-components","typescript","webpack"],"homepage":"https://safr.github.io/react-app-starter/","bugs":{"url":"https://github.com/safr/react-app-starter/issues"},"repository":{"type":"git","url":"https://github.com/safr/react-app-starter"},"engines":{"npm":">=6.14.5","node":">=12.18.3"},"author":"Safr","license":"MIT","main":"src/index.tsx","husky":{"hooks":{"pre-commit":"tsc --noEmit --skipLibCheck && lint-staged"}},"lint-staged":{"*.{js, jsx, ts,tsx}":["eslint --no-ignore --fix","stylelint","prettier --write","git add"],".{json, md}":["prettier --write","git add"]},"scripts":{"analyze":"cross-env NODE_ENV=analyze webpack-bundle-analyzer \\"./dist/stats.json\\"","start":"cross-env NODE_ENV=development webpack-dev-server --port=8080 --history-api-fallback --config webpack/config/dev.babel.js","build":"cross-env NODE_ENV=production webpack --mode production --config webpack/config/prod.babel.js --color -p --progress --hide-modules --display-optimization-bailout","build:clean":"rimraf ./dist","build-storybook":"build-storybook","storybook":"start-storybook -p 6006","deploy":"npm run build && gh-pages -d dist","lint":"eslint . --ext .js,.jsx,.ts,.tsx --color && stylelint --color --config ./.stylelintrc \\"./src/**/*.{js,ts,tsx,jsx}\\" && tsc --noEmit --pretty","lint:autofix":"eslint . --ext .ts --ext .tsx --fix && stylelint \\"./src/**/*.{js,ts,tsx,jsx}\\"","precommit":"lint-staged","prettify":"prettier --config .prettierrc --write \\"{src,tests}/**/*.{js,ts,tsx,jsx}\\"","serve":"npm run build && node express.ts","test":"cross-env NODE_ENV=test jest --color --config=jest.config.js","test:watch":"npm run test --watch --notify","test:coverage":"npm run test --coverage","test:clean":"rimraf ./coverage","cypress":"cypress open","cypress:headless":"cypress run --browser chrome --headless","test:e2e":"start-server-and-test \'npm run start\' 3000 \'npm run cypress\'","test:e2e:ci":"start-server-and-test \'npm run start\' 3000 \'npm run cypress:headless\'"},"devDependencies":{"@babel/cli":"^7.10.5","@babel/core":"^7.10.5","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-proposal-export-namespace-from":"^7.10.4","@babel/plugin-proposal-object-rest-spread":"^7.11.0","@babel/plugin-proposal-optional-chaining":"^7.11.0","@babel/plugin-proposal-pipeline-operator":"^7.10.5","@babel/plugin-syntax-async-generators":"^7.8.4","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-classes":"^7.10.4","@babel/plugin-transform-modules-commonjs":"^7.10.4","@babel/plugin-transform-react-constant-elements":"^7.10.4","@babel/plugin-transform-react-inline-elements":"^7.10.4","@babel/plugin-transform-react-jsx-source":"^7.10.5","@babel/plugin-transform-runtime":"^7.11.5","@babel/preset-env":"^7.10.4","@babel/preset-react":"^7.10.4","@babel/preset-typescript":"^7.10.4","@babel/register":"^7.11.5","@babel/runtime-corejs3":"^7.11.2","@cypress/code-coverage":"^3.8.1","@cypress/webpack-preprocessor":"^5.4.5","@loadable/babel-plugin":"^5.13.2","@storybook/addon-a11y":"^6.0.21","@storybook/addon-actions":"^6.0.21","@storybook/addon-backgrounds":"^6.0.21","@storybook/addon-essentials":"^6.0.21","@storybook/addon-info":"^5.3.21","@storybook/addon-knobs":"^6.0.21","@storybook/addon-links":"^6.0.21","@storybook/addon-storyshots":"^6.0.21","@storybook/addon-viewport":"^6.0.21","@storybook/addons":"^6.0.21","@storybook/react":"^6.0.21","@svgr/webpack":"^5.4.0","@testing-library/cypress":"^7.0.0","@testing-library/dom":"^7.24.1","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.0.2","@testing-library/react-hooks":"^3.4.1","@testing-library/user-event":"^12.1.4","@types/jest":"^26.0.5","@types/loadable__component":"^5.13.0","@types/node":"^14.0.23","@types/ramda":"^0.27.17","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-helmet":"^6.1.0","@types/react-router-config":"^5.0.1","@types/react-router-dom":"^5.1.5","@types/storybook__addon-info":"^5.2.1","@types/storybook__addon-storyshots":"^5.3.1","@types/styled-components":"^5.1.3","@types/testing-library__cypress":"^5.0.6","@types/webpack":"^4.41.22","@types/webpack-dev-server":"^3.11.0","@types/webpack-merge":"^4.1.5","@typescript-eslint/eslint-plugin":"^4.1.1","@typescript-eslint/parser":"^3.6.1","app-root-path":"^3.0.0","awesome-typescript-loader":"^5.2.1","babel-loader":"^8.1.0","babel-plugin-dynamic-import-node":"^2.3.3","babel-plugin-react-remove-properties":"^0.3.0","babel-plugin-styled-components":"^1.11.1","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","babel-plugin-transform-react-remove-prop-types":"^0.4.24","babel-preset-minify":"^0.5.1","cachemanifest-webpack-plugin":"^1.0.2","circular-dependency-plugin":"^5.2.0","clean-webpack-plugin":"^3.0.0","cname-webpack-plugin":"^2.0.1","compression-webpack-plugin":"^5.0.2","copy-webpack-plugin":"^6.1.0","cross-env":"^7.0.2","css-loader":"^3.6.0","cypress":"^5.1.0","dotenv-webpack":"^2.0.0","duplicate-package-checker-webpack-plugin":"^3.0.0","eslint":"^7.5.0","eslint-config-airbnb-typescript":"^10.0.0","eslint-config-prettier":"^6.11.0","eslint-loader":"^4.0.2","eslint-plugin-cypress":"^2.11.1","eslint-plugin-import":"^2.22.0","eslint-plugin-jest-dom":"^3.2.3","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.20.6","eslint-plugin-react-hooks":"^4.1.1","eslint-plugin-styled-components-config":"0.0.2","eslint-plugin-testing-library":"^3.8.0","express":"^4.17.1","favicons-webpack-plugin":"^4.2.0","file-loader":"^6.0.0","fork-ts-checker-webpack-plugin":"^5.1.0","friendly-errors-webpack-plugin":"^1.7.0","gh-pages":"^3.1.0","html-webpack-plugin":"^4.3.0","husky":"^4.3.0","identity-obj-proxy":"^3.0.0","imagemin-mozjpeg":"^9.0.0","imagemin-pngquant":"^9.0.1","imagemin-svgo":"^8.0.0","imagemin-webpack":"^5.1.1","jest":"^26.1.0","jest-styled-components":"^7.0.3","lint-staged":"^10.3.0","mini-css-extract-plugin":"^0.11.1","msw":"^0.21.0","offline-plugin":"^5.0.7","open-browser-webpack-plugin":"0.0.5","optimize-css-assets-webpack-plugin":"^5.0.4","prerender-spa-plugin":"^3.4.0","prettier":"^2.0.5","react-test-renderer":"^16.13.1","rimraf":"^3.0.2","script-ext-html-webpack-plugin":"^2.1.4","source-map-loader":"^1.1.0","start-server-and-test":"^1.11.3","storybook":"^6.0.21","storybook-addon-react-docgen":"^1.2.42","style-loader":"^1.2.1","stylelint":"^13.7.0","stylelint-config-standard":"^20.0.0","stylelint-config-styled-components":"^0.1.1","stylelint-custom-processor-loader":"^0.6.0","stylelint-processor-styled-components":"^1.10.0","svg-inline-loader":"^0.8.2","terser-webpack-plugin":"^4.1.0","ts-jest":"^26.3.0","typescript":"^4.0.2","webpack":"^4.43.0","webpack-bundle-analyzer":"^3.8.0","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","webpack-manifest-plugin":"^2.2.0","webpack-merge":"^4.2.2","webpack-pwa-manifest":"^4.2.0","webpackbar":"^4.0.0","worker-loader":"^3.0.2"},"dependencies":{"@hot-loader/react-dom":"^16.13.0","@loadable/component":"^5.13.2","axios":"^0.20.0","core-js":"^3.6.5","i18next":"^19.7.0","i18next-browser-languagedetector":"^6.0.1","polished":"^3.6.6","ramda":"^0.27.1","react":"^16.13.1","react-app-polyfill":"^1.0.6","react-dom":"^16.13.1","react-helmet":"^6.1.0","react-hook-form":"^6.8.2","react-hot-loader":"^4.12.21","react-i18next":"^11.7.2","react-query":"^2.17.2","react-query-devtools":"^2.4.7","react-router-config":"^5.1.1","react-router-dom":"^5.2.0","react-toastify":"^6.0.8","react-topbar-progress-indicator":"^4.1.0","react-use":"^15.3.4","reflect-metadata":"^0.1.13","styled-components":"^5.2.0","styled-normalize":"^8.0.7"}}')},30:function(e,t,n){"use strict";(function(e){var r=n(14);t.__esModule=!0,t.default=void 0;var o=n(31),a=r(n(19)),i=n(33),s=n(48),l=n(215),c=n(217),u=n(66),p=n(70),d=n(71),f=n(72),g=n(80),m=n(152),b=n(144),y=n(180),h=n(182),v=n(186),k=(0,f.initializeI18n)(),w=(0,o.hot)(e)((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(s.ReactQueryDevtools,{initialIsOpen:!1}),a.default.createElement(h.ErrorBoundary,null,a.default.createElement(l.I18nextProvider,{i18n:k},a.default.createElement(i.BrowserRouter,null,a.default.createElement(u.ThemeProvider,{theme:b.theme},a.default.createElement(g.BaseLayout,null,a.default.createElement(a.default.Suspense,{fallback:a.default.createElement(v.ProgressBar,null)},a.default.createElement(c.ToastContainer,{position:c.toast.POSITION.TOP_RIGHT,autoClose:4e3}),(0,d.renderRoutes)(m.routes),a.default.createElement(y.GlobalStyles,null),a.default.createElement(p.Normalize,null))))))))}));t.default=w}).call(this,n(13)(e))},72:function(e,t,n){"use strict";var r=n(14);t.__esModule=!0,t.initializeI18n=void 0;var o=r(n(216)),a=n(215),i=r(n(76)),s=n(77),l={en:{translation:s.en},ru:{translation:s.ru}};t.initializeI18n=function(){var e=o.default.createInstance();return e.use(i.default).use(a.initReactI18next).init({debug:!1,lng:"en",resources:l,fallbackLng:"en",interpolation:{format:function(e,t){return"uppercase"===t?e.toUpperCase():e}}}),e}},77:function(e,t,n){"use strict";var r=n(78),o=n(79);t.__esModule=!0,t.en=r.en,t.ru=o.ru},78:function(e,t,n){"use strict";t.__esModule=!0,t.en=void 0;t.en={buttonText:"Button text",page:{home:{title:"Main",welcome:"Welcome to Home page"},about:{title:"About"},404:{title:"Error 404: Page not found",description:"Maybe this page has been deleted.",goBack:"Go back"}}}},79:function(e,t,n){"use strict";t.__esModule=!0,t.ru=void 0;t.ru={buttonText:"\u0422\u0435\u043a\u0441\u0442 \u043a\u043d\u043e\u043f\u043a\u0438",page:{home:{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",welcome:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"},about:{title:"\u041e \u043d\u0430\u0441"},404:{title:"\u041e\u0448\u0438\u0431\u043a\u0430 404: \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430",description:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430.",goBack:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"}}}},80:function(e,t,n){"use strict";var r=n(81);t.__esModule=!0,t.BaseLayout=void 0,t.BaseLayout=r.BaseLayout},81:function(e,t,n){"use strict";var r=n(14);t.__esModule=!0,t.BaseLayout=void 0;var o=r(n(19)),a=r(n(66)),i=n(82),s=n(151),l=a.default.div.withConfig({componentId:"sc-6pgkrq-0"})([""]);t.BaseLayout=function(e){var t=e.children;return o.default.createElement(s.BaseLayoutWrapper,null,o.default.createElement(i.LanguageSelector,null),o.default.createElement(l,null,t))}},82:function(e,t,n){"use strict";var r=n(83);t.__esModule=!0,t.LanguageSelector=void 0,t.LanguageSelector=r.LanguageSelector},83:function(e,t,n){"use strict";var r=n(14);n(84),n(141),t.__esModule=!0,t.LanguageSelector=void 0;var o=r(n(19)),a=n(215),i=n(143),s={en:"English",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"};t.LanguageSelector=function(e){var t=e.currentLanguage,n=(0,a.useTranslation)().i18n,r=o.default.useState(s[t||"en"]||s[n.language]),l=r[0],c=r[1],u=o.default.useState(!1),p=u[0],d=u[1],f=function(e){e.stopPropagation(),d(!p)};return o.default.createElement(i.SelectWrapper,{onClick:function(e){return f(e)}},o.default.createElement(i.Select,{onClick:function(e){return f(e)},showed:p},o.default.createElement("div",null,Object.keys(s).map((function(e){return o.default.createElement(i.Option,{key:e,onClick:function(){return function(e){c(s[e]),n.changeLanguage(e)}(e)}},s[e])})))),o.default.createElement(i.Overlay,{showed:p,onClick:f}),o.default.createElement(i.CurrentLanguage,null,l),o.default.createElement(i.ArrowElement,{reverse:p,onClick:f}))}}},[[11,1,2]]]);