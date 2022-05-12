import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let current = 0;
  $('button').on(
    'click',
    _.debounce(() => {
      current += 1;
      $('#count').html(current);
    }, 150),
  );
}
updateCounter();
