async function loadHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      el.innerHTML = await res.text();
      // CDN email protection scripts in fetched fragments do not run via
      // innerHTML. Restore explicitly marked contact links without executing
      // scripts supplied by the fragment.
      for (const link of el.querySelectorAll('a[data-contact-email]')) {
        const email = link.getAttribute('data-contact-email');
        if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email || '')) {
          link.setAttribute('href', `mailto:${email}`);
          link.textContent = email;
        }
      }
    } catch (err) {
      console.error(`Could not load ${file}:`, err);
    }
  }
}

loadHTML('header', '/partials/header.html');
loadHTML('footer', '/partials/footer.html');
