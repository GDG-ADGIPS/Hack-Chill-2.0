Devfolio Apply integration

This project integrates the "Apply with Devfolio" button for Hack & Chill.

- The Devfolio SDK script is included in `index.html`:

  <script defer src="https://apply.devfolio.co/v2/sdk.js"></script>

- Where to add a button: add the following div where you want the button to appear (we added it to the hero and register components):

```html
<div class="apply-button" data-hackathon-slug="hackandchill-3" data-button-theme="light" style="height:44px; width:312px"></div>
```

- Replace the value of `data-hackathon-slug` with your Devfolio slug if it changes. Note: the button will only be visible and functional on domains that are allowed/verified for your hackathon on Devfolio.

If you prefer loading the SDK only on pages that need it (React-only pages), use the dynamic loader pattern shown in the Devfolio docs (create a script tag in a `useEffect` and append it to `document.body`).
