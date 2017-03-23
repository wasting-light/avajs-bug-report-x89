## Avajs bug report

See [https://github.com/avajs/ava/issues/123](https://github.com/avajs/ava/issues/123)

### Testing

1. Clone the repo
  ```
  git clone https://github.com/wasting-light/avajs-bug-report-x89
  ```

2. Install dependencies

  ```
  npm install
  ```

3. Testing

  If the tests are inside `test` folder, it works:
  ```
  npm run working
  ```

  If the tests are not inside `test` folder or is inside a subfolder (`test/unit`), it doest not work:

  ```
  npm run not-working
  ```

