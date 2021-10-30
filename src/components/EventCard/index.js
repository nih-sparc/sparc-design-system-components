import EventCard from './src/EventCard';

/* istanbul ignore next */
EventCard.install = function(Vue) {
  Vue.component(EventCard.name, EventCard);
};

export default EventCard;
