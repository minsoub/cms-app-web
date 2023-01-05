# 콘텐츠 통합관리 장애페이지

## Run Scripts

#### `yarn install`
#### `yarn start`

### Troubleshooting

#### - mac 에서 gyp 에러
#### `sudo rm -rf /Library/Developer/CommandLineTools`
#### `xcode-select --install`
#### `xcode-select --print-path`

#### - node-sass 문제
#### 1. nodemodule 삭제
#### 2. `yarn add node-sass`
##### 3. yarn.lock, package-lock.json 삭제
#### 4. `yarn install`
#### 5. `yarn start`