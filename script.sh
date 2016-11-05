#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

echo '-- run eslint --'
eslint .

if [ "$TRAVIS_BRANCH" = "master" ]
then
    echo '-- build production --'
    export NODE_ENV=production
else
    echo '-- build staging --'
    export NODE_ENV=staging
fi
npm run build
echo '<!-- COMMIT:' $TRAVIS_COMMIT '-->' >> out/index.html
