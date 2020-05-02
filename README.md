# Short SHA

`short-sha` is a GitHub Action than provides an output `sha` with the shortened commit SHA.

## Usage

```yaml
name: 'build-test'
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: benjlevesque/short-sha@v1.1
        id: short-sha
        with:
          length: 6
      - run: echo $SHA
        env: 
          SHA: ${{ steps.short-sha.outputs.sha }}
      - run: echo $SHA
        env: 
          SHA: ${{ env.SHA }}
```

## Options

| Name   | Required | Default | Description                              |
| ------ | -------- | ------- | ---------------------------------------- |
| length | `false`  | 8       | the expected length of the shortened SHA |
