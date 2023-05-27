module.exports = {
    filter: {},
    model: null,
    filterPost: async function (categorySlug = "", search = "") {
  
const category = await this.model.findOne({ slug: categorySlug });
this.filter = {};

      if (category) {
        this.filter.category = category._id;
      }

      if (search) {
        this.filter.title = { $regex: '.*' + search + '.*', $options: 'i' };
      }    },
        applyFilter: function () {
      let filter = {};
  
      if (this.filter.category) {
        filter.category = this.filter.category;
      }
  
      if (this.filter.title) {
        filter.title = this.filter.title;
      }

      return filter;
    }

  }