Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : '404',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});

Router.map(function () {

  this.route('home', {
    path:'/'
  });

  this.route('contact');

  this.route('portfolio');

  this.route('team');

});