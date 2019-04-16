pipeline {
    agent any
    def abc

    stages {
        stage('Fetching environment variable') {
            environment {
                abc = credentials('Cred')
                echo abc
                echo abc_USR
                echo abc_PSW
            }


        stage ('Compile Stage') {

            steps {
                echo "starting"
            }
        }

        stage ('Testing Stage') {

            steps {
                sh 'npm install'
                 sh 'npm test'
            }
        }

    }
}