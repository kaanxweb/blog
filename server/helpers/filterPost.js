module.exports = {
    filter: {},
    model: null,
    applyFilter: function () {
      let filter = {};
  
      if (this.filter.category) {
        filter.category = this.filter.category;
      }
  
      if (this.filter.title) {
        filter.title = this.filter.title;
      }
  
      return filter;
    },
    filterPost: async function (categorySlug, search) {
      const category = await this.model.findOne({ slug: categorySlug });
  
      if (category) {
        this.filter.category = category._id;
      }
  
      if (search) {
        this.filter.title = search;
      }
    }
  }