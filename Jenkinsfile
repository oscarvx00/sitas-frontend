pipeline {
    agent {label "!master"}
    stages {
        stage ('Chekout'){
            steps {
                cleanWs()
                dir('sources'){
                    git url: 'https://github.com/oscarvx00/sitas-frontend', branch: 'main'
                }
            }
        }
        stage('Test') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                dir('test') {
                    sh 'cp -r -a ../sources/. ./'
                    sh 'cp -r -a containers/test/. ./'
                    
                    sh """
                    docker build -t sitas-frontend-test  .
                    """
                    
                    sh "docker run --name sitas-frontend-test-container sitas-frontend-test"
                    sh "mkdir coverage"
                    sh "docker cp sitas-frontend-test-container:/sitas-frontend-test/coverage/sitas/. ./coverage"
                    sh "docker container rm sitas-frontend-test-container"
                    //sh "docker image rm sitas-frontend-test"
                    
                    withSonarQubeEnv('sonarqube'){
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                    script {
                        def qualitygate = waitForQualityGate()
                        if(qualitygate.status != 'OK'){
                            // "Pipeline aborted due to quality gate coverage failure."
                        }
                    }
                }
            }
        }
        stage ('Deploy'){
            steps {
                dir('deploy') {
                    sh 'cp -r -a ../sources/. ./'
                    sh 'cp -r -a containers/prod/. ./'
                    
                    sh """
                    docker build -t oscarvicente/sitas-frontend-prod  .
                    """
                    withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'pass')]) {
                        sh "docker login --username oscarvicente --password $pass; docker push oscarvicente/sitas-frontend-prod"
                    }
        
                    //Deploy in k8s, server configured
                    dir('kube'){
                        sh 'kubectl delete deploy -n sitas sitas-frontend'
                        sh 'kubectl apply -f sitas-frontend-deploy.yaml'
                        sh 'kubectl apply -f sitas-frontend-service.yaml'
                    }
                }
            }
            
        }
    }
}