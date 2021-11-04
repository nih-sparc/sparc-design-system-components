import ContentTabCard from './src/ContentTabCard';

/* istanbul ignore next */
ContentTabCard.install = function(Vue) {
  Vue.component(ContentTabCard.name, ContentTabCard);
};

export default ContentTabCard;