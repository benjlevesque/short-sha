# Short SHA

`short-sha` is a GitHub Action than provides an output `sha` with the shortened commit SHA.

## Usage

You can access the shortened value with either `${{ steps.short-sha.outputs.sha }}` (`short-sha` being the name of the action step) or `${{ env.SHA }}`.

```yaml
name: 'build-test'
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: benjlevesque/short-sha@v2.2
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

| Name          | Required | Default | Description                              |
| ------------- | -------- | ------- | ---------------------------------------- |
| length        | `false`  | 7       | the expected length of the shortened SHA |
| variable_name | `false`  | `SHA`   | the name of the exported env variable    |
