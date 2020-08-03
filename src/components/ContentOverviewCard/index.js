import ContentOverviewCard from './src/ContentOverviewCard';

/* istanbul ignore next */
ContentOverviewCard.install = function(Vue) {
  Vue.component(ContentOverviewCard.name, ContentOverviewCard);
};

export default ContentOverviewCard;
