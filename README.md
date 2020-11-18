# Short SHA

`short-sha` is a GitHub Action than provides an output `sha` with the shortened commit SHA.


> :warning: On November 16th, 2020 Github removes the `set-env` command. Version prior to v1.2 of this action *will not work*. See github [annoucement](https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/) for details.


## Usage

```yaml
name: 'build-test'
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: benjlevesque/short-sha@v1.2
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
