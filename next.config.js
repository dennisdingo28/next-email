/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    },
]

const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"lh3.googleusercontent.com",
                port:"",
                pathname:"/*/*"
            },
            {
                protocol:"https",
                hostname:"avatars.githubusercontent.com",
                port:"",
                pathname:"/*/*"
            },
        ]
    },
    async headers() {
        return [
          {
            "source": "/api/(.*)",
            "headers": [
              { "key": "Access-Control-Allow-Credentials", "value": "true" },
              { "key": "Access-Control-Allow-Origin", "value": "*" }, // Change this to specific domain for better security
              {
                "key": "Access-Control-Allow-Methods",
                "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
              },
              {
                "key": "Access-Control-Allow-Headers",
                "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
              }
            ]
          },
          {
            source: "/api/sendEmail",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
              },
              {
                key: "Access-Control-Allow-Headers",
                value:
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
              },
            ],
          },
          {
            source: "/api/sendEmail/:api_key",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
              },
              {
                key: "Access-Control-Allow-Headers",
                value:
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
              },
            ],
          },
        ];
    },
}

module.exports = nextConfig;