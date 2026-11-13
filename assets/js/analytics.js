(() => {
  const preferenceKey = "analytics-disabled";
  const token = document.currentScript.dataset.token;
  const status = document.getElementById("analytics-status");
  const disableButton = document.getElementById("analytics-disable");
  const enableButton = document.getElementById("analytics-enable");
  let beaconLoaded = false;

  // If browser storage is unavailable, do not load analytics.
  function isDisabled() {
    try {
      return localStorage.getItem(preferenceKey) === "true";
    } catch {
      return true;
    }
  }

  function updateControls() {
    if (!status) return;
    const disabled = isDisabled();
    status.textContent = disabled ? "Analytics are disabled in this browser." : "Analytics are enabled in this browser.";
    disableButton.disabled = disabled;
    enableButton.disabled = !disabled;
  }

  function savePreference(disabled) {
    try {
      localStorage.setItem(preferenceKey, String(disabled));
      updateControls();
    } catch {
      status.textContent = "Your browser could not save this preference. Analytics stay off on this page. Allow site storage to save your choice.";
    }
  }

  // Controls appear only on the analytics-free privacy page.
  if (status) {
    disableButton.addEventListener("click", () => savePreference(true));
    enableButton.addEventListener("click", () => savePreference(false));
    updateControls();
  }

  function respectOptOut() {
    // Cloudflare has no unload API. Reload other open pages to discard the
    // running beacon; the saved preference prevents it from loading again.
    if (beaconLoaded && isDisabled()) {
      window.location.reload();
    } else {
      updateControls();
    }
  }

  window.addEventListener("storage", (event) => {
    if (event.key === preferenceKey || event.key === null) respectOptOut();
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) respectOptOut();
  });

  if (token && !isDisabled()) {
    const beacon = document.createElement("script");
    beacon.type = "module";
    beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
    beacon.dataset.cfBeacon = JSON.stringify({ token });
    document.head.appendChild(beacon);
    beaconLoaded = true;
  }
})();
