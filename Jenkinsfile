 pipeline {
     agent any
     environment {
         NODE_VERSION = '14' // Specify the Node.js version you want
     }
     stages {
         stage('Install NVM and Node.js') {
             steps {
                 echo 'Installing NVM and setting up Node.js...'
                 sh '''
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                     export NVM_DIR="$HOME/.nvm"
                     . "$NVM_DIR/nvm.sh"
                     nvm install $NODE_VERSION
                     nvm alias default $NODE_VERSION
                 '''
             }
         }
         stage('Install Dependencies') {
             steps {
                 echo 'Installing project dependencies...'
                 sh '''
                     export NVM_DIR="$HOME/.nvm"                   
                      "$NVM_DIR/nvm.sh"
                     nvm use $NODE_VERSION
                     npm install
                     npm install jest --save-dev
                '''
             }
         }
         stage('Run Tests') {
             steps {
                 echo 'Running tests...'
                 sh '''
                     export NVM_DIR="$HOME/.nvm"
                     . "$NVM_DIR/nvm.sh"
                     nvm use $NODE_VERSION
                     npm test
                 '''
             }
         }
         stage('Build') {
             steps {
                 echo 'Building the application...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                     nvm use $NODE_VERSION
                     npm run build
                 '''
             }
         }
     }
     post {
         always {
             echo 'Pipeline execution complete.'
         }
         success {
             echo 'Pipeline executed successfully!'
         }
         failure {
             echo 'Pipeline execution failed.'
         }
     }
 }
  
