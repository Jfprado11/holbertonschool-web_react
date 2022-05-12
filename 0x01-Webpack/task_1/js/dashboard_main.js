import $ from 'jquery';
import _ from 'lodash';

$('<p>Holberton Dashboard</p>').appendTo('body');
$('<p>Dashboard data for the students</p>').appendTo('body');
$('<button>Click here to get started</button>').appendTo('body');
$('<p id="count"></p>').appendTo('body');
$('<p>Copyright - Holberton School</p>').appendTo('body');

function updateCounter() {
  let current = 0;
  $('button').on(
    'click',
    _.debounce(function () {
      current += 1;
      $('#count').html(current);
    }),
  );
}
updateCounter();
