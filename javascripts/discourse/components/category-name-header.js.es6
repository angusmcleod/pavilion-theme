import Component from '@ember/component';
import { scheduleOnce } from "@ember/runloop";

export default Component.extend({
  classNames: 'category-name-header',
  
  didInsertElement() {
    scheduleOnce('afterRender', () => {
      let $el = $(this.element);
                  
      if (this.category.uploaded_logo) {
        $el.insertAfter('section.category-heading .category-logo');  
      } else {
        $el.appendTo('section.category-heading');    
      }
    });
  }
})