BillMo.Views.CommentForm = Backbone.View.extend({
  template: JST["comments/form"],
  template2: JST['submit'],
  events: {
    'keydown #add-comment': 'renderSubmitButton',
    'focus #add-comment': 'renderSubmitButton',
    'mouseleave form': 'clearSubmitButton',
    'submit form': 'createComment'
  },

  clearSubmitButton: function() {
    this.$('.comment-submit').empty();
  },

  createComment: function(event) {
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    attrs.transaction_id = this.collection.transaction.id;
    this.collection.create(attrs, { wait: true });
    $(event.target).find('input').val('')
  },
  
  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  renderSubmitButton: function() {
    var content = this.template2({ submitVal: 'Post' });
    this.$('.comment-submit').html(content);
    return this;
  },

});