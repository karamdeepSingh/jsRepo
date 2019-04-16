pipeline {
    agent any

    stages {
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