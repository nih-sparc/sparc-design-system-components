import Vue from 'vue';
import ElementUI from 'element-ui';
import '@/assets/styles.scss';
import enLang from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, {
  locale: enLang
});

export default ElementUI;
