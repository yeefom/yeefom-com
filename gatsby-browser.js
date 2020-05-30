import littlefoot from 'littlefoot'

export function onRouteUpdate() {
  const isNotIe = window && window.document && !window.document.documentMode
  if (isNotIe) {
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
}
