#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { HltbAlexaStack } from '../lib/hltb-alexa-stack';

const app = new cdk.App();
new HltbAlexaStack(app, 'HltbAlexaStack');
