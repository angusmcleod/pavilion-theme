import { scheduleOnce } from "@ember/runloop";

export default {
  setupComponent(attrs, ctx) {
    scheduleOnce('afterRender', () => {
      let $el = $(ctx.element).find('.category-name');
            
      if (attrs.category.parentCategory) {
        $el.appendTo('section.category-heading');
      } else {
        $el.insertAfter('section.category-heading .category-logo');        
      }
    });
  }
}