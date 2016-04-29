import { assert } from 'chai'
import sanitize from '../src/js/sanitizer'

describe('sanitize', () => {
  it('should work', () => {
    let data = [
      {type: 'video/mp4', name: 'Kung.Fu.Panda.3.2016.HC.HDRip.XviD.AC3-EVO.avi', sanitized: 'kung fu panda 3'},
      {type: 'video/avi', name: 'sample.avi', sanitized: ''},
      {type: '', name: 'Deadpool 2016 1080p BluRay x264 DTS-JYK.mkv', sanitized: 'deadpool'},
      {type: 'text/txt', name: 'Torrent Downloaded From ExtraTorrent.cc.txt', sanitized: ''},
      {type: 'video/avi', name: '[ www.CpasBien.cm ] Lost.Boy.2015.FRENCH.WEBRip.XviD-ViVi.avi', sanitized: 'lost boy'},
      {type: 'video/mkv', name: 'Batman V Superman Dawn of Justice 2016 HD-TC x264 AC3-CPG.mkv', sanitized: 'batman v superman dawn of justice'}
    ]
    for(let item of data) {
      assert.equal(sanitize(item), item.sanitized)
    }
  })
})
