window.BillMo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new BillMo.Routers.AppRouter({ $rootEl: $("#main") });
  	Backbone.history.start();

    // var friends = new BillMo.Collections.
  }
};

$(BillMo.initialize);