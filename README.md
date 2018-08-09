# OMS' website [![Build Status](https://travis-ci.org/oslomarketsolutions/website.svg?branch=master)](https://travis-ci.org/oslomarketsolutions/website)

A work in progress of OMS' new website.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Access Locally

You need to set up a TOKEN to access fontawesome pro
so that yarn install works.

```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ \
npm config set "//npm.fontawesome.com/:_authToken" TOKEN
```

```
$ nvm install
$ yarn
$ yarn develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ nvm install
$ yarn build
$ yarn serve
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Everything in this repository except the OMS logo is MIT licensed.

All rights are reserved for the OMS logo.
