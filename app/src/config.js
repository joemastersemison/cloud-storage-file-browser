// Duplicate and remove the underscore from this file and add your google oauth ID and API endpoint below before building

export default {
  idToken: "na",
  APIEndpoint: "https://us-central1-fuel-compliance.cloudfunctions.net/", // The URL to the cloud function
  CDN_URL: "https://fuel-compliance.appspot.com.storage.googleapis.com/", // The base URL to your CDN or bucket. This might be a custom subdomain or https://bucket-name.storage.googleapis.com/ if you don't have a CDN.
  BucketUrl: "https://storage.googleapis.com/fuel-compliance.appspot.com/", // This is used to bypass the cache on your CDN. ONLY replace the YOUR-BUCKET-NAME part with the name of your bucket.
  appName: "Compliance Library", // The name that appears at the top of the app menu.
};
