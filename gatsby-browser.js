const { littlefoot } = require('littlefoot')
require('littlefoot/dist/littlefoot.css')

export function onRouteUpdate() {
  littlefoot({
    buttonTemplate:
      `<button
        aria-controls="fncontent:<% id %>"
        aria-expanded="false"
        aria-label="Footnote <% number %>"
        class="littlefoot-footnote__button"
        id="<% reference %>"
        rel="footnote"
        title="See footnote <% number %>"
      />
        <% number %>
      </button>`,
    numberResetSelector: 'article'
  })
}
