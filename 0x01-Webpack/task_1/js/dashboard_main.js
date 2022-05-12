import $ from 'jquery';
import _ from 'lodash';


$('<button>Click here to get started</button>').appendTo('body');
$('<p id="count"></p>').appendTo('body');
$('<p>Copyright - Holberton School</p>').appendTo('body');

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
