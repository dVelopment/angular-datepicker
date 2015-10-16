var options = {
  "version": "1.0.21",
  "packageName": "dvelopment:angular-datepicker",
  "where": "client"
};

Package.describe({
  name: options.packageName,
  version: options.version,
  summary: 'AngularJS datepicker directives',
  git: 'git@github.com:g00fy-/angular-datepicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0', 'METEOR@1.0');
  api.use('angular:angular@1.2.0', options.where);
  api.addFiles('dist/angular-datepicker.js', options.where);
  api.addFiles('dist/angular-datepicker.css', options.where);
});
