// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "28eihlsf1vmkkq8rp5fn6od6fc",                               // CognitoClientID
  "api_base_url": "https://waap9d4qu7.execute-api.eu-west-1.amazonaws.com/{StageNameParam}",  // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-appdemotodo-prod.auth.eu-west-1.amazoncognito.com", // CognitoDomainName
  "redirect_url": "https://master.d1jrmd8ppxvt1.amplifyapp.com"                               // AmplifyURL
};

export default config;
