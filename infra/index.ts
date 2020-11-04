import cdk = require('@aws-cdk/core');
import { StaticSiteStack } from './stacks/s3-static-site-with-cloudfront';

const app = new cdk.App();
const staticSite = new StaticSiteStack(app, 'NextJS10StaticSite', {
  env: {
    account: app.node.tryGetContext('account'),
    region: app.node.tryGetContext('region'),
  },
  domainName: 'dennisokeeffe.com',
  siteSubDomain: 'nextjs-10-static-example',
});

// example of adding a tag - please refer to AWS best practices for ideal usage
cdk.Tags.of(staticSite).add('Project', 'NextJS 10 Example Deployment');

app.synth();
