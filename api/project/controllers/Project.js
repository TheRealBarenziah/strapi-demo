'use strict';

/**
 * Project.js controller
 *
 * @description: A set of functions called "actions" for managing `Project`.
 */

module.exports = {
  find: async (ctx) => {
    if (ctx.query._q) {
      const data = await strapi.services.project.search(ctx.query);
      ctx.set('Content-Range', `${data.length}`); 
      return data;
    } else {
      const data = await strapi.services.project.fetchAll(ctx.query);
      ctx.set('Content-Range', `${data.length}`); 
      return data;
    }
  },
};
