window.BillMo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // only need paid_transactions
    Billmo.paid_transactions = new BillMo.Collections.Transactions();

  	new BillMo.Routers.AppRouter({
      $rootEl: $("#main")
    });

  	Backbone.history.start();
  }
};