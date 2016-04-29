import { assert } from 'chai'
import * as actions from '../src/js/actions'

describe('sanitize', () => {
  it('should echo', () => {
    assert.equal(actions.sanitize('hello'), 'hello')
  })
})
