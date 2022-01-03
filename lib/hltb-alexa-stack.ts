import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class HltbAlexaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'HltbAlexaQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const hltbLambda = new lambda.Function( this, 'hltbLambda',{
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: 'index.main',
        code: lambda.Code.fromAsset(path.join(__dirname, '/../src/my-lambda')),
        environment: {}
      })

  }
}
