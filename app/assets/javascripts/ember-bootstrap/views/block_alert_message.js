//= require ember-bootstrap/core
//= require ember-bootstrap/views/alert_message

var Bootstrap = window.Bootstrap;

Bootstrap.BlockAlertMessage = Bootstrap.AlertMessage.extend({
  classNames: ['alert', 'alert-block']
});
