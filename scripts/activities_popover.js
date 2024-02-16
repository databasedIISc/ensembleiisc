
div = document.createElement("div");
a = document.querySelector("a[href='/activities/']");
div.className = `${a.className} menu`;
div.innerHTML = `
${a.outerHTML}
<div class="popover-menu">
<a class="${a.className}" href="/activities/talks-and-resources/">Talks and Resources</a>
<a class="${a.className}" href="/activities/schedule/">Schedule of Events</a>
</div>
`;
a.after(div);
a.remove();