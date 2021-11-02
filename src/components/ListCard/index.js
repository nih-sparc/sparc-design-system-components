import ListCard from './src/ListCard';

/* istanbul ignore next */
ListCard.install = function(Vue) {
  Vue.component(ListCard.name, ListCard);
};

export default ListCard;
