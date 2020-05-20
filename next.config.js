const withPWA = require('next-pwa')
const withImages = require('next-images')
const withFonts = require('next-fonts');

module.exports = withFonts(withImages(withPWA({
    pwa: {
        dest: 'public'
    }
})))
