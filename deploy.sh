echo "Building blog"
bundle exec jekyll build
echo "Deploying blog to s3"
aws s3 sync _site s3://kwur.wustl.edu
