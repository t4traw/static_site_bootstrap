activate :relative_assets
set :relative_links, true

activate :external_pipeline, {
  name: :webpack,
  command: build? ?
    "NODE_ENV=production yarn run build" :
    "NODE_ENV=develop yarn run develop",
  source: ".tmp/dist",
  latency: 1
}
