groovy
Copy code
pipeline {
agent any
tools {
nodejs 'index.js';
}
stages {
stage('Checkout';) {
steps {
git url: 'https://github.com/Ramakrishnareddy380/Paytm-Project.git',
branch:'main';
}
}
stage('Install Dependencies';) {
steps {
sh 'npm install';
}
}
stage('Build with Maven';) {

steps {
sh 'mvn clean package';
}
}
stage('Run Selenium Tests';) {
steps {
sh 'mvn test -Dtest=YourSeleniumTestClass';
}
}
}
post {
success {
echo 'Build and tests were successful!';
}
failure {
echo 'Build or tests failed!';
}
always {
echo 'Cleaning up...';
}
}
}






