module.exports ={
    output:"standalone",
}

module.exports = {
    async redirects() {
        return [
          {
            source: '/((?!.swa).*)',
            destination: '/home', 
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
                    source: '/((?!.swa).*)',
                    destination: '/home', 
                }
            ]
        }
    },
};