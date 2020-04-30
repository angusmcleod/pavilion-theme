import Component from '@ember/component';
import { scheduleOnce } from "@ember/runloop";

export default Component.extend({
  classNames: 'category-name-header',
  
  didInsertElement() {
    scheduleOnce('afterRender', () => {
      let $el = $(this.element);
            
      if (this.category.parentCategory) {
        $el.appendTo('section.category-heading');
      } else {
        $el.insertAfter('section.category-heading .category-logo');        
      }
    });
  }
})