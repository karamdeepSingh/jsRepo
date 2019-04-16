pipeline {
    agent any

     environment {
        ARR = credentials('id')
    }

    stages {
     
        stage ('Compile Stage') {

            steps {
                echo "starting"
                echo ARR
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