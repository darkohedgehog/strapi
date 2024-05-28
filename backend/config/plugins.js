module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name:env('CLOUDINARY_NAME', 'strapi'),
          api_key: env('CLOUDINARY_KEY', 'strapi'),
          api_secret: env('CLOUDINARY_SECRET', 'strapi'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });