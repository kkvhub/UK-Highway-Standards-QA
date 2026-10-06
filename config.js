// Portal settings. Leave endpoint empty to let visitors use their own Anthropic API key,
// or set it to your proxy address (see worker.js) so everyone can use AI reasoning without a key.
window.PORTAL_CONFIG = {
  endpoint: "",                 // e.g. "https://mchw-qa.your-name.workers.dev"
  model: "claude-sonnet-5-5"
};
