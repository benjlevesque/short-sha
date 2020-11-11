import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['GITHUB_SHA'] = '6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1'
  process.env['INPUT_LENGTH'] = '6'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  const output = cp.execSync(`node ${ip}`, options).toString()
  expect(output).toContain('::set-output name=sha::6e8dcc')
})
