# How To Generate Reports With Mochawesome Report Generator
To generate reports using the Mochawesome report generator, we first need to add them to our existing project. Follow the below steps to add Mochawesome to the project:

## npm install mochawesome mochawesome-report-generator --save-dev
[Used to add Mochawesome only to the current directory]

## npm install -g mochawesome mochawesome-report-generator
[Used to add Mochawesome globally]

Once Mochawesome is added, you can create Mocha reports using Mochawesome using the following command:

npx mocha --spec search_basic.js --reporter mochawesome
1
npx mocha --spec search_basic.js --reporter mochawesome
The command for Mochawesome differs from the command used with the default Mocha report generator on two terms:

reporter is used to specify that we want to use the reporter option to generate Mocha reports.
mochawesome is used to specify that we will be using the Mochawesome report generator instead of the default Mocha reporter.
Here is how you can run the command on the search_basic.js file