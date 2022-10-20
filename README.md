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
      - uses: actions/checkout@v3
      - uses: benjlevesque/short-sha@v2.0
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
| length | `false`  | 7       | the expected length of the shortened SHA |
