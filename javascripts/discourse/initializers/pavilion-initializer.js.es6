import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'pavilion-theme-initializer',
  initialize() {
    withPluginApi('0.8.30', api => {
      const osHref = "/c/open-source";
      const bugCat = {
        id: 46,
        href: `${osHref}/bug-reports/46?status=open`
      };
      const featureCat = {
        id: 42,
        href: `${osHref}/feature-request/46?status=open`
      };
      
      api.addNavigationBarItem({
        name: "open-topics",
        displayName: "Open",
        href: osHref,
        init: (navItem, category) => {
          if (category) {
            navItem.set("category", category);
          }
        },
        customFilter: (category, args, router) => {
          return category && [bugCat.id, featureCat.id].includes(category.id);
        },
        customHref: (category, args, router) => {
          if (category.id === bugCat.id) {
            return featureCat.href;
          }
          if (category.id === featureCat.id) {
            return featureCat.href;
          }
        },
        forceActive: (category, args, router) => {
          return (router.currentURL === bugCat.href) ||
            (router.currentURL === featureCat.href);
        }
      });
    })
  }
}