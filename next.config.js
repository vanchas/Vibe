const withPWA = require('next-pwa')
const withImages = require('next-images')
// const withFonts = require('next-fonts');
const withFonts = require('nextjs-fonts');

module.exports = withPWA(withImages(withFonts({
    pwa: {
        dest: 'public'
    }
})))
