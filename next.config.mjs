/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports ={
    output:"standalone",
}

module.exports = {
    async redirects() {
        return [
          {
            source: '/((?!.swa).*)<YOUR MATCHING RULE>',
            destination: '<YOUR REDIRECT RULE>', 
            permanent: false,
          },
        ]
    },
};

module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/((?!.swa).*)<YOUR MATCHING RULE>',
                    destination: '<YOUR REWRITE RULE>', 
                }
            ]
        }
    },
};