# Mighty Developers — landing page

Files
- index.html   — the landing page (all sections, animations, touch + scroll interactions)
- connect.html — Community Connect page (Instagram / WhatsApp / Discord / Substack)
- support.js   — the small runtime both pages use to render (keep it next to the HTML files)

Run it (Antigravity or any editor)
1. Open this folder as a workspace in Antigravity.
2. In the terminal run:  npx serve .     (or: python -m http.server 8080)
3. Open http://localhost:3000 (or :8080). The pages must be served over http, not opened by double-click.

Fill in before going live (search the files for "[")
- [EVENT NAME], [DATE · TIME], [COLLEGE], [VENUE], [TRACK 1-3], [TEAM SIZE], [PRIZES], [QR], [CONTACT EMAIL]
- connect.html: [INSTAGRAM LINK], [WHATSAPP LINK], [DISCORD INVITE LINK], [SUBSTACK LINK] — also put the real URLs in each card's href="#"
- index.html: "Join the community" / "Host a hackathon" buttons point to #apply — change to your form links.

Where things are in index.html
- <helmet><style>…</style>  all CSS (colours, animations, responsive rules)
- markup between <helmet> and </x-dc>  the page sections in order: hero + card deck, diagonal band,
  hackathon event wall, training & tasks, loop circle, sample tasks, two paths, join cards, social band, wave footer
- <script type="text/x-dc"> at the bottom  all behaviour (autoplay loop, task board, deck opening on scroll,
  swipe/tilt, scroll reveals)

Optional prompt for Antigravity if you want it ported to React/Next.js:
"Convert index.html and connect.html into a Next.js (App Router) + Tailwind project. Keep every section, colour,
animation and interaction identical. The {{ }} placeholders and <sc-for>/<sc-if> tags are template bindings driven
by the Component class in the <script type=text/x-dc> block — turn that class into React state/hooks."
