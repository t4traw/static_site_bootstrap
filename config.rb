ignore 'REAMDME.md'
ignore 'stylesheets/*'
ignore 'javascripts/*'

activate :external_pipeline,
  name: :gulp,
  command: build? ? './node_modules/gulp/bin/gulp.js' : './node_modules/gulp/bin/gulp.js watch',
  source: "source"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :layouts_dir, '_layouts'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :relative_assets
set :relative_links, true

configure :development do
  activate :livereload
end

configure :build do
  after_build do
    system('gulp build')
  end
end
