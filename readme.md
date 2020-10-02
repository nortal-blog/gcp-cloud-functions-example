# TODO backend with Cloud Function and Firestore

## Pre-requisites

Running locally requires GCP service account that has *Cloud Datastore User* role. 

```bash
$ export GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account
```

## Cloud Functions 

Running locally 

```bash
$ npm start
```

Deployment: 

```bash
gcloud functions deploy my-http-example --entry-point app --runtime nodejs10 --trigger-http --allow-unauthenticated
```

## Firestore (DataStore)

* Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development.
* Firestore is the next version of Datastore 
* Multi-region has 99.999% SLA, regional 99.99% SLA
