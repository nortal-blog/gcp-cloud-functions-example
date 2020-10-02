# TODO backend with Cloud Function and Firestore

## Pre-requisites

Running locally requires GCP service account that has *Cloud Datastore User* role. 

```bash
$ export GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account
```

## Cloud Functions 

Google Cloud Functions is serverless platform for event-driven solutions. It is typically used as a connective layer between various GCP services by responding to various events. It is also ideal for simple HTTP(S) based backends that require elastic scale such as mobile apps. 

Running locally:

```bash
$ npm start
```

Deployment: 

```bash
gcloud functions deploy todo-http-example --entry-point app --runtime nodejs10 --trigger-http --allow-unauthenticated --region europe-west1
```

Sources: 
*  (NodeJS functions framework)[https://github.com/GoogleCloudPlatform/functions-framework-nodejs]
 * (GCP Cloud Functions)[https://cloud.google.com/functions]

## Firestore (DataStore)

* Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development.
* Firestore is the next version of Datastore 
* Multi-region has 99.999% SLA, regional 99.99% SLA


## Additional considerations 

Combine Cloud Functions backends with Cloud Storage hosted web sites and use HTTP(S) Load Balancer to provide single URL for all resources. This gives fully serverless web application with massive scalability. 