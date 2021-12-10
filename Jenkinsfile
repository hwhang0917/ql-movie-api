pipeline {
	agent any
	tools {nodejs "node16.13"}
	stages {
		stage('Install Dependencies') {
			steps {
				sh 'yarn'
			}
		}
		stage('Running Test') {
			steps {
				sh 'yarn test:cov-summary'
			}
		}
		stage('Building') {
			steps {
				sh 'yarn build'
			}
		}
	}
}
