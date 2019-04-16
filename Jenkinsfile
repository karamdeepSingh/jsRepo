def username;
def password;

node{

    stage('Checkout'){
        checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '7b4e7f2d-b175-4b4d-b1cf-c79c268e47bc', url: 'https://github.com/karamdeepSingh/jsRepo.git']]]
    }

    stage('Execute'){
        npm install
        npm test
    }


}